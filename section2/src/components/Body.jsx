import "./Body.css";
import Button from "./button";

export default function Body() {

    const buttonProps = {
        text : "1st button",
        color : "Green",
        a: 1,
        b: 2,
        c: 3,
    };


    return (

        <div className="body">
            <h1>body</h1>
            <Button {...buttonProps}>
                <div> button </div>
            </Button>
            <Button text= {"2"}/>
            <Button text= {"3"} /> 
        </div>
        );
}

// 객체로 묶여온 props, IF 여러개의 props를 전달한다면? 
// 컴포넌트에게 children 객체로 전달하려면? 