import { useState } from 'react'
import './App.css'

// 함수 컴포넌트 -> 앱보다 간편하고 빠름
function Header_old() {
  return (

    <header>
      <h1> Header </h1>
    </header>
  );
}

//위 함수는 const Header = () => { return (~~~ )} 과 똑같다
const Header = () => {
  return (
    <header>
    <h1> Header</h1>
    </header>
  );
};


function App() { //앱 컴포넌트, 여기서 자식객체로 헤더함수 호출하도록, 컴포넌트는 무조건 Capital로 시작
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1>Hello React</h1>
    </>
  )
}

export default App;
