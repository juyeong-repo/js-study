let 이름 : string = 'kim';

let 이름2 : {name? : string} = {name : 'kim'} //name 속성이 들어올 수도 있고 들어오지 않을 수도 있다~ 옵션이에요

let 이름3 : string[] | number = 123; //union, 둘중 하나 타입이다~

type DeclaredType = string | number; //보통 대문자로 작명한다

let 이름4 : DeclaredType = 123;


// 두려워하지 맙시당 ..


function 함수 (x : number )  : number {
    return x * 2 
} //함수에 타입지정 가능 


type Member = [number, boolean] ; // 무조건 첫번재는 number, 둘째는 boolean 이어야 한다 
let john : Member = [123, true];