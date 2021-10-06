import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
	registerForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private _snackbar: MatSnackBar
	) {
		this.registerForm = this.fb.group({
			nombre: ["", [Validators.required]],
			email: ["", [Validators.required, Validators.email]],
			pass: ["", [Validators.required, Validators.minLength(8)]],
		})
	}
	registrarse() {
		console.log(this.registerForm.value);
		this._snackbar.open(
			"Gracias por registrarse",
			"Cerrar",
			{
				duration: 5000
			}
		);
		
		this.registerForm.reset();
	}
	
	ngOnInit(): void {
	}
}
