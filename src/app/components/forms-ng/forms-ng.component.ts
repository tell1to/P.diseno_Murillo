import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';
=======
>>>>>>> 2640a0ec064b516ed2ad87dc13bc058b10ef65bb

@Component({
  selector: 'app-forms-ng',
  standalone: false,
  
  templateUrl: './forms-ng.component.html',
<<<<<<< HEAD
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
=======
  styleUrl: './forms-ng.component.css'
})
export class FormsNGComponent {

>>>>>>> 2640a0ec064b516ed2ad87dc13bc058b10ef65bb
}
