import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appItalicText]'
})
export class ItalicTextDirective {

  constructor(
    private element: ElementRef
  ) {
    this.element.nativeElement.style.fontStyle = 'italic';
   }

}
