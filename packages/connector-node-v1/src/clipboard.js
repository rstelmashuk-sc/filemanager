class Clipboard {
  constructor() {
    this.clipboard = null;
    this.trigger = null;
  }

  setClipboard(resource) {
    this.clipboard = resource;
  }
  getClipboard() {
    return this.clipboard;
  }
  clearClipboard() {
    this.clipboard = null;
  }
  getTrigger() {
    return this.trigger;
  }
  setTrigger(value) {
    this.trigger = value;
  }
  clearTrigger() {
    this.trigger = null;
  }
}

export default new Clipboard();
