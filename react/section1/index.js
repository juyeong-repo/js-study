import mul, { add, sub } from "./math.js"
import randomColor from "randomcolor"; 
// from 뒤에 경로를 적지 않은 것은 node_module로 부터 라이브러리를 읽어오겠다는 것
// node_modules, package-lock은 삭제하고 공유해도 괜찮다(용량문제) -> npm install 하면 설치 됨


const color = randomColor();
console.log(color);
