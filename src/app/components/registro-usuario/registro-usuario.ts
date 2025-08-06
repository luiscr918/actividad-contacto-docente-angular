import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-registro-usuario',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './registro-usuario.html',
  styleUrl: './registro-usuario.css'
})
export class RegistroUsuario {
  enviado: boolean = false;
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      
    });
  }
}
