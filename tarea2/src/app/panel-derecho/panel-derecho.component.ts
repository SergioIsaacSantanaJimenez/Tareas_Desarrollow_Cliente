import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel-derecho',
  templateUrl: './panel-derecho.component.html',
  styleUrls: ['./panel-derecho.component.css']
})
export class PanelDerechoComponent {
  @Input() elementoSeleccionado: string = '';
  @Output() limpiarSeleccion = new EventEmitter<void>();

  limpiar(): void {
    this.limpiarSeleccion.emit();
  }
}