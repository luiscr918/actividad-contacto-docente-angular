import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Usuario } from '../../services/usuario';
@Component({
  selector: 'app-registro-usuario',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registro-usuario.html',
  styleUrl: './registro-usuario.css',
})
export class RegistroUsuario {
  enviado: boolean = false;
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private servicioUsuario: Usuario
  ) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      direccion: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  registrar = () => {
    if (this.registroForm.valid) {
      this.enviado = true;
      this.servicioUsuario
        .agregarUsuario(this.registroForm.value)
        .subscribe(() => {
          alert('Registro Exitoso');
          this.router.navigate(['/']);
        });
    } else {
      this.registroForm.markAllAsTouched();
    }
  };
  campoSinllenar = () => {
    return (
      !this.enviado &&
      Object.values(this.registroForm).some((valor) => valor ?? '')
    );
  };
}
