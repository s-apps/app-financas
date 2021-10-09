import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[inputFocus]'
})
export class InputFocusDirective implements AfterViewInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }

}
