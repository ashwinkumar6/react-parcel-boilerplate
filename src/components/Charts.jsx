import React, { Component } from "react";
import { Chart, Axis, Geom, Tooltip } from "bizcharts";

const globalNetworkActivity = [
  {
    x: "Australia",
    y: 1901
  },
  {
    x: "China",
    y: 1809
  },
  {
    x: "UK",
    y: 1669
  },
  {
    x: "Spain",
    y: 965
  },
  {
    x: "Chad",
    y: 750
  },
  {
    x: "USA",
    y: 200
  },
  {
    x: "Portugal",
    y: 100
  },
  {
    x: "Ireland",
    y: 10
  },
  {
    x: "Russia",
    y: 10
  },
  {
    x: "Italy",
    y: 10
  },
  {
    x: "Norway",
    y: 10
  },
  {
    x: "France",
    y: 10
  }
];

const cols = {
    "y": { tickInterval : 1000 }
}
class Charts extends Component {
  render() {
    return (
      <Chart height={400} data={globalNetworkActivity} scale={cols} forceFit>
        <Axis name="x" />
        <Axis name="y" />
        <Tooltip crosshairs={{ type: "y" }} />
        <Geom type="interval" position="x*y" />
      </Chart>
    );
  }
}

export default Charts;
