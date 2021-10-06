import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Product } from "src/app/interfaces/Product";

@Component({
	selector: 'app-catalogo',
	templateUrl: './catalogo.component.html',
	styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

	allProducts: Product[];
	products: Product[];
	categories: string[];
	loading: boolean = true;
	selectedFilter: any;

	constructor(private productosService: ProductosService) {
		this.getCategories();
		this.getProductos();
	}

	async getCategories() {
		const response: any = await this.productosService.getCategories();

		this.categories = response;
	}

	async getProductos() {
		const response: any = await this.productosService.getAll();

		console.log(response);
		
		this.allProducts = response;
		this.products = this.allProducts;
		this.loading = false;
	}

	filter(val) {
		if (val === "") {
			this.products = this.allProducts;
		}
		else {
			this.products = this.allProducts.filter(pro => pro.category === val);
		}
	}

	ngOnInit(): void { }

}
