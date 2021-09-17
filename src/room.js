class Room {
  constructor(name, description, contents = []){
    this.name = name;
    this.description = description;
    this.contents = contents;
  }
  //chainable, promise?
  add(item){
    let c = this.contents.push(item);
    return this;
  }

  has(ck4){
    return (this.contents.includes(ck4));
  }
}

module.exports = Room
