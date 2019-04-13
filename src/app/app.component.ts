import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  //   h3 {
  //     color: dodgerblue
  //   }
  // `]
  // You can use styleUrls to point to a list of css files, or write your css in this file 
  // using the styles
})
export class AppComponent {
  name = 'angular-get-started';
}
