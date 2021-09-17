class Marker {
  constructor(size, color, remainingInk) {
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk;
  }
  write(use) {
    let chars = use.replace(/\s/g, '');
    let spaces = use.length - chars.length;
    if (this.remainingInk - chars.length >= 0) {
      this.remainingInk -= chars.length;
      return use;
    } else {
      let written = '';
      for (let i of use) {
        if (i == ' ') {
          written += i
          continue;
        }
        if (this.remainingInk > 0) {
          this.remainingInk--;
          written += i
        }
      }
      return written;
    }
    console.log(this.remainingInk)
  }
}


module.exports = Marker
