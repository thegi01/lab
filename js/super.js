console.log(`\n클래스에서 super 사용하기`)

class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
}
class Square extends Polygon {
  constructor(length) {
    // this.height; // 참조오류가 발생합니다. super가 먼저 호출되어야 합니다.

    // 여기서, 부모클래스의 생성자함수를 호출하여 높이값을 넘겨줍니다.
    // Polygon의 길이와 높이를 넘겨줍니다.
    super(length, length);

    console.log('this.width', this.width)
    console.log('this.height', this.height)

    // 참고: 파생 클래스에서 super() 함수가 먼저 호출되어야
    // 'this' 키워드를 사용할 수 있습니다. 그렇지 않을 경우 참조오류가 발생합니다.
    this.name = 'Square';
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this.area = value;
  }
}

const test = new Square(10);
console.log('test', test)
console.log('test.area', test.area)
// test.sayName()


console.log(`\n정적 메서드에서 Super 호출`)

class Human {
  constructor() {}
  static ping() {
    return 'ping';
  }
}

class Computer extends Human {
  constructor() {}
  static pingpong() {
    return super.ping() + ' pong';
  }
}
console.log( Computer.pingpong() ); // 'ping pong'

console.log(`\nsuper의 속성 삭제`);
class Base {
  constructor() {}
  foo() {}
}
class Derived {
  constructor() {}
  delete() {
    // delete super.foo;
  }
}
new Derived().delete(); // 참조오류: 'super'완 관련된 삭제가 유효하지 않습니다. 


console.log(`\nSuper.prop은 non-writable 속성을 덮어 쓸 수 없습니다`);
class X {
  constructor() {
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1
    });
  }
  f() {
    // super.prop = 2;
  }
}

var x = new X();
x.f();
console.log(x.prop); // 1


console.log(`\n객체 리터럴에서 super.prop 사용하기`);
var obj1 = {
  method1() {
    console.log("method 1");
  }
}
var obj2 = {
  method2() {
   super.method1();
  }
}
Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"






