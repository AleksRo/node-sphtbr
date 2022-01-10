import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { api } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ls } from "../ls.service"
@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.scss']
})
export class TopratedComponent implements OnInit {
  term: any;
  data: Array<any>
  totalRecords: string
  page: number = 1
  genres: object
  constructor(private apiService: api, private router:Router, private route:ActivatedRoute, private localStorage: ls) { }

  ngOnInit() {
   this.getTopRated(1)
   this.genres = this.localStorage.getListGenre()
  }

  getTopRated (page) {
    this.apiService.getTopRated(page).subscribe((data) => {
      console.log(page, data);
      this.data = data.results
      this.totalRecords = data.total_results
    });
  }

  onPageChange(query, page) {
    this.page=page
    this.router.navigate(["/toprated"], {
      relativeTo: this.route,
      queryParams: {
        page: this.page
      }
    });
      this.getTopRated(page)
  }
}
