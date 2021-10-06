import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	isLogin: boolean = false;

	constructor(
		private _usuarios: UsersService
	) {
		this._usuarios.isAuthenticate().subscribe(login => {
			this.isLogin = login;
		});
	}

	logout() {
		this._usuarios.logout();
	}

	ngOnInit(): void {
	}

}
