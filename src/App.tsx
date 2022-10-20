import React from "react";
import About from "./about";
import "./App.scss";
import Header from "./header";
import Footer from "./footer";
import Contact from "./contact";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default App;
