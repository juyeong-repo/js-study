// 1. String concatenation 문자열 연쇄
console.log('my' + ' cat'); // mycat
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
// \n 줄바꿈 
console.log(`my` + `car`);

// `` 변수, '' 문자열? 

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder 나머지 
console.log(2 ** 3); // exponentiation 2의 3승

// 3. Increment and decrement operators 증감연산자
let counter = 2;
const preIncrement = ++counter;
// 카운터에 1 더하고 할당합니다
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);


const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators 비교 연산자
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal


// 6. Logical operators: || (or), && (and), ! (not) 논리 연산자 
const value1 = true;
const value2 = 4 < 2;


// || (or), finds the first truthy value -> 그러니까 주니어 개발자들은 가장 먼저 트루 리턴하는 함수나 밸류를 맨 앞에 두는 것이 중요! 
console.log(`or: ${value1 || value2 || check()}`);


// && (and), finds the first falsy value -> 폴스 찾으면 바로 응 트루반환안해 폴스야~해버린다! 헤비한 오퍼레이션일수록 뒤로 보내자
console.log(`and: ${value1 && value2 && check()}`);

// 앤드연산자는 간단히 널 체크할때도 쓰인다.
// often used to compress long if-statement
// nullableObject && nullableObject.something

if (nullableObject != null) {
    nullableObject.something;
}

//체크 함수 wasting time 하다가 결국 true 리턴하는 친구
function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not) 낫 연산자
console.log(!value1);

// 7. Equality 이퀄리티. 두개가 같은지 비교해요
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 문자열,숫자긴 한데 너네 둘다 5잖아~라고 인식함
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion 3개는 엄격함! 코딩 시 === 사용하는 것을 추천
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference 오브젝트 이퀄리티는 더 신중하게 비교해야함
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //레퍼런스 다르니까 fasle
console.log(ellie1 === ellie2);// 레퍼런스 다르니까 fasle
console.log(ellie1 === ellie3); //레퍼런스 밸류 같으므로 true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false);// false
console.log('' == false);// f
console.log('' === false);//f
console.log(null == undefined);// t
console.log(null === undefined);// f 타입은 다름 

// 8. Conditional operators: if 조건문
// if, else if, else
const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

const testname = 'juyeong';
if (testname === 'jindol') {
    console.log('welcome, jindol')
} else if (testname === 'pooh') {
    console.log('welcome, pooh');
} else {
    console.log('Who are you');
}
// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!'); //같은 내용을 리턴하면 이렇게 묶어서 쓸 수 있다
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops 와일문!
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first, 두 와일 
// then check the condition.
do { //블럭을 먼저 실행
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops 중첩, 빅오에서 효율성 안좋으니까 사용 자제
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
