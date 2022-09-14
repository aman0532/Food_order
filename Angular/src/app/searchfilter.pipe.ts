import { Pipe, PipeTransform } from '@angular/core';
import { Card } from './card';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Cards: Card[],searchvalue:string): Card[] {
    if(!Cards || !searchvalue)
    {
      //return Cards;
    }
    return Cards.filter(card =>
      card.card_phone.toLowerCase().includes(searchvalue.toLocaleLowerCase()));
  }

}
