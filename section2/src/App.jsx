import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


function App() { //앱 컴포넌트, 여기서 자식객체로 헤더함수 호출하도록, 컴포넌트는 무조건 Capital로 시작
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default App;
