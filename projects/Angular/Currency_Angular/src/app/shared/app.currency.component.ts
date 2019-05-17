import { Component, Input, OnInit }                    from '@angular/core';
import { CryptoCurrencyType, coinList } from '../CryptoModel';

@Component({
    selector: 'Currency',
    template: `
                    <div *ngIf="detail == false">                
                    <a routerLink="/detail/{{data.symbol}}" routerLinkActive="active">{{data.name}}</a>
                    {{data.symbol}}   
                    <span> {{ data.price  | convertDollars}} </span>
                    </div>
                    <div *ngIf="detail == true">
                    <img src='{{getImage()}}'>
                    <br/><br/>
                    {{data.open}} open <br />
                    {{data.close}} close
                    <!-- Draw up and down arrows -->
                    <br /> <span [innerHtml]='getIcon()'></span>
                    </div>
                `, 
})

export class CurrencyComponent  {
@Input() data: CryptoCurrencyType;
@Input() detail=false

getIcon() {
    if(this.data.open>this.data.close){
        return '<span class="red"> &darr;  </span>'; 
    }
    if(this.data.open<this.data.close){
        return '<span class="green"> &uarr; </span>'; 
    }
}
getImage() {
    if(this.data.symbol=='BTC'){
        return "https://www.cryptocompare.com/media/19633/btc.png"
    }
    if(this.data.symbol=='ETH'){
        return "https://www.cryptocompare.com/media/20646/eth_logo.png"
    }
    if(this.data.symbol=='LTC'){
        return "https://www.cryptocompare.com/media/19782/litecoin-logo.png"
    }
}
}