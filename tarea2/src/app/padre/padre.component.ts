import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  elementoSeleccionado: string = '';

  onElementoSeleccionado(elemento: string): void {
    this.elementoSeleccionado = elemento;
  }

  onLimpiarSeleccion(): void {
    this.elementoSeleccionado = '';
  }
}