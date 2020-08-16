import { Component, OnInit } from '@angular/core';
//servicios ----------------------
import { PelisService } from 'src/app/service/pelis.service';
//modelos ----------------------
import { ListaModel } from 'src/app/model/lista.model';
import { PelisModel } from 'src/app/model/pelis.model';
import { ListaImdbModel } from 'src/app/model/listaimdb.model';
import { environment } from 'src/environments/environment';
//formulario --------------------------------
import { FormGroup , FormControl} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  //variables --------------------------------
  busquedaTitulo: string = environment.filtroInicial;
  lista: ListaModel[];
  pelis: PelisModel[];
  listaImdb: ListaImdbModel[];
  listaImdbFecha: any[];
  peliculas: any[];
  filtroYear: any[];
  //formulario --------------------------------
  formulario: FormGroup;
  seleccionado: number;

  constructor(private pelisService: PelisService) {
    //inicializacion de variables ----------
    this.busquedaTitulo = environment.filtroInicial;
    this.lista = [];
    this.pelis = [];
    this.listaImdb = [];
    this.listaImdbFecha = [];
    this.peliculas = [];
    this.filtroYear = [];

  //formulario --------------------------------
    this.formulario = new FormGroup({
      tituloBusqueda:new FormControl(),
    });

  }

  ngOnInit(): void {
    this.CargarData(this.busquedaTitulo);
  }

  //metodo para incluir todos los datos de las peliculas
  CargarData = function (title: string, year: string = '') {
    //Vaciasmo arrays por si acaso estan cargados de anterior sesion
    this.filtroYear = [];//vaciamos
    this.listaImdb = [];//vaciamos
    this.lista = [];//vaciamos
    this.pelis = [];//vaciamos

//Crear la lista de informacion
    this.pelisService.getByYearOmdbapi(title, year)
      .then(res => {
//cargamos la lista de peliculas de Omdb
        const pelisData = res;
        this.lista = pelisData;
        this.pelis = pelisData.Search;
      }).then(res => {
        //con los valores de la lista de peliculas obtenemos los datos de las peliculas de IMDB a traves del id
        for (let i = 0; i < this.pelis.length; i++) {
          let id = this.pelis[i].imdbID;
          this.pelisService.getByIdOmdbapi(id)
            .then(res => {
              this.listaImdb.push(res);
              if (this.filtroYear[i] !== res.Year) {
                //recopilamos los años para el filtro por año SeleccionYear($event)
                this.filtroYear.push(parseInt(res.Year));
                this.filtroYear.sort();
              }
            })
            .catch(err => console.log(err));
        };
      }).catch(err => console.log(err))
  }
//Metodo para Buscar nuevos titulos --------------------
onSubmit(){
  let tituloNew = this.formulario.value.tituloBusqueda;
console.log(this.formulario.value.tituloBusqueda)
  if(tituloNew =='null'){
    alert('Posiblemente no hayas escrito un título, aunque te mostramos películas "vacias" :)')
    }else{
      this.busquedaTitulo=tituloNew;
      this.CargarData(tituloNew);}
      alert('Posiblemente no hayas escrito un título, aunque te mostramos películas "vacias" = null :)')
}

//Metodo para filtrar por año las peliculas/series ya cargadas --------------------
  SeleccionYear($event) {
    let ano = $event.target.value;
    if (ano > 0) {
      this.CargarData(this.busquedaTitulo, ano);
    }
  }

//Reiniciar la muestra de las peliculas/Series al estado inicial--------------------
  Reiniciar() {
    this.CargarData(environment.filtroInicial);
  }
  //FIN export  -------------------------------------------
}

