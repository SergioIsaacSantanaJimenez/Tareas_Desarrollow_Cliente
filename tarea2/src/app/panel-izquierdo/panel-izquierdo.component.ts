import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel-izquierdo',
  templateUrl: './panel-izquierdo.component.html',
  styleUrls: ['./panel-izquierdo.component.css']
})
export class PanelIzquierdoComponent {
  @Input() elementoSeleccionado: string = '';
  @Output() elementoClicado = new EventEmitter<string>();

  peliculas: string[] = [
    'El Padrino',
    'Pulp Fiction',
    'Forrest Gump',
    'El Caballero de la Noche',
    'Inception',
    'Matrix',
    'Titanic',
    'Avatar',
    'Gladiador',
    'Interstellar'
  ];

  seleccionarElemento(pelicula: string): void {
    this.elementoClicado.emit(pelicula);
  }
}