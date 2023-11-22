export default function Body() {
    const number = 10;
    const string = "hello";
    const bool = true; 
    const obj = {
        a: 1,
    };
    
    const user = {
        name : "주영",
        isLogin: true
    }

    const func = () => {
        return "func" ;
    };

// 조건부 렌더링
    return (
        <>
        {number % 2 === 0? (
            <div> {number}는 짝수입니다</div>
            ) : (
            <div> {number}는 짝수입니다</div>
            )}
        </>
                );


    return (
        <>
        {user.isLogin ? (
            <div> {number}는 짝수입니다</div>
            ) : (
            <div>로그인</div>
            )}
        </>
        );   
        
    if (user.isLogin) {
        return <div> 마이페이지, 로그아웃 </div>;
        
    } else {
        return <div> 로그인 </div>;
    }
}


// 삼항연산자를 생각보다 많이 쓰는듯함
