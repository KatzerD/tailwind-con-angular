import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { T001TailwindInitComponent } from './components/t001-tailwind-init/t001-tailwind-init.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, T001TailwindInitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tailwind-con-angular';
}
