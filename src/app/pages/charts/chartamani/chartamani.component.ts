import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
@Component({
  selector: 'ngx-chartamani',
  templateUrl: './chartamani.component.html',
  styleUrls: ['./chartamani.component.scss']
})
export class ChartamaniComponent {

  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
        datasets: [{
          data: [300, 500, 100],
          backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
        }],
      };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

}
