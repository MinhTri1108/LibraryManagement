import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { LibraryManagementService } from 'src/app/services/library-management.service';
import { OrderBookService } from 'src/app/services/order-book.service';

@Component({
  selector: 'app-book-rental-chart',
  templateUrl: './book-rental-chart.component.html',
  styleUrls: ['./book-rental-chart.component.css'],
})
export class BookRentalChartComponent implements OnInit {
  listchart: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private oderbookservice: OrderBookService
  ) {}

  ngOnInit(): void {
    this.getChart();
  }
  getChart(): void {
    this.oderbookservice.countdata().subscribe((data) => {
      data.map((item: any) => {
        this.listchart = this.barChart.dataTable.push([
          item.DateBook,
          item.CountBook,
        ]);
        console.log(this.listchart);
      });
    });
    setInterval(() => {
      this.getChart();
      location.reload();
    }, 10000);
  }

  title = 'demochart';
  barChart: GoogleChartInterface = {
    chartType: GoogleChartType.BarChart,

    dataTable: [
      ['Thời gian ( Ngày)', 'Số lượng người thuê'],
      ['', 0],
    ],
    options: { title: 'Số sách được cho thuê (Trong ngày)' },
  };
}
