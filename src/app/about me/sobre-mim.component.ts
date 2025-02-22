import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';
@Component({
  selector: 'app-sobre-mim',
  imports: [ScrollAnimationDirective],
  templateUrl: './sobre-mim.component.html',
  styleUrl: './sobre-mim.component.css'
})
export class SobreMimComponent {
  isMenuOpen = false; // Estado inicial: menu fechado

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Alterna o estado do menu
  }

}
