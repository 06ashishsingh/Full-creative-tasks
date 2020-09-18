const usageChart = document.getElementById('TimeChart').getContext('2d');

let barChart = new Chart(usageChart,{
    type: 'bar',
    data: {
      labels: ["Sat", "Sun", "Mon", "Tue", "Wed","Thu",'Fri'],
      datasets: [
        {
          label: "Time (Hours)",
          data: [4,1.2,1.5,2,4,3,2.5,0,8],
          backgroundColor:'#007aff',        
        }
      ]
    },
    options: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Usage Time'
      }
    }
});