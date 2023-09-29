import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow, NavBar } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";
import { useState } from "react";

const StyledApp = styled.div`
  color: black;
  background-image: url("https://media.licdn.com/dms/image/C561BAQFsZfrVqhunZA/company-background_10000/0/1635758201199?e=1696579200&v=beta&t=sJIGE-Nt3Zq9vSkiLlTrWt6DlosK77k0ANKRlS6L-6c");

  background-attachment: fixed;
  background-position: center;
  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
  max-width: 1200px;
  width: 90vw;
  background-color: #89CFF0;
  border-radius: 3px;
`;
const NetWork = styled.div`
display: flex;
align-items: center;
color: white;
`;

const Tab = styled.div`
display: flex;
margin-left: 1px;
align-items: center;
color: white;
`;
const ButtonTabs = styled.button`
 width: 150px;
  background-color: #89CFF0;
  border: 0;
  padding: 10px 20px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "inherit")};
`;
const ButtonNoTabs = styled.button`
 width: 150px;
  background-color: #ffffff;
  border: 0;
  padding: 10px 20px;
  color: black;
  font-weight: 700;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "inherit")};
`;

function App() {
  const { network } = useTonConnect();
  const [seValue, setseValue] = useState("Counter")
  const option = [
    "Counter", "Transfer", "Jetton"
  ]
  function handleSelect(event: any) {

    setseValue(event)
  }
  return (
    <StyledApp>
      <NavBar>
        {/* <TonConnectButton /> */}
        <NetWork>
          <h3>
            Network:
          </h3>
          {network
            ? network === CHAIN.MAINNET
              ? " Mainnet"
              : " Testnet"
            : "N/A"}
        </NetWork>
        <TonConnectButton />
      </NavBar>
      <AppContainer>
        <FlexBoxCol>

          {/* <Selc onChange={handleSelect} >
            {option.map(option => (
              <option value={option}>{option}</option>
            ))

            }
          </Selc> */}
          <Tab>
            {option.map(option => (
              option === seValue ? <ButtonTabs onClick={() => handleSelect(option)} value={option}>{option}</ButtonTabs> :
                <ButtonNoTabs onClick={() => handleSelect(option)} value={option}>{option}</ButtonNoTabs>
            ))

            }
          </Tab>
          {seValue === "Counter" ? <Counter /> : ""}

          {seValue === "Transfer" ? <TransferTon /> : ""}

          {seValue === "Jetton" ? <Jetton /> : ""}

        </FlexBoxCol>
      </AppContainer>
    </StyledApp >
  );
}

export default App;
