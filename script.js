"use strict";

//Task

class Person {
  constructor(firstName, lastName, age, birthDayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDayDate = birthDayDate;
  }
  celebrate() {
    return "Happy Birthday, let`s celebrate";
  }
}

class Employee extends Person {
  #salary;
  constructor(firstName, lastName, age, birthDayDate, salary, jobPosition) {
    super(firstName, lastName, age, birthDayDate);
    this.#salary = salary;
    this.jobPosition = jobPosition;
  }
  get yearSalary() {
    return this.#salary * 12;
  }

  celebrate() {
    const currentYear = new Date().getFullYear();

    const birthDay = new Date(this.birthDayDate);
    birthDay.setFullYear(currentYear);

    if (birthdayInWeekend(birthDay)) {
      return super.celebrate();
    } else {
      return "Happy Birthday, but I need to work";
    }
  }
}

const birthdayInWeekend = function (date) {
  const day = new Date(date).getDay();

  return day === 0 || day === 6;
};

const person = new Person("Peter", "Parker", 27, "1995-04-26");
const employee = new Employee(
  "Lydia",
  "Martin",
  23,
  "1999-08-12",
  500,
  "junior"
);

console.log(person.celebrate());
console.log(employee.celebrate());
