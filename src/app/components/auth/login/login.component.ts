import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  misDatos = {
    email: 'fabriblanco.03@hotmail.com',
    password: 'fabricio2323'
  }

  constructor(private FormBuilder: FormBuilder, private router: Router){

  }

  loginFormGroup: FormGroup = this.FormBuilder.group({

    email: ['', [Validators.email, Validators.required]],
    password: ['']
  })

  leerDatos() {
    console.log(this.loginFormGroup);
    if (
      this.loginFormGroup.value.email === this.misDatos.email &&
      this.loginFormGroup.value.password === this.misDatos.password
    ) {
      alert('coincide');

      // Guarda los datos del usuario en LocalStorage
      const userData = {
        email: this.loginFormGroup.value.email,
        // Puedes agregar más datos aquí según tus necesidades
      };
      localStorage.setItem('userData', JSON.stringify(userData));

      // Redirige al usuario a la página de inicio
      this.router.navigate(['/home']);
    } else {
      alert('no coincide');
    }
  }
}
