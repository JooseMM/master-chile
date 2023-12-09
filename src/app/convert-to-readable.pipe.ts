import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToReadable'
})
export class ConvertToReadablePipe implements PipeTransform {

  transform(value: any): string {
    value = value.toString();
    const transformToNormal = value.replace(/([a-z])([A-Z])/g, '$1 $2');
    return transformToNormal.charAt(0).toUpperCase() + transformToNormal.slice(1);
  }

}
