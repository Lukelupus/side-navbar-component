import React from "react";
import Navbar from "./components/Navbar";


function App() {
  return (<>
    <div className="App">
      <Navbar />
      <main>
        <h1>This is the Title of the Page!</h1>
        <p>This is the content of the page!</p>
      </main>
    </div>
    </>);
}

export default App;
