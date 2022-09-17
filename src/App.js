import { useState } from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./styles.css";

const emojiDictionary = require("./data.json");

var emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("No emoji selected");

  function changeEventHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    console.log(meaning);

    if (meaning === undefined) {
      meaning = "Sorry, we don't know this emoji";
    }
    if (userInput === "") {
      meaning = "No emoji selected";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter!</h1>
      <div className="answer-div">
        <h2>{meaning}</h2>
      </div>
      <input
        placeholder="Enter any emoji"
        onChange={changeEventHandler}
      ></input>
      <h3>OR select any one from the list below</h3>
      <div className="containerCenter">
        {emojis.map((emoji) => {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <footer>
        <h3>
          Developed with
          <span role="img" aria-label="heart">
            ❤️
          </span>
          by Sunil Ballani
        </h3>
        <li className="list-item-inline">
          <a
            className="link"
            target="_blank"
            href="https://github.com/Sunil2201"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li className="list-item-inline">
          <a
            className="link"
            target="_blank"
            href="https://twitter.com/imsunilballani"
          >
            <FaTwitter size={30} />
          </a>
        </li>
        <li className="list-item-inline">
          <a
            className="link"
            target="_blank"
            href="https://www.linkedin.com/in/sunil-ballani-17b31b200/"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
      </footer>
    </div>
  );
}
