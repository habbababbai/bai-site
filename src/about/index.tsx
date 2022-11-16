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
                    was created using React and Sass. Source code for this site
                    can be found{" "}
                    <a
                        href="https://github.com/habbababbai/bai-site"
                        id="yellow"
                    >
                        here. &larr; <br></br>
                    </a>
                    Most of my projects can be found on my Github page linked
                    down below, as well as other things I've done and contact
                    info.
                </div>
            </div>
            <div id="techs">
                <div id="techsTitle">Technologies I know</div>
                <div id="techsGridContainer">
                    <div id="techsGrid">
                        <a href="https://www.javascript.com/">
                            <img src={jsIcon} alt={""}></img>
                            <span>Javascript</span>
                        </a>
                        <a href="https://www.typescriptlang.org/">
                            <img src={tsIcon} alt={""}></img>
                            <span>Typescript</span>
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                            <img src={cssIcon} alt={""}></img>
                            <span>CSS</span>
                        </a>
                        <a href="https://sass-lang.com/">
                            <img src={sassIcon} alt={""}></img>
                            <span>Sass</span>
                        </a>
                        <a href="https://reactjs.org/">
                            <img src={reactIcon} alt={""}></img>
                            <span>React</span>
                        </a>
                        <a href="https://reactnative.dev/">
                            <img src={reactNativeIcon} alt={""}></img>
                            <span>React Native</span>
                        </a>
                        <a href="https://learn.microsoft.com/en-US/dotnet/csharp/">
                            <img src={csharpIcon} alt={""}></img>
                            <span>C#</span>
                        </a>
                        <a href="https://unity.com/">
                            <img src={unityIcon} alt={""}></img>
                            <span>Unity Engine</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
