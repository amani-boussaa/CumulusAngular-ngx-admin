import { Component, OnDestroy, OnInit } from '@angular/core';
import { WalletService } from '../../service/wallet.service';
import { ChartDataSets, ChartOptions, ChartType, ChartData } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-payment-statistics',
  templateUrl: './payment-statistics.component.html',
  styleUrls: ['./payment-statistics.component.scss']
})
export class PaymentStatisticsComponent implements OnDestroy {

  data: any;
  options: any;
  themeSubscription: any;

  public orderCount: number;
  public totalAmount: number;
  public AverageAmount: number;



  constructor(private theme: NbThemeService, private http: HttpClient) {
    this.http.get<number>('http://localhost:8081/cumulus/order/count').subscribe(count => {
      this.orderCount = count;
    });
    this.http.get<number>('http://localhost:8081/cumulus/order/totalAmount').subscribe(t_amount => {
      this.totalAmount = t_amount;
    });
    this.http.get<number>('http://localhost:8081/cumulus/order/AverageOrderValue').subscribe(avg_amount => {
      this.AverageAmount = avg_amount;
    });


    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.http.get('http://localhost:8081/cumulus/wallet/subscription/statistics').subscribe((statistics: any) => {
        this.data = {
          labels: ['Gold', 'Platinum', 'Silver', 'Yearly'],
          datasets: [
            {
              data: Object.values(statistics),
              backgroundColor: [colors.warningLight, colors.infoLight, colors.successLight, colors.dangerLight],
            },
          ],
        };
      });

      this.options = {
        maintainAspectRatio: true,
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
