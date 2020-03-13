import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import styled from "styled-components";
import { BestButton } from "best-button";
import { BestCheckbox } from "best-checkbox";
import { StrongerForm } from "./StrongerForm";
import { DenseTable } from "./DenseTable";

const MainContainer = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  /* width: 400px; */
  padding: 10px 20px;

  button {
    background-color: ${props => (props.color ? props.color : undefined)};
    width: 100%;
    padding: 3px;
    border-radius: 10px;

    /* color: red; */

    opacity: 33%;
    font-weight: bold;
  }
`;

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer className="App">
        <h1>STRONGER</h1>
        {/* LAV ET TABLE MED EN FORM I... */}

        <DenseTable />

        {/* <StrongerForm /> */}
      </MainContainer>
      <ButtonWrapper onClick={() => console.log("clicked")} color="#3d3d3d;">
        <BestButton>+ Add Set</BestButton>
      </ButtonWrapper>

      <ButtomButtons />
    </>
  );
};

export default App;

const ButtomButtons = () => (
  <>
    <ButtonWrapper>
      <BestButton color="DodgerBlue">Add Excercises</BestButton>
    </ButtonWrapper>
    <ButtonWrapper color="red">
      <BestButton>Cancel Workout</BestButton>
    </ButtonWrapper>
  </>
);
