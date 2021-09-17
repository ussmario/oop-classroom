class Student {
  constructor(name, skillLevel, assignments = []) {
    this.name = name;
    this.skillLevel = skillLevel;
    this.assignments = assignments;
  }
  study() {
    if (this.skillLevel < 100) this.skillLevel += 1;
    return this;
  }
  doHomework(ass) {
    if (!ass) {
      for (let i of this.assignments) {
        if (i.skillLevel <= this.skillLevel) {
          i.completed = true;
        }
      }
    } else if (ass.skillLevel && ass.skillLevel > 0 && ass.skillLevel < 101) {
      if (ass.skillLevel < this.skillLevel) {
        ass.completed = true;
      } else {
        ass.completed = false;
      }
      this.assignments.push(ass);
    }
  }
}

module.exports = Student
