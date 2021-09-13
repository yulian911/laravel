import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import General from "./routes/General/General";
import Shop from "./routes/Shop/Shop";
import Courses from "./routes/Courses/Courses";
import News from "./routes/News/News";
import ContextData from "./contex/Data/ContextData";
import { useReducer } from "react";
import ReducerData from "./contex/Data/ReducerData";
import StateData from "./contex/Data/StateData";

function App() {
  const [stateData, dispatchData] = useReducer(ReducerData, StateData);
  return (
    <Switch>
      <ContextData.Provider value={{ stateData, dispatchData }}>
        <Route exact path="/" component={General} />
        <Route path="/shop" component={Shop} />
        <Route path="/courses" component={Courses} />
        <Route path="/news" component={News} />
      </ContextData.Provider>
    </Switch>
  );
}

export default App;
