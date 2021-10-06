import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	@Input()
	data: Product;
	@Input()
	verDetalle: boolean = true

	constructor() {
	}

	ngOnInit(): void { }
}