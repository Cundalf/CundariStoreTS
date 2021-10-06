import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
	selector: 'app-menu-mobile',
	templateUrl: './menu-mobile.component.html',
	styleUrls: ['./menu-mobile.component.css']
})
export class MenuMobileComponent implements OnInit {

	isLogin: boolean = false;
	constructor(
		private _usuarios: UsersService
	) {
		this._usuarios.isAuthenticate().subscribe(login => {
			this.isLogin = login
		});
	}

	logout() {
		this._usuarios.logout();
	}

	ngOnInit(): void {
	}

}
