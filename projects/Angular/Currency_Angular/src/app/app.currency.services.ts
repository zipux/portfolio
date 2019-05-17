import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MyCurrencyService {
    names: Array<any>;
    constructor(private http: HttpClient) {
        
    }

    getCoins() {
        let url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD';
        return this.http.get<any>(url)
    }
    getDetail(symbol) {
        let url = "https://min-api.cryptocompare.com/data/histoday?fsym="+symbol+"&tsym=USD&limit=1"
        return this.http.get<any>(url)
    }
}

