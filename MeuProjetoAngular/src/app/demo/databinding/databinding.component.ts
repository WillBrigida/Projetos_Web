import { Component} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: []
})
export class DatabindingComponent {

  public contador : number = 2;
  public urlImagem : string = "http://angular.io/assets/images/logos/angular/angular.svg";

}

