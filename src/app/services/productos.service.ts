import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ProductosService {

	constructor(private http: HttpClient) { }

	getAll() {
		return this.http.get(environment.endpointApi + "products/").toPromise()
	}
	
	getById(id: string) {
		return this.http.get(environment.endpointApi + "products/" + id).toPromise()
	}
	
	getCategories() {
		return this.http.get(environment.endpointApi + "products/categories/").toPromise()
	}
}
