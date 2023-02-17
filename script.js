//1.Write a “person” class to hold all the details.

let person = {
  name: "Mohamed Salman Faris",
  age: 27,
  course: "Full Stack Developer",
  institute: "GUVI",
  place: "chennai",
  greeting: function () {
    let msg = `My name is ${this.name}, i'm learning ${this.course} in ${this.institute} at ${this.place}.`;
    console.log(msg);
  },
};
person.greeting();

//2.write a class to calculate the uber price.

class price {
  constructor(dis, prc) {
    this.dis = dis;
    this.prc = prc;
  }

  something() {
    console.log(this.dis * this.prc);
  }
}

prices = new price(10, 20);

prices.something();
