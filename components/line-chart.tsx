'use client'
import { Line } from 'react-chartjs-2'

import {
  Filler,
  Legend,
  Tooltip,
  LinearScale, // y axis
  LineElement,
  PointElement,
  CategoryScale, // x axis
  Chart as ChartJS
} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler)

const salesData = [
  { month: 'January', sales: 743 },
  { month: 'February', sales: 332 },
  { month: 'March', sales: 331 },
  { month: 'April', sales: 120 },
  { month: 'May', sales: 180 },
  { month: 'June', sales: 250 },
  { month: 'July', sales: 532 },
  { month: 'August', sales: 632 },
  { month: 'September', sales: 442 },
  { month: 'October', sales: 231 },
  { month: 'November', sales: 412 },
  { month: 'December', sales: 311 }
]

export const LineChart = (): JSX.Element => {
  const data = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: 'Revenue',
        data: salesData.map((data) => data.sales),
        borderColor: '#377ffd',
        borderWidth: 3,
        pointBorderColor: '#f7f7f8',
        pointBorderWidth: 3,
        tension: 0.5,
        fill: true,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(0, 0, 0, 300)
          gradient.addColorStop(0, '#121732')
          gradient.addColorStop(1, '#121732')
          return gradient
        }
      }
    ]
  }

  const options = {
    plugins: {
      legend: true
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 12,
            weight: 'normal'
          }
        },
        title: {
          display: true,
          font: {
            size: 12,
            style: 'italic',
            family: 'Arial'
          }
        },
        min: 50
      },
      x: {
        ticks: {
          font: {
            size: 12,
            weight: 'normal'
          }
        },
        title: {
          display: true,
          font: {
            size: 12,
            style: 'italic',
            family: 'Arial'
          }
        }
      }
    }
  }

  return <Line data={data} options={options as any}></Line>
}
