function add(a,b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
} 

// 클래스간 객체를 내보내고, 들여오는 것 -> 모듈 시스템. (old : CJS, new: ESM 둘 다 알아야 함)
// CJS :  export , require
module.exports = {
    add,
    sub,
};


