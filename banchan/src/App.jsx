import "./App.css";
import StateProvider from "./components/StateProvider";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "./components/componentUtils/styles/theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Callback from "./components/Callback";
import ErrorPage from "./components/ErrorPage";

export const GlobalStyle = createGlobalStyle`
  *{
    padding:0; 
    margin:0;
  }

  body{
    font-family: 'Noto Sans KR';
    box-sizing:border-box;
    
  }
  
  ol, ul {
    list-style: none;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={StateProvider} />
          <Route path="/callback" component={Callback} />
          <Route path="/error" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
