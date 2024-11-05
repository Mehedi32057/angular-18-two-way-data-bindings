import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //for two way data bindings must be import forms module
  //using ngModel for two way bindings
  //two way bindings specially use for view to component componant to view
  title = 'two-way-data-bindings';
project ="Example of two way data bindings";
email="sakibur@gmail.com"
onClick(){

console.log(this.email)
}
}
