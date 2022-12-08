import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {

  constructor(private element: ElementRef) { }

  @Input('appBgColor') set bgColor (color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  } 

}
