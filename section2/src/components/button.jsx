import "./Button.css";


export default function Button({color, text, children}) {
    console.log("-------" + props);

    const {color, text} = props;
    return <button 
        style = {{
            backgroudColor : color,
        }}
        className = "button"> 
        
        {children}
         </button>;
}


