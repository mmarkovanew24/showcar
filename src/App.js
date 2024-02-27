import styled from "styled-components";
import { MainForm } from "./components/form";
import { Preview } from "./components/preview";
import { COLORS } from "./asserts/constants/colors";

import "./App.css";

const StyledContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  backgroundImage: `linear-gradient(${COLORS.LIGHT_GREEN}, ${COLORS.LIGHT_RED})`,
  fontFamily: "geneva",
});

const StyledSubContainer = styled.div({
  display: "flex",
  width: "100%",
  maxWidth: "1400px",
  justifyContent: "space-between",
  padding: "36px",
});

function App() {
  return (
    <StyledContainer>
      <StyledSubContainer>
        <MainForm />
        <Preview />
      </StyledSubContainer>
    </StyledContainer>
  );
}

export default App;

// todo:
// 0. generate QR code on page
// 1. on fly update preview page
// 2.
// 1. download json with params (for future use)
// 2. download empty json
// 2. upload all values from file (json object)
// 3.
