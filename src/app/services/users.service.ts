import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	authenticationState = new BehaviorSubject(false);

	constructor() { }

	authenticate() {
		this.authenticationState.next(true);
	}

	isAuthenticate() {
		return this.authenticationState;
	}

	isAuthenticated() {
		return this.authenticationState.value;
	}

	logout() {
		this.authenticationState.next(false);
	}
}
