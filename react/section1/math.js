export function add(a,b) {
    return a+b;
}

export function sub(a,b) {
    return a-b;
} 

// 클래스간 객체를 내보내고, 들여오는 것 -> 모듈 시스템. (old : CJS, new: ESM 둘 다 알아야 함)
// ESM :

// export { add, sub };

// 기본값으로 내보내기 -> math 모듈을 대표하는 값
export default function multiply(a,b) {
    return a * b;
}