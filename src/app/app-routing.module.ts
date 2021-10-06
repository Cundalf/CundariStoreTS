import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "register", component: RegistroComponent },
	{ path: "login", component: LoginComponent },
	{ path: "catalog", component: CatalogoComponent },
	{ path: "product/:id", component: DetalleComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
