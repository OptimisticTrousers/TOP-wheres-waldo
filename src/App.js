import Game from "./components/Game";
import GlobalStyles from "./components/styled/Global.styled";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { Outlet } from "react-router-dom";
function App({ children }) {
  const [targetAppearance, setTargetAppearance] = useState(false);

  function handleClick(event) {
    if (event.target.parentNode.nodeName === "MAIN") {
      setTargetAppearance(true);
    } else {
      setTargetAppearance(false);
    }
  }

  return (
    <div>
      <GlobalStyles />
      <Header />
        <Outlet />
      {/* <Game targetAppearance={targetAppearance}/> */}
      <Footer />
    </div>
  );
}

export default App;
