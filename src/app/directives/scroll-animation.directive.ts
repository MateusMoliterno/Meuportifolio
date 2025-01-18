import { Directive,ElementRef,Renderer2,HostListener, isStandalone } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective {

  constructor(private el: ElementRef, private renderer: Renderer2 ) { }

  private isVisible():boolean{
    const rect = this.el.nativeElement.getBoundingClientRect();
    return rect.top<window.innerHeight && rect.bottom > 0;
  }

  @HostListener('window:scroll',[])
  onScroll(): void {
    if (this.isVisible()){
      this.renderer.addClass(this.el.nativeElement, 'show');
    }
  
    else {
      this.renderer.removeClass(this.el.nativeElement,'show');
    }

  }
}
