/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */
var name = '코드팩토리';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * 
 * let, var로 선언하면 값을 추후 변경 가능 
 * but const는 추후 변경 불가
 */
ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '코드팩토리';

/**
 * 선언과 할당
 * declaration and allocation 
 * 1) 변수의 선언
 * 2) 값의 할당
 */
var name = '코드팩토리'; // Declaration and Allocation

let girlFriend;
console.log(girlFriend);

const girlFriend2;