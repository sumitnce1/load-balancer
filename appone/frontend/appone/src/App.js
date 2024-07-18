import React, { useEffect, useState } from "react";
import "./App.css";

const dataurl = process.env.REACT_APP_API_HOST;

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // Fetch data from the API
    fetch(`${dataurl}/api/data`)
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching data in App one:", error);
        setMessage("Error fetching data in App one");
      });
  }, []);

  return (
    <div className="App">
      <div id="scroll-container" style={{ marginTop: "15vh", color: "green" }}>
        <h1 id="scroll-text">{message}</h1>
      </div>
    </div>
  );
}

export default App;
