import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  title = 'Bem vindo ao treinamento de angular';
  imageUrl = "https://res.cloudinary.com/practicaldev/image/fetch/s--vp9p688o--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e1y9n2k21pyu883ee938.jpg";

  constructor() { }

  chamarFuncao() {
    console.log("esse é um click")
  }

}
