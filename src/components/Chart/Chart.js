import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

function Chart (props) {
  const dataPointsValues = props.dataPoints.map(p => p.value)
  const totalMaximum = Math.max(...dataPointsValues)

  return (
    <div className='chart'>
      {props.dataPoints.map(point => {
        return (
          <ChartBar
            value={point.value}
            maxValue={totalMaximum}
            label={point.label}
            key={point.id}
          />
        )
      })}
    </div>
  )
}

export default Chart
