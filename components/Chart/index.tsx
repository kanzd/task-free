import React, { useRef, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Doughnut, Line, getDatasetAtEvent, getElementAtEvent } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    animation: false,
    scales:{
        x:{
            title:{
                display:true,
                text:"Hours"
            }
        },
        y:{
            title:{
                display:true,
                text:"Numbers of Viewer"
            }
        }
    },
    plugins: {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        },
        title: {
            // display: true,
            text: 'Chart.js Line Chart',
        },
    },
};
const labels1 = ['January', 'February', 'March', 'April', 'May', 'June',];
const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];
// export const data = {
//     labels,
//     datasets: [
//         {
//             label: 'Dataset 1',
//             data: ['5', '10', '15'],
//             fill: false,
//             borderColor: ['rgb(14, 207, 233)'],
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',

//         },
//         {
//             label: 'Dataset 2',
//             data: ['5', '10', '15', '20', '25'],
//             fill: false,
//             borderColor: ['rgba(14, 208, 233, 0.529)'],
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',

//         },

//     ],
// };

interface ChartProps {

}
const datas = ['30', '29', '28', '27', '31', '39', '40', '41', '42', '43', '44', '45', '41', '55', '70', '71', '71', '78']
export default function Chart({ }: ChartProps) {
    const [data, setData] = useState({
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: datas,
                fill: false,
                borderColor: ['rgb(14, 207, 233)'],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',

            },
            {
                label: 'Dataset 2',
                data: datas,
                fill: false,
                borderColor: ['rgba(14, 208, 233, 0.529)'],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',

            },

        ],
    });
    const ref = useRef();
    const arbitaryLine = {
        id: "arbitaryLine",
        afterDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, chartArea: { top, bottom, left, right, width, height }, scales: { x, y } } = chart;
            ctx.save();
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.strokeStyle = "gray";
            ctx?.move(x.getPixelForValue(1), top);
            ctx?.move(x.getPixelForValue(1), bottom);
            ctx.stroke();
            ctx.restore();
        }
    }
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",height:"100vh" }}>
            <div style={{ height: "50%", width: "50%" }}>
                <Line ref={ref} onClick={(e) => {
                    let temp = JSON.parse(JSON.stringify(data));
                    console.log(getElementAtEvent(ref.current, e));
                    if (getElementAtEvent(ref.current, e).length > 0) {
                        temp.datasets[0].data = datas.slice(0, getElementAtEvent(ref.current, e)[0]?.index + 1);
                    }
                    setData(temp);
                }} options={options} data={data} />
            </div>
        </div>
    )
}
