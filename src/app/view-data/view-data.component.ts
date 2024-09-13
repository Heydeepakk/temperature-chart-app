import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent implements OnChanges {

  @Input() dataList: { datetime: string; temperature: number }[] = [];

  chartData: any[] = [];
  chartLabels: any[] = [];
  chartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'DateTime'
        }
      },
      y: {
        min: -50,
        max: 50,
        title: {
          display: true,
          text: 'Temperature (°C)'
        }
      }
    }
  };

  // Update the chart data whenever the dataList changes
  ngOnChanges(): void {
    this.updateChartData();
    console.log(this.dataList)
  }

  // Function to update chart data dynamically
  updateChartData(): void {
    this.chartLabels = this.dataList.map(data => data.datetime);
    this.chartData = [
      {
        label: 'Temperature',
        data: this.dataList.map(data => data.temperature),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.1,
      }
    ];
  }
}
