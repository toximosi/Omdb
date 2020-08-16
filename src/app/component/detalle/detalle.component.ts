import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//servicios ----------------------
import { PelisService } from 'src/app/service/pelis.service';
//modelos ----------------------
import { ListaImdbModel } from 'src/app/model/listaimdb.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  //inicializacion de variables ----------
  detallePelicula: ListaImdbModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pelisService: PelisService
  ) {
    //Inicializacion variables

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.detallePelicula = await this.pelisService.getByIdOmdbapi(params.id);
    });
  }
}
