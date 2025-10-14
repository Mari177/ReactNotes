import React from "react";
import ReactDOM from "react-dom/client";


const Title = () => (
        <h1 className="title">  
        Sivagnanasambandhar Vazhga
        </h1>
    );

const data = 10000;

let HeadingComponent = () => (
    <div id="container">
         <Title></Title>
         <Title/>
         {Title()}
        <h1 id="heading" className="headClass">Namaste React functional component </h1>
    </div>
);




let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);