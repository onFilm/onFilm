import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMiles'
})
export class ConvertMilesPipe implements PipeTransform {

  transform(value: any, targetUnits?: string): number | string {
    if (!value) {
      return '';
    }
    switch (targetUnits) {
      case 'm':
        return value * 1.60934 * 1000 + ' M';
      case 'cm':
        return value * 1.60934 * 1000 * 1000 + ' CM';
      case undefined:
      case 'km':
        return value * 1.60934 + ' KM';
      default:
        throw new Error('You\'ve passed wrong target unit');
    }
  }

}
