class Proto extends Error {
  constructor(status=500, message='', info={}) {
    super(message);
    this.status = status;
    this.message = message;
    this.info = info;
  }

  getStatus() {
    return this.status;
  }

  getMessage() {
    return this.message;
  }

  getInfo() {
    return this.info;
  }
}

module.exports = Proto;
