import Game from "./components/Game";
import GlobalStyles from "./components/styled/Global.styled";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { StyledContent } from "./components/styled/Game.styled";
import { StyledDropdown } from "./components/styled/Dropdown.styled";
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
    <>
      <GlobalStyles />
      <Header />
      <StyledContent>
        <Outlet />
      </StyledContent>
      {/* <Game targetAppearance={targetAppearance}/> */}
      <Footer />
    </>
  );
}

export default App;
