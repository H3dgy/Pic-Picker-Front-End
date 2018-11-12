import React from "react";
import { PieChart } from "react-native-svg-charts";
import { View, Text } from "react-native-svg";
import {AppColors} from "../../ColorScheme";

class PieChartComponent extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {    
    const data = [
      {
        key: 1,
        value: this.props.liked,
        svg: { fill: this.props.highlight ? AppColors.purpleGraph.highlighted: AppColors.greyGraph.highlighted },
        arc: { outerRadius: "130%", cornerRadius: 10 }
      },
      {
        key: 2,
        value: 100 - this.props.liked,
        svg: { fill: this.props.highlight ? AppColors.purpleGraph.other: AppColors.greyGraph.other  }
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
