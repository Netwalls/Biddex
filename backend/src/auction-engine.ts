export interface Bid {
    bidder: string;
    amount: number;
    quantity: number;
}

export class AuctionEngine {
    /**
     * Calculates the uniform clearing price for a batch of bids.
     * In a simple implementation, this finds the price where supply meets demand.
     * For Biddex, we use a scoring mechanism or a descending price auction logic.
     */
    static calculateClearingPrice(bids: Bid[]): number {
        if (bids.length === 0) return 0;

        // Sort bids by amount (price) descending
        const sortedBids = [...bids].sort((a, b) => b.amount - a.amount);

        // Simple clearing price: The median price or the price where max volume is achieved
        // For V1, we take the average of the top 50% of bids to represent the competitive price
        const topBids = sortedBids.slice(0, Math.ceil(sortedBids.length / 2));
        const sum = topBids.reduce((acc, bid) => acc + bid.amount, 0);

        return sum / topBids.length;
    }

    /**
     * Matches bids against the clearing price.
     */
    static matchOrders(bids: Bid[], clearingPrice: number): Bid[] {
        return bids.filter(bid => bid.amount >= clearingPrice);
    }
}
