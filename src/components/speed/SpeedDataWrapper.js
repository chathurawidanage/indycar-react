import React from "react";
import SpeedDataComponent from "./SpeedDataComponent";
import "./SpeedDataWrapper.css";

/**
 * @author Chathura Widanage
 */
export default class SpeedDataWrapper extends React.Component {

    render() {
        return (
            <div className="ic-section speed-data-wrapper">
                <SpeedDataComponent/>
                <SpeedDataComponent/>
                <SpeedDataComponent/>
                <SpeedDataComponent/>
                <SpeedDataComponent/>
            </div>
        );
    }
}