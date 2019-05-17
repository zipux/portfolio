import { Component }                    from '@angular/core';
import { CryptoCurrencyType, coinList } from './CryptoModel';
import { MyCurrencyService } from './app.currency.services';

@Component({
    selector: 'app-root',
    template: `
                <ul>
                <li *ngFor="let crcy of currencyArray">
                <Currency [data]='crcy'></Currency>
                </li>
                </ul>
            `, 
                styles: ['span { color:pink; margin-left:20px; }'],
                providers: [MyCurrencyService]
})

export class HomeComponent {
    currencyArray: Array<CryptoCurrencyType>=[];

    // Since we are using a provider above we can receive 
    // an instance through an instructor.
    constructor(private currencyService: MyCurrencyService) {
        // Store local reference to MyDataService.
       // this.currencyArray  = coinList;
        this.getSomeData();
    }

    getCoinArrayIndex(abbreviation) {
        for(var i=0; i<this.currencyArray.length; i++) {
            if(this.currencyArray[i].symbol == abbreviation) {
                return i;
            }
        }
    }

    getSomeData() {
       // this.currencyService.getAllCurrencyPrices()
            // Get data and wait for result.
            this.currencyService.getCoins().subscribe(result => {
                    
            Object.entries(result).forEach(
                ([key, value]) => {
                    console.log(key, value)
                    let currency: CryptoCurrencyType = new CryptoCurrencyType() ;
                    currency.symbol=key;
                    currency.price=value['USD']
                    
                    if(key =='BTC'){currency.name='Bitcoin'}
                    if(key =='ETH'){currency.name='Ethereum'}
                    if(key =='LTC'){currency.name='Litecoin'}
                    this.currencyArray.push(currency)
                }
            ) 
        },
            // 2. Handle error.
            error => {
                alert(error.message);
            });
    }
}

