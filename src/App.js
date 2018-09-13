import React, {Component} from 'react';
import HeaderComponent from "./components/header/HeaderComponent";
import "./App.css";
import SpeedDataWrapper from "./components/speed/SpeedDataWrapper";
import TrackComponent from "./components/track/TrackComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <HeaderComponent/>
                <TrackComponent/>
                <SpeedDataWrapper/>
            </div>
        );
    }
}

export default App;
