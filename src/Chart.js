import {useState, useEffect} from "react"
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = ({data, userConfig}) => {
    const [state, setState] = useState({})
    state = {
        chartData : {
            type: "pie",
            marginBottom: 100
        },
        series: [
            {
                data: data
            }
        ],
        ...userConfig
    }
    useEffect((prevProps) => {
        if(data !== prevProps.data){
            setState({
                chartData : {
                    ...state.chartData,
                    series : [{
                        data: data
                    }]
                }
            })
        }
    }, [])

    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}        
                options={chartData}    
            />
        </>
    )
}