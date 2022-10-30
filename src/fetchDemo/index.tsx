import "./fetchDemo.scss";
import "./loader.scss";
import "../globals.scss";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import randomNumber from "../functions/randomNumber";
import sleep from "../functions/sleep";

const numberOfVillagers = 391;
const apiUrl = "https://acnhapi.com/v1/villagers/";
const timeout = 400;

function FetchDemo() {
    const [url, setUrl] = useState<string>(
        "https://acnhapi.com/v1/villagers/1"
    );

    useEffect(() => {
        refreshUrl();
    }, []);

    const { data, loading, error } = useFetch(url, timeout);

    if (error) console.log(error);

    async function refreshUrl() {
        const fetchButton = document.getElementById(
            "fetchButton"
        ) as HTMLButtonElement;

        const rnd = randomNumber(numberOfVillagers);
        const url: string = apiUrl + rnd.toString();
        setUrl(url);
        fetchButton.disabled = true;
        await sleep(timeout);
        fetchButton.disabled = false;
        console.log(url);
    }

    return (
        <div id="fetchContainer">
            <div id="fetchWindowContainer">
                <h1>Fetch API Demo</h1>
                <div>
                    {loading ? (
                        <div className="emptyImg">
                            <div className="lds-ring">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    ) : (
                        <img
                            src={data?.image_uri}
                            alt="https://acnhapi.com/v1/images/villagers/1"
                        ></img>
                    )}
                </div>
                <h2>
                    {loading
                        ? "Loading"
                        : JSON.stringify(data?.name["name-EUen"])?.replaceAll(
                              '"',
                              ""
                          )}
                </h2>
                <button id="fetchButton" onClick={() => refreshUrl()}>
                    Next Villager
                </button>
                <div id="fetchText">
                    This demo displays random villager from game{" "}
                    <a
                        id="yellow"
                        href="https://www.animal-crossing.com/new-horizons/"
                    >
                        Animal Crossing: New Horizons
                    </a>{" "}
                    using{" "}
                    <a id="yellow" href="https://acnhapi.com/">
                        ACNH API
                    </a>
                    . <br></br>
                    All assets shown in pictures are sole property of{" "}
                    <a id="yellow" href="https://www.nintendo.com/">
                        Nintendo
                    </a>
                    .
                </div>
            </div>
        </div>
    );
}

export default FetchDemo;
