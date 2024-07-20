
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}
// let ani = new Animal("Dog",4)
// console.log(ani); //Animal { name: 'Dog', legCount: 4 }
