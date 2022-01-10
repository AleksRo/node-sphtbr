import { Component, OnInit } from '@angular/core';
import { api } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NumberSymbol } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ls } from "../ls.service"
@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {
  public id: any
  term: any;
  data: Array<any>
  totalRecords: string
  film:any
  page: number = 1
  genres: object
  name: any
  constructor(private apiService: api, private localStorage: ls, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getGenreFilms(this.id, 1);
    this.genres = this.localStorage.getListGenre()
    this.name=this.getGenreName(this.id)
  }
  
  getGenreName(id) {
      return this.genres[this.id]
    }

  getGenreFilms(id, page) {
    this.apiService.getGenreFilms(id, page).subscribe((data) => {
      console.log(data);
      this.data = data.results
      this.totalRecords = data.total_results
    });
  }
  onPageChange(query, page) {
    this.page=page
    this.router.navigate(["/genre/"+this.id], {
      relativeTo: this.route,
      queryParams: {
        page: this.page
      }
    });
      this.getGenreFilms(this.id, page);
  }
}
