import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Import extras ---------------------------------------------------------------------------
import { HttpClientModule } from '@angular/common/http';/*para recoger los datos de OMDPb API*/
import { ReactiveFormsModule } from '@angular/forms';
//Routing ---------------------------------------------------------------------------
//menus
import { MenuPrincipalComponent } from './component/menu/menu-principal/menu-principal.component';
import { MenuFooterComponent } from './component/menu/menu-footer/menu-footer.component';
//secciones
import { CandidatoComponent } from './component/candidato/candidato.component';
import { ListadoComponent } from './component/listado/listado.component';
import { DetalleComponent } from './component/detalle/detalle.component';
import { Error404Component } from './component/error404/error404.component';
//pipe  ---------------------------------------------------------------------------
import { UrlImgPipe } from './pipe/url-img.pipe';
//import external ---------------------------------------------------------------------------
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//angular material

@NgModule({
  declarations: [
    AppComponent,
    //menus
    MenuPrincipalComponent,
    MenuFooterComponent,
    //secciones
    CandidatoComponent,
    ListadoComponent,
    DetalleComponent,
    Error404Component,
    //pipe
    UrlImgPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //formulario,
    ReactiveFormsModule,
    //acceder api externa
    HttpClientModule,
    //externo
    BrowserAnimationsModule //angular material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
