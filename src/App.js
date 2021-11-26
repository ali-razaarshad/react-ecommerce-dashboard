import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Products from "./Components/Products";
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>
                    <Route path="/login" component={Login} exact/>
                    <Route path="/register" component={Register} exact/>
                    <Route path="/products" component={Products} exact/>
                    <Route path="/" component={Products} exact/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
