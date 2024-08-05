import { Component } from '@angular/core';
import { Route, Router, RouterLink, RouterLinkActive, RouterOutlet, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Page1Component } from './page1/page1.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive,NavBarComponent,Page1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'entrenamiento';


  
}
