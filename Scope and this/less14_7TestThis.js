/*
Дополнить объект методом для получения имени:
- компании
- сео
- сотрудника
*/

//? мое решение
const company = {
  name: 'ООО Агро',
  employees: [
    {
      name: 'Света',
    },
  ],
  ceo: {
    name: 'Вася',
    getNameCEO: function () {
      return this.name;
    },
  },
  getNameCompany: function () {
    return this.name;
  },
};

console.log(company.getNameCompany());
console.log(company.ceo.getNameCEO());
console.log(company.employees.map((i) => console.log(i.name)));

//? решение преподавателя
const company2 = {
  name: 'ООО Агро',
  employees: [
    {
      name: 'Света',
      getName: function () {
        return this.name;
      },
    },
  ],
  ceo: {
    name: 'Вася',
    getName: function () {
      return this.name;
    },
  },
  getName: function () {
    return this.name;
  },
};

console.log(company2.getName());
console.log(company2.ceo.getName());
console.log(company2.employees.map((employee) => employee.getName()));
