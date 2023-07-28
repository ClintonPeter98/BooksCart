import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.style.background = 'yellow';
   }

}
