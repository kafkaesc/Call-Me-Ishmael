import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlTag',
})
export class HtmlTagPipe implements PipeTransform {
  transform(val: string): string {
    return '<' + val + '>';
  }
}
