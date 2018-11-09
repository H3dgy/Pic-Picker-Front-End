import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { View, Text } from 'react-native-svg'

class PieChartComponent extends React.PureComponent {

    render() {

        const data = [
            {
                key: 1,
                value: 65,
                svg: { fill: '#600080' },
                arc: { outerRadius: '130%', cornerRadius: 10,  }
            },
            {
                key: 2,
                value: 35,
                svg: { fill: '#ecb3ff' }
            }
        ]

        return (
            <PieChart
                style={{ height: 150, width: 150 }}
                outerRadius={'70%'}
                innerRadius={10}
                data={data}
            >
            </PieChart>
        )
    }

}

export default PieChartComponent