import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "Enna ma kannu"),
]), React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "power is beast"),
])]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);