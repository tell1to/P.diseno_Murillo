import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';

@Component({
  selector: 'app-forms-ng',
  standalone: false,
  
  templateUrl: './forms-ng.component.html',
  styleUrl: './forms-ng.component.css',
  
  
})
export class FormsNGComponent {
  user: any ={};
  acceptTerms: boolean = false; // Agrega esta propiedad
  favoriteColor: string = '';
  color: string | undefined;
  submit(){
    console.log('Formulario enviado', this.user, this.acceptTerms, this.favoriteColor);
  }
}
