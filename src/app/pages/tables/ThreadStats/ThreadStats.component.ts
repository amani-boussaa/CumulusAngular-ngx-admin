import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { ThreadService } from '../../../Service/Thread.Service';
import { NbTagComponent, NbThemeService } from '@nebular/theme';
import { Thread } from '../../../Entity/Thread';
import { ThreadTagEntity } from '../../../Entity/ThreadTag';
import { NavigationExtras, Router } from '@angular/router';
import { SharedDataService } from '../../../Service/SharedDataService ';


@Component({
  selector: 'ngx-threadstats',
  templateUrl: './ThreadStats.component.html',
  styleUrls: ['./ThreadStats.component.scss'],
})
export class ThreadStatsComponent {
  public userID:any;
data :any ;


  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData,private th:ThreadService ,private router:Router,private sharedDataService: SharedDataService,private theme: NbThemeService) {

//userID

    this.th.getStats().subscribe((data) => {
      console.log(data);

      this.data = data;


    });


  }


  options: any = {};
  themeSubscription: any;



  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'Score',
            type: 'bar',
            barWidth: '60%',
            data: [1, 52, 200, 334, 390, 330, 220],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }



}
