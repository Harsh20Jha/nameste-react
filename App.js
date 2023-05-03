// Helloo world by JS
/*const heading = document.createElement("h1");
heading.innerHTML = "Helloo world by JS";
const root = document.getElementById("root");
root.appendChild(heading)*/
//Helloo world by React
/* const heading = React.createElement("h1", {id:'child'}, "Hello world from React");
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading); */

const parent = React.createElement('div', {id:'parent'}, 
[
    React.createElement('h1', {id:'child01'}, 'This is child 1'),
    React.createElement('h2', {id:'child02'}, 'This is child 2'),
]
);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);

