import React from 'react'
import { View } from 'react-native'
import { BarChart, XAxis, Grid } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

class ColumnChartComponent extends React.PureComponent {

    render() {

        const data = [ 10, 5, 25, 15, 20 ]

        const CUT_OFF = 20
        const Labels = ({ x, y, bandwidth, data }) => (
            data.map((value, index) => (
                <Text
                    key={ index }
                    x={ x(index) + (bandwidth / 2) }
                    y={ value < CUT_OFF ? y(value) - 10 : y(value) + 15 }
                    fontSize={ 14 }
                    fill={ value >= CUT_OFF ? 'white' : 'black' }
                    alignmentBaseline={ 'middle' }
                    textAnchor={ 'middle' }
                >
                    {value}
                </Text>
            ))
        )

        const AxisLabels = ({ x, y, bandwidth, data }) => (
            data.map((value, index) => (
                <Text
                    key={ index }
                    x={ x(index) + (bandwidth / 2) }
                    y={ 20 }
                    fontSize={ 14 }
                    fill={ value >= CUT_OFF ? 'white' : 'black' }
                    alignmentBaseline={ 'middle' }
                    textAnchor={ 'middle' }
                >
                    {value}
                </Text>
            ))
        )

        return (
            <View style={{ flexDirection: 'row', height: 150, paddingVertical: 16 }}>
                <BarChart
                    style={{ flex: 1 }}
                    data={data}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    gridMin={0}
                >
                <Labels/>
                <XAxis
                    style={{ marginHorizontal: -10 }}
                    data={ data }
                    formatLabel={ (value, index) => index }
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                />
                </BarChart>
            </View>
        )
    }

}

export default ColumnChartComponent