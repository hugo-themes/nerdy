import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.data('themeToggle', () => ({
  dark: false,
  init() {
    const stored = localStorage.getItem('theme');
    this.dark = stored
      ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.apply();
  },
  toggle() {
    this.dark = !this.dark;
    localStorage.setItem('theme', this.dark ? 'dark' : 'light');
    this.apply();
  },
  apply() {
    document.documentElement.classList.toggle('dark', this.dark);
  },
}));

Alpine.data('terminalPortfolio', (config = {}) => ({
  commands: {},
  quickCommands: [],
  history: [],
  input: '',
  isProcessing: false,
  bootCompleted: false,
  prompt: {
    user: config.user || 'guest',
    host: config.host || 'MacBook-Pro',
    directory: config.directory || '~',
  },
  autoCommand: config.autoCommand || 'help',

  init() {
    this.$nextTick(() => {
      this.loadCommands();
      this.boot();
    });
  },

  loadCommands() {
    const templates = this.$root.querySelectorAll('template[data-terminal-command]');

    templates.forEach((template) => {
      const command = template.dataset.terminalCommand;
      const weight = Number.parseInt(template.dataset.weight || '999', 10);
      const definition = {
        name: command,
        label: template.dataset.label || command,
        description: template.dataset.description || '',
        quick: template.dataset.quick === 'true',
        weight,
        html: template.innerHTML.trim(),
      };

      this.commands[command] = definition;

      if (definition.quick) {
        this.quickCommands.push(definition);
      }
    });

    this.quickCommands.sort((a, b) => a.weight - b.weight || a.label.localeCompare(b.label));
  },

  async boot() {
    this.isProcessing = true;

    const now = new Date();
    const bootMessages = [
      `Last login: ${now.toString().split(' GMT')[0]} on ttys000`,
      `Restored session: ${now.toDateString()}`,
    ];

    for (const message of bootMessages) {
      this.pushOutput(`<div class="mb-1 text-gray-400">${this.escapeHtml(message)}</div>`);
      await this.wait(50);
    }

    this.pushOutput('<div class="mb-4 mt-2 text-gray-400">Type <span class="font-bold text-gray-100">help</span> to see available commands.</div>');

    this.isProcessing = false;
    this.bootCompleted = true;
    this.focusInput();

    if (this.autoCommand) {
      await this.processCommand(this.autoCommand, true);
    }
  },

  async submit() {
    const command = this.input.trim();
    await this.processCommand(command);
  },

  async runQuickCommand(command) {
    await this.processCommand(command, true);
  },

  async processCommand(commandString, simulateTyping = false) {
    if (this.isProcessing) return;

    this.isProcessing = true;

    if (simulateTyping) {
      this.input = '';
      await this.typeCommand(commandString);
      await this.wait(150);
    }

    this.pushCommand(commandString);
    this.input = '';

    const args = commandString.split(' ').filter(Boolean);
    const command = (args[0] || '').toLowerCase();

    if (command === 'clear') {
      this.history = [];
      this.isProcessing = false;
      this.focusInput();
      return;
    }

    const output = this.resolveCommand(command, args);

    if (output) {
      this.pushOutput(output);
    }

    this.isProcessing = false;
    this.focusInput();
  },

  resolveCommand(command, args) {
    if (!command) return '';

    if (command === 'date') {
      return `<div class="mb-4 text-gray-300">${this.escapeHtml(new Date().toString())}</div>`;
    }

    if (command === 'echo') {
      return `<div class="mb-4 text-gray-300">${this.escapeHtml(args.slice(1).join(' '))}</div>`;
    }

    if (command === 'sudo') {
      return '<div class="mb-4 font-bold text-red-500">guest is not in the sudoers file. This incident will be reported.</div>';
    }

    if (this.commands[command]) {
      return `<div class="mb-4 text-gray-300">${this.commands[command].html}</div>`;
    }

    return `<div class="mb-4 text-red-400">bash: ${this.escapeHtml(command)}: command not found. Type 'help' to see available commands.</div>`;
  },

  pushCommand(command) {
    this.history.push({ type: 'command', command });
    this.scrollToBottom();
  },

  pushOutput(html) {
    this.history.push({ type: 'output', html });
    this.scrollToBottom();
  },

  async typeCommand(command) {
    for (const char of command) {
      this.input += char;
      this.scrollToBottom();
      await this.wait(20 + Math.random() * 40);
    }
  },

  focusInput() {
    this.$nextTick(() => {
      this.$refs.input?.focus();
      this.scrollToBottom();
    });
  },

  scrollToBottom() {
    this.$nextTick(() => {
      if (this.$refs.container) {
        this.$refs.container.scrollTop = this.$refs.container.scrollHeight;
      }
    });
  },

  wait(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  },

  escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  },
}));

Alpine.start();
