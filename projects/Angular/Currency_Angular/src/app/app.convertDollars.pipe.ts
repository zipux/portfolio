import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'convertDollars' })

export class ConvertDollarsPipe implements PipeTransform {
    transform(inputAmount) {
        return '$ ' + inputAmount + ' USD'
 }
}

