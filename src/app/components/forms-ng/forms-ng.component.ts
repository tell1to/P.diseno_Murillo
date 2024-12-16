import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-ng',
  standalone: false,
  
  templateUrl: './forms-ng.component.html',
  styleUrl: './forms-ng.component.css'
})
export class FormsNGComponent {
  user: any ={};
  acceptTerms: boolean = false; // Agrega esta propiedad
  submit(){
    console.log('Formulario enviado', this.user)
  }
}
