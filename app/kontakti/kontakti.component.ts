import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ls } from "../ls.service"
@Component({
  selector: 'app-kontakti',
  templateUrl: './kontakti.component.html',
  styleUrls: ['./kontakti.component.scss']
})
export class KontaktiComponent implements OnInit {
  term: any;
  data: Array<any>
  totalRecords: string
  page: number = 1
  genres: object
  name: any
  log:any
  public id: any
  constructor(private apiService: api,private localStorage: ls, private router:Router, private route:ActivatedRoute) {
  this.data = new Array<any>()
  
  }
  ngOnInit() {
    this.getData(1);
    this.id = this.route.snapshot.paramMap.get('id');
    this.genres = this.localStorage.getListGenre()
  }
 
  getData(page) {
    this.apiService.getData(page).subscribe((data) => {
      console.log(data);
      this.data = data.results
      this.totalRecords = data.total_results
    });
  }

  search(query, page) {
    console.log(query, page);
    this.apiService.search(query, page).subscribe((data) => {
      this.data = data.results
      this.totalRecords = data.total_results
    })
  }

  onPageChange(query, page) {
    this.page=page
    this.router.navigate(["/about"], {
      relativeTo: this.route,
      queryParams: {
        page: this.page
      }
    });
    if (query) {
      this.search(query, page);
    } else {
      this.getData(page)
    }
  }
}