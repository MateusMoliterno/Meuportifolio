import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreMimComponent} from './about me/sobre-mim.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SobreMimComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meuPortifloio';
}
