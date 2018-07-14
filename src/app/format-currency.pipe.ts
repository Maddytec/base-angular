import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: any, locale = 'Pt-Br': any): any {
    return Intl.NumberFormat(locale, {style: 'currency', currency: 'BRL'} ).format(value);
  }

}
