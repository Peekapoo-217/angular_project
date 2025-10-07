export class Stock {
    favorite: boolean = false;
    exchange: string = 'HOSE';

    constructor(
        public name: string,
        public code: string,
        public price: number,
        public previousPrice: number,
        exchange?: string,
        favorite?: boolean
    ) {
        if (exchange) {
            this.exchange = exchange;
        }
        if (favorite !== undefined) {
            this.favorite = favorite;
        }
    }

    isPositiveChange(): boolean {
        return this.price >= this.previousPrice;
    }
}
