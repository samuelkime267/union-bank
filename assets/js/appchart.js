const ctx = document.getElementById('myChart');
const barChart = document.getElementById('barChart');
const lineChart = document.getElementById('lineChart');

const myChart = new Chart(lineChart, {
  type: 'line',
  data: {
    labels: [
      '2nd july 2022',
      '2nd july 2022',
      '2nd july 2022',
      '2nd july 2022',
      '2nd july 2022',
      '2nd july 2022',
    ],
    datasets: [
      {
        label: 'Debit',
        data: [100, 300, 200, 50, 600, 200, 400],
        backgroundColor: ['rgb(220, 20, 60)'],
        borderColor: ['rgb(220, 20, 60)'],
        borderWidth: 2,
      },
      {
        label: 'Credit',
        data: [300, 400, 100, 200, 500, 700, 250],
        backgroundColor: ['rgb(0, 210, 0)'],
        borderColor: ['rgb(0, 210, 0)'],
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
const myChart2 = new Chart(barChart, {
  type: 'bar',
  data: {
    labels: ['Debit', 'Credit'],
    datasets: [
      {
        label: 'Debit',
        data: [600, 0],
        backgroundColor: ['rgb(220, 20, 60)'],
        borderColor: ['rgb(220, 20, 60)'],
        borderWidth: 0,
      },
      {
        label: 'Credit',
        data: [0, 700],
        backgroundColor: ['rgb(0, 210, 0)'],
        borderColor: ['rgb(0, 210, 0)'],
        borderWidth: 0,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
