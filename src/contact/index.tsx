import "./contact.scss";

//TODO Add actual links

function Contact() {
    return (
        <div id="contactContainer">
            <div id="links">
                <div id="linksTitle">My projects and links</div>
                <div id="linksText">
                    <div>
                        PetCards is a simple game, which combines gameplay
                        mechanics of rock paper sciccors and elements of
                        gambling. It is available on itch.io{" "}
                        <a
                            href="https://pusheeneiro.itch.io/petcards"
                            id="yellow"
                        >
                            right here &larr;
                        </a>
                    </div>
                    <div>
                        My Github page can be found{" "}
                        <a href="https://github.com/habbababbai" id="yellow">
                            here &larr;
                        </a>
                    </div>
                    <div>
                        My YouTube channel can be found{" "}
                        <a
                            href="https://www.youtube.com/channel/UCaDUdKEymDZxldkumFAw0Fg"
                            id="yellow"
                        >
                            here &larr;
                        </a>
                    </div>
                    <div>
                        My Linkedin profile can be found{" "}
                        <a
                            href="https://www.linkedin.com/in/jakub-szyma%C5%84ski-7b516a255/"
                            id="yellow"
                        >
                            here &larr;
                        </a>
                    </div>
                    <div>
                        My CodeWars profile can be found{" "}
                        <a
                            href="https://www.codewars.com/users/habbababbai"
                            id="yellow"
                        >
                            here &larr;
                        </a>
                    </div>
                    <div>
                        You can as well contact me using{" "}
                        <span id="yellow">@</span> by reaching me at{" "}
                        <span id="yellow">qba.7145@gmail.com</span>
                    </div>
                </div>
            </div>
            <div id="contact"></div>
        </div>
    );
}

export default Contact;
