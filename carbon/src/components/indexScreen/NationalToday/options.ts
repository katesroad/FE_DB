export const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
}

export const FORECAST_DATASET = {
  label: '#Forecast',
  fill: false,
  backgroundColor: 'rgb(255, 99, 132)',
  borderColor: 'rgba(255, 99, 132, 0.2)',
}

export const ACTUAL_DATASET = {
  label: '#Actual',
  fill: false,
  backgroundColor: 'rgb(54, 162, 235)',
  borderColor: 'rgba(54, 162, 235, 0.2)',
}

export const LABLES = [
  '00:00',
  '1:00',
  '2:00',
  '3:00',
  '4:00',
  '5:00',
  '6:00',
  '7:00',
  '8:00',
  '9:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
]
