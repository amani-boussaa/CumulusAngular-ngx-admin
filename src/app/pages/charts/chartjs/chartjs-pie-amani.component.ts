import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { CategoryComplaint } from '../../../models/categorycomplaint';
import { ComplaintService } from '../../../services/amani/complaint.service';
import { Complaint } from '../../../models/complaint';

@Component({
  selector: 'ngx-chartjs-pie-amani',
  template: `
    <chart type="pie" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsPieAmaniComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;
  complaints: Complaint[];

  constructor(private theme: NbThemeService,private complaintService: ComplaintService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
        //labels: [CategoryComplaint.Accessibility, CategoryComplaint.Billing, CategoryComplaint.Instructor,CategoryComplaint.Technical],

      // this.data = {

      //   labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
      //   datasets: [{
      //     data: [300, 500, 100],
      //     backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
      //   }],
      // };
//new code

  this.complaintService.getAllComplaints()
    .subscribe(
      (response: Complaint[]) => {
        this.complaints = response;
        const complaintData = {
          [CategoryComplaint.Technical]: this.countTechnicalComplaints(),
          [CategoryComplaint.Billing]: this.countBillingComplaints(),
          [CategoryComplaint.Instructor]: this.countInstructorComplaints(),
          [CategoryComplaint.Accessibility]: this.countAccessibilityComplaints(),
        };
        this.data = {
          labels: Object.keys(complaintData),
          datasets: [{
            data: Object.values(complaintData),
            backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight],
          }],
        };
      },
      error => {
        console.log(error);
      }
    );




//end
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
  countTechnicalComplaints() {
    const technicalComplaints = this.complaints.filter((complaint) => {
      return complaint.categorycomplaint === CategoryComplaint.Technical;
    });
    return technicalComplaints.length;
    }


   countBillingComplaints(): number {
    const billingComplaints = this.complaints.filter((complaint) => {
      return complaint.categorycomplaint === CategoryComplaint.Billing;
    });
    return billingComplaints.length;
  }

   countInstructorComplaints(): number {
    const billingComplaints = this.complaints.filter((complaint) => {
      return complaint.categorycomplaint === CategoryComplaint.Instructor;
    });
    return billingComplaints.length;
  }

   countAccessibilityComplaints(): number {
    const billingComplaints = this.complaints.filter((complaint) => {
      return complaint.categorycomplaint === CategoryComplaint.Accessibility;
    });
    return billingComplaints.length;
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
