export class Stock {
    favorite: boolean = false;
    exchange: string = 'HOSE';

    constructor(
        public name: string,
        public code: string,
        public price: number,
        public previousPrice: number,
        exchange?: string
    ) { 
        if (exchange) {
            this.exchange = exchange;
        }
    }

    isPositiveChange(): boolean {
        return this.price >= this.previousPrice;
    }
}
