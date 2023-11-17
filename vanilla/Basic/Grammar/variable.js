

// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';
// 글로벌한 변수들은 메모리위에 올라가서 어플리케이션 처음부터 끝까지 내려오지 않음
// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
    // 블럭 안에 들어가면 밖에서 못봄. 글로벌하지 않음
  let name = 'jindol';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only) 한번 할당하면 값이 절대 바뀌지 않음. static과 같다!!!!!
// use const whenever possible. 스레드 세이프티하다. 여러 스레드가 동시에 접근해서 수정할 수 없다.
// mutable = let, immutable == const
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive(더이상 작게 나눠질 수 없음), single item: number, string, boolean, null, undefined, symbol
// object(프리미티브 모았어요), box container
// function, first-class function (함수의 인자로도 전달될 수 있다.)

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) 자바스크립트의 넘버
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); // 변수 할당 어떻게 하는지 참고
console.log(`value: ${bigInt}, type: ${typeof bigInt}`)

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, '' -> 폴스로 할당되는 아이들
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null -> 널이라 할당되는 아이들
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined -> 값이 지정되지 않은 언디파인드 상태
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects 고유식별자가 필요할 때 쓰인다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //동일하지 않다. 메모리 주소가 다르구나. 다른 번지에 저장되는구나! 자바와 비슷비슷
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); //항상 description을 사용하여 출력해야한다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure 오브젝트 타입! 한번 할당된 오브젝트는 다른 오브젝트로 할당이 불가능하다. 
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

const ellie = { name: 'jindol', age: 20};


// 5. Dynamic typing: dynamically typed language //자바스크립트의 하이라이트!!!! 다이나믹하다 -> 런타임때 할당된 값에 따라 달라진다. 
//다수의 엔지니어들이 이것때문에 힘들어하기도한다.
let text = 'hello';
console.log(text.charAt(0)); //스트링되었다가
console.log(`value: ${text}, type: ${typeof text}`);
text = 1; // 1이 되었다가
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
