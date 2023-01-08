import About from "./components/About";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#162741";
      showAlert("Dark mode has been enabled", "success");
    } else if (mode === "red") {
      setMode("dark");
      document.body.style.backgroundColor = "#162741";
      showAlert("Dark mode has been enabled", "success");
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else if (mode === "grey") {
      setMode("dark");
      document.body.style.backgroundColor = "#162741";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  const redMode = () => {
    if (mode === "light") {
      setMode("red");
      document.body.style.backgroundColor = "#3e070c";
      showAlert("Red mode has been enabled", "success");
    } else if (mode === "grey") {
      setMode("red");
      document.body.style.backgroundColor = "#3e070c";
      showAlert("Red mode has been enabled", "success");
    } else if (mode === "red") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else if (mode === "dark") {
      setMode("red");
      document.body.style.backgroundColor = "#3e070c";
      showAlert("Red mode has been enabled", "success");
    }
  };
  const greyMode = () => {
    if (mode === "light") {
      setMode("grey");
      document.body.style.backgroundColor = "grey";
      showAlert("Grey mode has been enabled", "success");
    } else if (mode === "red") {
      setMode("grey");
      document.body.style.backgroundColor = "grey";
      showAlert("Grey mode has been enabled", "success");
    } else if (mode === "grey") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else if (mode === "dark") {
      setMode("grey");
      document.body.style.backgroundColor = "grey";
      showAlert("Grey mode has been enabled", "success");
    }
  };

  const lightMode = () => {
    setMode("light");
    document.body.style.backgroundColor = "white";
    showAlert("Light mode has been enabled", "success");
  };

  return (
    <div className="App">
      <Navbar
        title="Web"
        mode={mode}
        toggleMode={toggleMode}
        redMode={redMode}
        greyMode={greyMode}
        lightMode={lightMode}
      />
      <Alert alert={alert} />
      <div className="container my-4">
        <TextBox
          heading="Enter your text here"
          mode={mode}
          showAlert={showAlert}
        />
        <About mode={mode} />
      </div>
    </div>
  );
}

export default App;
