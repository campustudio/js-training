export default class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
  }

  getName() {
    return `${this.firstname} ${this.lastname}`
  }
}

const developer = new Developer('Imported', 'Module')

console.log(developer.getName())
