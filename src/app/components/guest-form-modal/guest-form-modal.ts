import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-guest-form-modal',
  templateUrl: './guest-form-modal.html',
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule]
})
export class GuestFormModalComponent {

  @Output() close = new EventEmitter<void>();

guestForm: FormGroup;

  relaciones = [
    { value: 'amigos', label: 'Amigos' },
    { value: 'familia_novio', label: 'Familia novio' },
    { value: 'familia_novia', label: 'Familia novia' }
  ];
  submitted = false; // Para mostrar mensaje de enviado
  isClosing = false;

  constructor(private fb: FormBuilder) {
    this.guestForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      relacion: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.guestForm.valid) {
      console.log(this.guestForm.value);
      this.submitted = true;
      // Cierra modal después de 2 segundos
      setTimeout(() => this.startClose(), 2000);
    } else {
      this.guestForm.markAllAsTouched();
    }
  }


  startClose() {
    this.isClosing = true;
    // Espera la duración de la animación antes de emitir close
    setTimeout(() => this.close.emit(), 300);
  }
  onClose() {
    this.close.emit();
  }
}
