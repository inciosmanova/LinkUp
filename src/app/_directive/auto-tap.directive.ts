import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[libAutoTab]'
})
export class AutoTabDirective {
  @Input() libAutoTab='';
  constructor() {}
  @HostListener('input', ['$event.target']) onInput(input: { value: string | any[]; attributes: { maxlength: { value: any; }; }; }) {
    const length = input.value.length;
    const maxLength = input.attributes.maxlength.value;

    if (length >= maxLength && this.libAutoTab) {
      const field = document.getElementById(this.libAutoTab);
      if (field) {
        field.focus();
      }
    }
  }
}
