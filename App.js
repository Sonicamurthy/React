{/* <div id="parent">
    <h1 id="child1">
        <h2>Hello from child1</h2>   //creates object
    </h1>
    <h1 id="child2">
        <h2>Hello from child2</h2>
    </h1>                             //React(element)=>HTML(browser understands)
</div> */}

const head=React.createElement(
    "div",{id : "parent"},
   [ React.createElement("h1",{id :"child1"},
    React.createElement("h2",{},"Hello from child1")),
 React.createElement("h1",{id :"child2"},
    React.createElement("h2",{},"Hello from child2"))]) // It creates object 

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(head)  // this created h1 tag and render that to page