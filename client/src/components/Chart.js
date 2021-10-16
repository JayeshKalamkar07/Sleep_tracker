import React from 'react'
import { Bar } from 'react-chartjs-2';

const Chart = (data) => {


    const Labels=data.data.map(emp=>emp.sub);
    const dataVal=data.data.map((val=>val.sum))

    const ChartData={
        Labels  : Labels,
        datasets :[{
            label:'SLEEP TIME AND DATE RATIO',
            backgroundColor:'rgba(255, 99, 132,  0.3)',
            borderColor:'rgba(0,0,0,1)',
            borderWidth:5,

            data:dataVal,
            
        }]}
    return (
        <div>
            <h1> 1: The Chart Sowing the Time and Date</h1>
            <div  style={{width:'50%', marginLeft:'100px', height:'400px',display:'inline-flex',backgroundColor:'antiquewhite'}}>
                        <Bar 
                       
                        options= { {
                            maintainAspectRatio:false,                       
                            scales:{
                            yAxes:[{
                                ticks:{
                                    beginAtZero:true,
                                    fontSize:15,fontColor:'#000' }}],
                                xAxes:[{
                                    ticks:{
                                        fontSize:16,
                                        fontColor:'#000'
                                    }
                                }]
                                }
                            }}
                            data={ChartData}
 >

</Bar>

            </div>
        </div>
    )
}

export default Chart
