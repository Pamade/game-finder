import React, { useEffect } from 'react'
import { useState, useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({details}) {

    const [chart, setChart] = useState({labels: [], datasets: []})
    const labels = useMemo(() => details.ratings?.map(item  => item.title) || [], [details])
    const count = useMemo(() => details.ratings?.map(item  => item.count) || [], [details])

    useEffect(() => {
        if (labels && count) {
          setChart({
            labels: labels,
            datasets: [
              {
                label: '# of Votes',
                data: count,
                backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
              },
            ],
        })
    }
    }, [count, labels])

    return (
        <div className="game-details__box-ratings"> {count.length === 0 ? 'no ratings' :<Pie data={chart}/>}</div>
    )
}

export default Chart