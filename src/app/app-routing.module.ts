import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NovpedidoComponent } from './novpedido/novpedido.component';

const routes: Routes = [
  { path: 'home',        component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:'novo-pedido', component:NovpedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
