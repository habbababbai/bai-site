import "./about.scss";
import jsIcon from "../assets/icon-js.png";
import tsIcon from "../assets/icon-ts.png";
import cssIcon from "../assets/icon-css.png";
import sassIcon from "../assets/icon-sass.png";
import reactIcon from "../assets/icon-react.png";
import reactNativeIcon from "../assets/icon-reactnative.png";
import csharpIcon from "../assets/icon-csharp.png";
import unityIcon from "../assets/icon-unity.png";

function About() {
    return (
        <div id="aboutContainer">
            <div id="about">
                <div id="aboutTitle">About me</div>
                <div id="aboutText">
                    I'm programmer living in Poland interested in front-end web
                    development, design and creating video games. This website
                    was created using React and Sass. Source code for site can
                    be found <a id="yellow">here</a>.
                </div>
            </div>
            <div id="techs">
                <div id="techsTitle">Technologies I know</div>
                <div id="techsGridContainer">
                    <div id="techsGrid">
                        <a href="https://www.javascript.com/">
                            <img src={jsIcon}></img>
                            <span>Javascript</span>
                        </a>
                        <a href="https://www.typescriptlang.org/">
                            <img src={tsIcon}></img>
                            <span>Typescript</span>
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                            <img src={cssIcon}></img>
                            <span>CSS</span>
                        </a>
                        <a href="https://sass-lang.com/">
                            <img src={sassIcon}></img>
                            <span>Sass</span>
                        </a>
                        <a href="https://reactjs.org/">
                            <img src={reactIcon}></img>
                            <span>React</span>
                        </a>
                        <a href="https://reactnative.dev/">
                            <img src={reactNativeIcon}></img>
                            <span>React Native</span>
                        </a>
                        <a href="https://learn.microsoft.com/en-US/dotnet/csharp/">
                            <img src={csharpIcon}></img>
                            <span>C#</span>
                        </a>
                        <a href="https://unity.com/">
                            <img src={unityIcon}></img>
                            <span>Unity Engine</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
