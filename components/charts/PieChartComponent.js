import React from "react";
import { PieChart } from "react-native-svg-charts";
import { View, Text } from "react-native-svg";

class PieChartComponent extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const data = [
      {
        key: 1,
        value: this.props.liked,
        svg: { fill: "#600080" },
        arc: { outerRadius: "130%", cornerRadius: 10 }
      },
      {
        key: 2,
        value: 100 - this.props.liked,
        svg: { fill: "#ecb3ff" }
      }
    ];

    return (
            <PieChart
              style={{ height: 125, width: 125 }}
              outerRadius={"70%"}
              innerRadius={10}
              data={data}
            />
    );
  }
}

export default PieChartComponent;
