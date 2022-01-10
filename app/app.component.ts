import { Component } from '@angular/core';
import { api } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agularapp2';
  data: Array<any>
  totalRecords: string
  page: number=1

  constructor(private apiService: api) {
    this.data = new Array<any>()
  }

  ngOnInit() {
    
  }

}


