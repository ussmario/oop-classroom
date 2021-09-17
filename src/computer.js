class Computer {
  constructor(name, operatingSystem, processor, memory, graphics, on = false) {
    this.name = name;
    this.operatingSystem = operatingSystem;
    this.processor = processor;
    this.memory = memory;
    this.graphics = graphics;
    this.on = on;
  }
  power(){
    this.on = !this.on;
  }
}

module.exports = Computer
