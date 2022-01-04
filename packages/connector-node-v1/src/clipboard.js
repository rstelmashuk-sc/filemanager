class Clipboard {
  constructor() {
    this.clipboard = null;
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
}

export default new Clipboard();
