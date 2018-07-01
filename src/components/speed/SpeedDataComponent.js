import React from "react";
import {Card} from "@blueprintjs/core";
import "./SpeedDataComponent.css";
import {Icon} from "@blueprintjs/core/lib/esm/components/icon/icon";
import {Line} from "react-chartjs-2";

/**
 * @author Chathura Widanage
 */
export default class SpeedDataComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            x: []
        };

        for (let i = 0; i < 18; i++) {
            this.state.x.push(Math.floor(Math.random() * 250))
        }
    }

    componentDidMount() {
        setInterval(() => {
            let x = [];
            for (let i = 0; i < 18; i++) {
                x.push(Math.floor(Math.random() * 250))
            }
            this.setState({x});
        }, 5000);
    }

    render() {
        return (
            <Card className="speed-data-component">
                <div className="speed-data-rank-wrapper">
                    <div className="speed-data-info-wrapper">
                        <div className="speed-data-car-info">
                            <div className="speed-data-car-info-middle">
                                <div className="speed-data-car-info-number">
                                    34
                                </div>
                                <div className="speed-data-car-info-engine">
                                    HONDA
                                </div>
                            </div>
                        </div>
                        <div className="speed-data-driver-info">
                            <div className="speed-data-driver-info-bio">
                                <div className='speed-data-driver-name'>Scott Dixon</div>
                                <div className='speed-data-driver-hometown'>
                                    <Icon icon="map-marker"/> Auckland New Zealand
                                </div>
                                <div className='speed-data-driver-team'>
                                    <Icon icon="people"/> Chip Ganassi Racing Teams #25
                                </div>
                            </div>
                            <div className="speed-data-driver-info-other">
                                <div className="speed-data-driver-info-other-col">
                                    <div>
                                        <Icon icon="id-number"/>
                                    </div>
                                    <div className="speed-data-driver-info-other-licence">Veteran</div>
                                </div>
                                <div className="speed-data-driver-info-other-col">
                                    <div>
                                        <Icon icon="drive-time"/>
                                    </div>
                                    <div className="speed-data-driver-info-other-competitor-id">370</div>
                                </div>
                                <div className="speed-data-driver-info-other-col">
                                    <div>
                                        <Icon icon="badge"/>
                                    </div>
                                    <div className="speed-data-driver-info-other-rank">#1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="speed-data-lap-sections">
                        <Line data={{
                            labels: this.state.x,
                            datasets: [
                                {
                                    borderColor: "#90A4AE",
                                    backgroundColor: "#263238",
                                    data: this.state.x
                                }
                            ]
                        }}
                              options={{
                                  responsive: true,
                                  maintainAspectRatio: false,
                                  legend: {
                                      display: false
                                  },
                                  scales: {
                                      yAxes: [{
                                          display: false,
                                          ticks: {
                                              display: false,
                                              beginAtZero: true
                                          },
                                          gridLines: {
                                              display: false,
                                          },
                                          scaleLabel: {
                                              display: false
                                          }
                                      }],
                                      xAxes: [{
                                          display: false,
                                          gridLines: {
                                              display: false,
                                          },
                                      }]
                                  },
                              }}/>
                        {/*<div className="speed-data-lap-sections-title">*/}
                        {/*Last Lap Section Speeds*/}
                        {/*</div>*/}
                        {/*<div className="speed-data-lap-sections-info">*/}
                        {/*{this.state.x.map((i, index) => {*/}
                        {/*return (<div className="speed-data-lap-section speed-data-lap-section-1">*/}
                        {/*<div className="speed-data-lap-section-label-wrapper">*/}
                        {/*<span className="speed-data-lap-section-label">{index + 1}</span>*/}
                        {/*</div>*/}
                        {/*<div className="speed-data-lap-section-time">*/}
                        {/*{Math.floor(Math.random() * 500)}*/}
                        {/*</div>*/}
                        {/*</div>)*/}
                        {/*})}*/}

                        {/*</div>*/}
                    </div>
                </div>
            </Card>
        );
    }
}