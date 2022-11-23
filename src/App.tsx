import About from "./about";
import "./App.scss";
import Header from "./header";
import Footer from "./footer";
import Contact from "./contact";
import FetchDemo from "./fetchDemo";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <About></About>
            <FetchDemo></FetchDemo>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default App;
