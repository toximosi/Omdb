import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';/*para recoger los datos de OMDPb API*/
import { environment } from 'src/environments/environment'; /*datos estandar*/

@Injectable({
  providedIn: 'root'
})

export class PelisService {
  // variables ----------------------------------------------------------------------------------------
  url: string;
  apiMoviekey: string;
  nombreInicio: string;//--> ENUNCIADO --> Como el api tiene una limitación de resultados, la carga inicial estará filtrada por título “star”

  // Inicializacion variables -----------------------------------------------------------------------------
  constructor(private httpClient: HttpClient) {
    this.url = environment.urlApi;
    this.apiMoviekey = environment.apiMoviekey;
    this.nombreInicio = environment.filtroInicial;
  }

  // metodos ----------------------------------------------------------------------------------------
  /* GET hacemos busqueda los elementos filtrados name = nombre, type = tipo:pelicula o serie*/
  getByTitleOmdbapi(title: string): Promise<any> {
    return this.httpClient.get(`http://www.omdbapi.com/?apikey=${this.apiMoviekey}&s=${title}&r=json`).toPromise();
  }
  getByYearOmdbapi(title: string, year: number): Promise<any> {
    return this.httpClient.get(`http://www.omdbapi.com/?apikey=${this.apiMoviekey}&s=${title}&y=${year}&r=json`).toPromise();
  }
  /* getStarOmdbapi(name: string = this.nombreInicio): Promise<any> {
    return this.httpClient.get(`http://www.omdbapi.com/?apikey=${this.apiMoviekey}&s=${name}&r=json`).toPromise();
  } */
  getByIdOmdbapi(id: string): Promise<any> {
    return this.httpClient.get(`http://www.omdbapi.com/?apikey=9452e696&i=${id}&r=json`).toPromise();
  }

  //FIN EXPORT -----------------------------------------------------------------------------------------
}

/*DATOS REFERENCIA _____________________________________________________________________________________ */
/*PETICION DE DATOS
-------------------
url: GET
MAIL:---------
Here is your key: 9452e696
OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=9452e696

WEB: http://www.omdbapi.com/--------
Send all data requests to:
http://www.omdbapi.com/?apikey=[yourkey]&
Poster API requests:
http://img.omdbapi.com/?apikey=[yourkey]&
*/
