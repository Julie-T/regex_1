export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    // const re = new RegExp('^([a-z])+([-_\d^(\d{3})])+([a-z])+$', 'i');
    // return re.test(this.name);
    return /^([a-z])+([-_\d^(\d{3})])+([a-z])+$/.exec(this.name) !== null;
  }
}
