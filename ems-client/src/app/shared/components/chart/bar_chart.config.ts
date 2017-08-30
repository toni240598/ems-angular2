import { FieldPipe } from "../../pipes/field.pipe";


export let bar_chart:any =  {
    type : "bar",
    icon : "fa fa-bar-chart",
    option : {
        animation : { duration : 1000 },
        scaleShowVerticalLines: false,
        maintainAspectRatio: false,
        responsive: true,
        legend: {
              onHover: function(e) {
                 e.target.style.cursor = 'pointer';
              }
        },
         tooltips: {
            mode: 'index',
            callbacks: {
                // Use the footer callback to display the sum of the items showing in the tooltip
                footer: function(tooltipItems, data) {
                    var sum = 0;
                    tooltipItems.forEach(function(tooltipItem) {
                        sum += data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    });
                    return 'Total : ' + sum;
                },
            },
            footerFontStyle: 'normal'
        },
        hover: {
            mode: 'index',
            intersect: true
        },
        scales: {
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true,
              userCallback: function(value, index, values) {
                 value = new FieldPipe().transform(value,"watthour");
                 return value; 
              }
            }
          }],
          xAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }]
        }
    },
    label :  [],
    dataset : []
}
  
  /*
      dataset = [  
      {   label: 'AC',
         data: [23,34],
         borderWidth: 2
       }] 
  */