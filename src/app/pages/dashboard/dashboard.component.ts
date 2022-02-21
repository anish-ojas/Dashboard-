import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig, LazyLoadEvent, SortEvent } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: any;
  contacts: any;
  data: any;
  basicData: any;
  basicOptions: any;
  chartOptions: any;
  first = 0;
  rows = 10;
  clear: any;
  value: any;
  private items!: MenuItem[];
  loading: boolean | undefined;

  constructor(private primengConfig: PrimeNGConfig) {
    this.contacts = [
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 2, name: 'Mangesh Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 3, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 4, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 5, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Amol Impal', email: 'impalamol@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Anket Nemlekar', email: 'anketnemlekar@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },
      { code: 1, name: 'Sandeep Bhoir ', email: 'sandeepbhoir@gmail.com', contact: 9527306657, city: 'Nashik', message: 'Just want to say hello :D', a: 'Just want to say hello :D', b: 'Just want to say hello :D', c: 'Just want to say hello :D', d: 'Just want to say hello :D', e: 'Just want to say hello :D', },

    ]

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          tension: .4,
          borderColor: '#42A5F5'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderDash: [5, 5],
          tension: .4,
          borderColor: '#66BB6A'
        },
        {
          label: 'Third Dataset',
          data: [12, 51, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: '#FFA726',
          tension: .4,
          backgroundColor: 'rgba(255,167,38,0.2)'
        }
      ]
    };
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        type: 'line',
        label: 'Dataset 1',
        borderColor: '#42A5F5',
        borderWidth: 2,
        fill: false,
        data: [
          50,
          25,
          12,
          48,
          56,
          76,
          42
        ]
      }, {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: '#66BB6A',
        data: [
          21,
          84,
          24,
          75,
          37,
          65,
          34
        ],
        borderColor: 'white',
        borderWidth: 2
      }, {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: '#FFA726',
        data: [
          41,
          52,
          24,
          74,
          23,
          21,
          32
        ]
      }]
    };

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };

  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }
  loadContacts(event: LazyLoadEvent) {
    this.loading = true;
    setTimeout(() => {
      if (this.contacts) {
        this.contacts = this.contacts.slice(event.first, (event.first! + event.rows!));
        this.loading = false;
      }
    }, 1000);
  }
}
