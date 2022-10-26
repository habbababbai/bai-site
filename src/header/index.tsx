import "./header.scss";

function Header() {
    const handleClickScroll = () => {
        const element = document.getElementById("aboutContainer");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div id="headerBg">
            <div>
                <span id="t1">Hi</span>
                <span id="t2">, i'm </span>
                <span id="t3">bai</span>
                <br></br>
                <span id="t4">And this is my website</span>
            </div>
            <div id="arrow" onClick={handleClickScroll}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}
export default Header;
