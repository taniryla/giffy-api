import "./styles.css";
import SearchBar from "./SearchBar";
import GifListPage from "./GifListPage";
import { useState } from "react";

export default function App() {
  const apiKey = "d9tJnDnyf5NsMPfFTQ7L3uGyZUCpeNZN";
  const [getGiphy, setGetGiphy] = useState([]);

  async function getAPI(searchWord) {
    const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=<${searchWord}>`;
    const gifObj = await fetch(BASE_URL);
    let giphies = await gifObj.json();
    console.log(giphies.data);
    setGetGiphy(giphies.data);
  }

  return (
    <div className="App">
      <SearchBar getAPI={getAPI} />
      <GifListPage getGiphy={getGiphy} />
    </div>
  );
}
