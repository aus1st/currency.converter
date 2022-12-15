//show all currency rates in a table
//user select currency from and to currency and input amount
// to display conversion rate and total convesarsion

import currency from "../models/currency.js";

let currencies: currency[]=[];


export async function buildTable() {
 
    return new Promise((res)=>{

        currencies.push({currency: 'US Dollar',symbol: "USD", buying: 231.7, selling: 234});
        currencies.push({currency: "Euro",symbol: "EUR", buying: 255.5, selling: 257.5});
        currencies.push({currency: "British Pound",symbol: "GBP", buying: 297, selling: 299.5});
        currencies.push({currency: "UAE Dirham",symbol: "AED", buying: 66.8, selling: 67.4});
        currencies.push({currency: "Saudi Riyal",symbol: "SAR", buying: 63.9, selling: 64.5});
        currencies.push({currency: "Canadian Dollar",symbol: "CAD", buying: 164.62, selling: 165.97});
        currencies.push({currency: "Chinese Yuan",symbol: "CNY", buying: 32.32, selling: 32.47});
        currencies.push({currency: "Australian Dollar",symbol: "AUD", buying: 153.1, selling: 154.35});
        console.table(currencies);
        setTimeout(res,0);
    })

}

type currencyName = {
    name: any,
    value: {}
}



async function getFromCurrency(currencyNames: currencyName[]) {


}

