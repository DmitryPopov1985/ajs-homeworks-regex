export default class Validator {
  constructor() {
    this.rules = [
      { key: /[^[^\w-]+/g, value: 'Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)' },
      { key: /^[\d\-_]/, value: 'Логин не может начинаться цифрами, символами подчёркивания или тире' },
      { key: /[\d\-_]$/, value: 'Логин не может заканчиваться цифрами, символами подчёркивания или тире' },
      { key: /\d{4}/, value: 'Логин не может содержать подряд более трёх цифр' },
    ];
  }

  validateUsername(userName) {
    for (let index = 0; index < this.rules.length; index += 1) {
      if (this.rules[index].key.test(userName)) {
        return this.rules[index].value;
      }
    }
    return true;
  }
}
