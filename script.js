var vm = new Vue({
    el: '#vueApp',
    data: {
        amount:0,
        currencyFrom: 'BAM',
        currencyTo: 'EUR',
        currencies: [            
        'BAM',
        'RSD',
        'EUR',
        'USD'
        ]
        ,
        currencyMap: {
            BAMEUR: 0.511,
            BAMUSD: 0.581,
            BAMRSD: 61.559,
            RSDBAM: 0.016,
            RSDEUR: 0.008,
            RSDUSD: 0.009,
            EURBAM: 1.955,
            EURUSD: 1.137,
            EURRSD: 120.400,
            USDBAM: 1.719,
            USDEUR: 0.879,
            USDEUR: 105.604
        },
        result: 0
    },
    methods: {
        onCurrencyChange() {
            this.result = this.amount * ((this.currencyMap[this.currencyFrom+this.currencyTo] || 1));
        }
    }
});