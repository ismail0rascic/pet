import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";

import { setCurrentUser } from "./actions/userActions";

import ApplicationBar from "./components/appBar/ApplicationBar";
import MainRouter from "./components/router/MainRouter";
const App = () => {
  if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <ApplicationBar />
          <MainRouter />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
