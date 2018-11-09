import React from 'react'
import { View, Dimensions } from 'react-native'
import { BarChart, XAxis, Grid } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import * as scale from 'd3-scale'


const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;


class ColumnChartComponent extends React.Component {
    render() {

        const data = [ 8, 6, 0, 4, 7 ]

        const CUT_OFF = 8
        const Labels = ({ x, y, bandwidth, data }) => (
            data.map((value, index) => (
                (value>0) && <Text
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
        return (
             <View style={{ flexDirection: 'row', height: 125 }}>
                <BarChart
                    style={{ flex: 1 }}
                    data={data}
                    svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    gridMin={0}
                >
                <Labels/>
                </BarChart>
            </View>
        )
    }
}

export default ColumnChartComponent