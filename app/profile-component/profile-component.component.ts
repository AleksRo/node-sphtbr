import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { api } from '../api.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.scss']
})
export class ProfileComponentComponent{
  public id: any
  term: any;
  data: Array<any>
  totalRecords: string
  film:any
  constructor(private apiService: api, private route: ActivatedRoute) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.find(this.id);
  }
  
  find(id) {
    this.apiService.find(id).subscribe((data) => {
      this.film = data;
      console.log(this.film);
      let imdbID = this.film.imdb_id;
      console.log(imdbID);
      
    });
  }
}
