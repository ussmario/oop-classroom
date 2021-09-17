class Desk {
  constructor(length, width, height, isWhiteboard, content = ''){
    this.length = length;
    this.width = width;
    this.height = height;
    this.isWhiteboard = isWhiteboard;
    this.content = content;
  }
  write(app){
    this.content += app;
  }
  wipe(){
    if (this.isWhiteboard) this.content = '';
  }
}

module.exports = Desk
