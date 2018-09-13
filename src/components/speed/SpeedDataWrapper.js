import React from "react";
import SpeedDataComponent from "./SpeedDataComponent";
import "./SpeedDataWrapper.css";

/**
 * @author Chathura Widanage
 */
export default class SpeedDataWrapper extends React.Component {

    render() {
        return (
            <div className="speed-data-wrapper">
                <SpeedDataComponent carNumber={1}/>
                <SpeedDataComponent carNumber={2}/>
                <SpeedDataComponent carNumber={3}/>
                <SpeedDataComponent carNumber={4}/>
            </div>
        );
    }
}