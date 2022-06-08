// function student(name, grade) {
//   this.name = name;
//   this.grade = grade;
// }

// const betty = new student("betty", 40);
// student();
// console.log(betty);

// class student {
//   constructor(name, age, grade) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
// }

// const betty = new student("betty", 40, 3.6);
// console.log(betty);

class student {
  //private class fields
  #name;
  #age;
  #grade;
  #gpa;
  #courses;

  constructor(name, age, grade, gpa, courses) {
    // invokes the setter
    this.#name = name;
    this.#age = age;
    this.#grade = grade;
    this.#gpa = gpa;
    this.#courses = courses;
  }

  setAge(newAge) {
    if (newAge > 18) {
      this.age = newAge;
    } else {
      console.log("you are too young");
    }
  }
  getAge() {
    return this.age;
  }

  setName(newName) {
    if (newName.length > 1) {
      this.name = newName;
    } else {
      console.log("invalid name");
    }
  }
  getName() {
    return this.name;
  }

  setGrade(newGrade) {
    if (newGrade == A) {
      this.grade = newGrade;
    } else {
      console.log("you can do better");
    }
  }
  getGrade() {
    return this.grade;
  }

  setGpa(newGpa) {
    if (newGpa < 3) {
      this.gpa = newGpa;
    } else {
      console.log("you are an excellent student");
    }
  }
  getGpa() {
    return this.gpa;
  }

  setCourses(newCourses) {
    if (newCourses == Geography) {
      this.courses = newCourses;
    } else {
      console.log("you are not even supposed to be in this class");
    }
  }
  getCourses() {
    return this.courses;
  }

  getWelcome() {
    //  Accessing private field
    return this.welcome;
  }
  welcome() {
    console.log(
      `${this.#name} is ${this.#age} and in grade ${this.#grade} with ${
        this.#courses
      } with ${this.#gpa}`
    );
  }
}
const betty = new student("bett", 28, 5, 4, ["maths", "english"]);
const kojo = new student("kojo", 8, 5);
