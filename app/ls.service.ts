import { Injectable } from "@angular/core";
import { api } from './api.service';
@Injectable({
    providedIn: 'root'
})

export class ls {

    constructor(private apiService: api) {

    }
    getListGenre() {
        let genres = {}
        let log = localStorage.getItem("genres")
        if (log) {
            log = JSON.parse(log)
            if (Array.isArray(log)) {
                log.forEach(obj => {
                    genres[obj.id] = obj.name
                });
            }
            console.log("lox");
        }
        else {
            this.apiService.getListGenre().subscribe((data) => {
                data.genres.forEach(obj => {
                    genres[obj.id] = obj.name
                });
                localStorage.setItem("genres", JSON.stringify(data.genres))
            });
            console.log("apia");
        }
        return genres
    }
}
