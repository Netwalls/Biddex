import express from 'express';
import { AuctionEngine } from './auction-engine.js';
import type { Bid } from './auction-engine.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Temporary in-memory storage for auctions
const auctions: Map<string, Bid[]> = new Map();

app.get('/', (req, res) => {
    res.send('Biddex Backend API is running.');
});

/**
 * Endpoint to submit a bid
 */
app.post('/api/bids', (req, res) => {
    const { marketId, bidder, amount, quantity } = req.body;

    if (!marketId || !bidder || !amount || !quantity) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const bid: Bid = { bidder, amount, quantity };
    const currentBids = auctions.get(marketId) || [];
    currentBids.push(bid);
    auctions.set(marketId, currentBids);

    res.status(201).json({ message: 'Bid submitted successfully', bid });
});

/**
 * Endpoint to trigger auction settlement
 */
app.post('/api/settle', (req, res) => {
    const { marketId } = req.body;
    const bids = auctions.get(marketId);

    if (!bids || bids.length === 0) {
        return res.status(404).json({ error: 'No bids found for this market' });
    }

    const clearingPrice = AuctionEngine.calculateClearingPrice(bids);
    const matchedOrders = AuctionEngine.matchOrders(bids, clearingPrice);

    // In a real flow, this would trigger a Soroban contract call or Stellar transaction
    res.json({
        marketId,
        clearingPrice,
        matchedCount: matchedOrders.length,
        matchedOrders
    });
});

app.listen(port, () => {
    console.log(`Biddex backend listening at http://localhost:${port}`);
});
