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
import { fa, faker } from "@faker-js/faker";
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
    scales: {
        x: {
            grid: {
                display: false,
                color: "#979797"
            },
            title: {
                display: true,
                text: "Hours"
            }
        },
        y: {
            grid: {
                display: true,
                color: "#292929" // To display horizontal grid lines
            },
            title: {
                display: true,
                text: "Numbers of Viewer"

            }
        }
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: false // <-- this option disables tooltips
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem: any) {
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
const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
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
const datas = ['50', '49', '48', '47', '41', '39', '40', '41', '42', '43', '44', '45', '41', '55', '56', '58', '60', '63', '60', '59', '58', '57', '51', '49', '40', '41', '42', '43', '44', '45', '41', '55', '70', '71', '71', '78', '30', '29', '28', '27', '31', '39', '40', '41', '42', '43', '44', '45']
export default function Chart({ }: ChartProps) {
    const [data, setData] = useState({
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: datas.slice(0,datas.length - 9),
                fill: false,
                borderColor: ['#2be6c4'],
                // backgroundColor: '#2be6c4',
                tension: 0.5,

            },
            {
                label: 'Dataset 2',
                data: datas,
                fill: false,
                borderColor: ['#264c4a'],
                // backgroundColor: '#264c4a',
                tension: 0.5,
            },

        ],
    });
    const ref = useRef();
    const aIndexRef = useRef(datas.length - 10);
    const arbitaryLine = {
        id: "arbitaryLine",
        afterDatasetsDraw(chart: any, args: any, pluginOptions: any) {
            const { ctx, chartArea: { top, bottom, left, right, width, height }, scales: { x, y } } = chart;
            ctx.save();
            // ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#2a4a45';
            console.log(ctx);
            ctx.moveTo(x.getPixelForValue(aIndexRef.current), top);
            ctx.lineTo(x.getPixelForValue(aIndexRef.current), bottom);
            ctx.stroke();
            ctx.restore();
            // ctx.
            // if (ctx && typeof ctx.move === 'function') {
            //     ctx?.move(x.getPixelForValue(1), top);
            //     ctx?.move(x.getPixelForValue(1), bottom);
            // }
            // ctx.stroke();
            // ctx.restore();
        }
    }
    return (
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ height: "50%", width: "50%" }}>
                <Line plugins={[arbitaryLine]} ref={ref} onClick={(e) => {
                    let temp = JSON.parse(JSON.stringify(data));
                    if (getElementAtEvent(ref.current as any, e).length > 0) {
                        temp.datasets[0].data = datas.slice(0, getElementAtEvent(ref.current as any, e)[0]?.index + 1);
                        aIndexRef.current = getElementAtEvent(ref.current as any, e)[0]?.index;
                    }
                    setData(temp);
                }} options={options as any} data={data} />
            </div>
        </div>
    )
}
