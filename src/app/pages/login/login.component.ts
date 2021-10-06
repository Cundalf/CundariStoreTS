import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	isLogin: boolean = false;
	
	constructor(
		private fb: FormBuilder,
		private _usuarios: UsersService,
		private _snackbar: MatSnackBar
	) {
		this._usuarios.isAuthenticate().subscribe(login => {
			this.isLogin = login;
		});
		
		this.loginForm = this.fb.group({
			email: ["", [Validators.required, Validators.email]],
			password: ["", [Validators.required, Validators.minLength(6)]],
		});
	}
	
	login() {
		this._usuarios.authenticate();
		
		this._snackbar.open(
			"¡Bienvenido!",
			"Cerrar",
			{
				duration: 5000
			}
		);
		
		this.isLogin = true;
		this.loginForm.reset();
	}

	ngOnInit(): void { }
}
