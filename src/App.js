import React, {Component} from 'react';
import HeaderComponent from "./components/header/HeaderComponent";
import "./App.css";
import SpeedDataWrapper from "./components/speed/SpeedDataWrapper";

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderComponent/>
                <SpeedDataWrapper/>
            </div>
        );
    }
}

export default App;
