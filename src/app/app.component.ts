import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PolicyListComponent } from "./components/policy-list/policy-list.component";

@Component({
  selector: 'app-root',
  imports: [ PolicyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fronend';
}
