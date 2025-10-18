import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, this.emailValidator]],
      edad: ['', [Validators.required, Validators.min(18)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmarPassword: ['', Validators.required],
      terminos: [false, Validators.requiredTrue]
    }, { validators: this.passwordsCoinciden });
  }

  emailValidator(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    if (!email) {
      return null;
    }
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(email)) {
      return { email: true };
    }
    
    return null;
  }

  passwordsCoinciden(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmarPassword = control.get('confirmarPassword');
    
    if (!password || !confirmarPassword) {
      return null;
    }
    
    return password.value === confirmarPassword.value ? null : { passwordsMismatch: true };
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      console.log('Datos del formulario:', this.registroForm.value);
    }
  }
}