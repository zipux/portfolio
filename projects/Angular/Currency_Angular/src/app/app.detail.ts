import { Component }              from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CryptoCurrencyType } from './CryptoModel';
import { MyCurrencyService } from './app.currency.services';

@Component({
    template: `
                This is the currency detail.
                <Currency [data]='currency' [detail]='true'></Currency>
            `
})

export class DetailComponent { 
    // The constructor sets up the class.
    // Defining private parameters for services in the constructor initializes instances
    // for the entire class.
    currency:CryptoCurrencyType=new CryptoCurrencyType()
    constructor(private route: ActivatedRoute,private currencyService: MyCurrencyService) {
    }

    // ngOnInit() gets called after the object is set up via the constructor.
    // At this point, the class is able to handle the parameters passed to it.
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let localID = params['symbol'];
            this.currency.symbol= localID;
            this.getCurrencyInformation();
        });
    }

    getCurrencyInformation() {
      
        // Get data and wait for result.
        this.currencyService.getDetail(this.currency.symbol).subscribe(data => {
            // 1. Handle successful data.

            // Log the data in the console to see what it looks like.
            // Be sure to use the debugger.
          //  console.log(JSON.stringify(data));
            let FINAL_UPDATE = 1;
            let priceInfo    = data["Data"][FINAL_UPDATE];
            let open         = priceInfo.open;
            let close        = priceInfo.close;
            this.currency.open=open
            this.currency.close=close
        },
        // 2. Handle error.
        error => {
            alert(error.message);
        });
    }
}
