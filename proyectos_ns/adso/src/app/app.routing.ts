import { LoginComponent } from "./components/login/login";
import { RegistroComponent } from "./components/registro/registro";
import { HomeComponent } from "./components/home/home";
import { TiendaComponent } from "./components/tienda/tienda";
import { PerfilComponent } from "./components/perfil/perfil";
import { CarritoComponent } from "./components/carrito/carrito";
import { CatalogoComponent } from "./components/catalogo/catalogo";
import { ProductosComponent } from "./components/productos/productos";



export const appRoutes: any = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "home", component: HomeComponent },
  { path: "tienda", component: TiendaComponent },
  { path: "catalogo", component: CatalogoComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "carrito", component: CarritoComponent },
  { path: "productos", component: ProductosComponent },


];

export const appComponents: any = [
  LoginComponent,
  RegistroComponent,
  HomeComponent,
  TiendaComponent,
  PerfilComponent,
  CarritoComponent,
  CatalogoComponent,
  ProductosComponent, 
];
