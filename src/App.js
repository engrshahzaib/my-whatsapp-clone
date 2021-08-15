import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import { useState } from "react";

function App() {
   const [signUp, setSignUp] = useState(false);

   return (
      <Container>
         <Router>
            <SignUp setSignUp={setSignUp} />
            <Switch>
               <Route path='/'>{/* <Home /> */}</Route>
            </Switch>
         </Router>
      </Container>
   );
}

export default App;

const Container = styled.div`
   display: flex;
   width: 100vw;
   height: 100vh;
   min-height: fit-content;
   justify-content: center;

   background-color: #fafafa;
   @media (max-width: 800px) {
      justify-content: flex-start;
   }
`;
