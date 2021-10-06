import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-detalle',
	templateUrl: './detalle.component.html',
	styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
	product: any;
	loading: boolean = true;
	isLogin: boolean = false
	
	constructor(
		private activatedRoute: ActivatedRoute,
		private productosService: ProductosService,
		private _usuarios: UsersService,
		private _snackbar: MatSnackBar
	) {
		this._usuarios.isAuthenticate().subscribe(login => {
			this.isLogin = login
		});
		
		const id = this.activatedRoute.snapshot.paramMap.get("id");

		if (id) {
			this.getProducto(id);
		}

	}

	async getProducto(id: string) {
		this.product = await this.productosService.getById(id);
		this.loading = false;
	}
	
	comprar() {
		this._snackbar.open(
			"Gracias por su compra",
			"Cerrar",
			{
				duration: 5000
			}
		);
	}
	
	ngOnInit(): void {
	}

}
