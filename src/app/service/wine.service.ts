import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Wine } from '../model/wine'
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class WineService {
wines: Wine[] = [];

	constructor(private http: HttpClient) { }

	getAllWines() {
	return this.http.get<Wine[]>(environment.WINE_URL);
	}

	fromJson(json: any){
		let wine: Wine = new Wine();
		json.filter((el)=>{
			wine.name = el.name;
			wine.image = el.image;
			wine.age = el.age;
			wine.comment = el.comment;
			wine.rating = el.rating;

			this.wines.push(wine);
		});

		return this.wines;
	}

	updateWines(wine: Wine){
		let oldWines = this.wines;
		this.wines = [];
		this.wines.push(wine);

		oldWines.forEach((el)=>{
			this.wines.push(el);
		})
	}

	getWines(){
		return this.wines;
	}
}
