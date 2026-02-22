# BIDDEX PROJECT DOCUMENT

Biddex is a decentralized forecasting and data intelligence infrastructure built on Stellar that leverages auction-based prediction markets to generate transparent, incentive-aligned probability signals about real-world events. Unlike traditional prediction platforms that focus purely on speculation, Biddex is designed as a structured forecasting engine where market activity produces measurable, queryable data that can be consumed by individuals, developers, institutions, and AI systems.

At its core, Biddex transforms competitive bidding into structured probabilistic intelligence. Every trade is processed through a batch auction mechanism that determines a uniform clearing price within fixed intervals. This pricing model reduces front-running, discourages manipulation, and enhances fairness in market participation. The resulting market prices are translated into implied probabilities, forming a live, decentralized signal layer that reflects collective intelligence.

Biddex is not merely a trading platform. It is a data generation protocol where forecasting becomes measurable, auditable, and composable across the broader Web3 ecosystem.

---

## HOW BIDDEX WORKS

Biddex operates through a structured forecasting lifecycle that integrates market creation, auction-based trade execution, probability aggregation, and on-chain settlement.

A market creator begins by connecting a Stellar-compatible wallet and defining an event. The creator specifies the market title, description, outcome structure, trading duration, and resolution criteria. Each possible outcome is tokenized as a Stellar asset, creating a transparent and programmable structure for participation. The market is then initialized and made available for forecasting activity.

Participants engage by submitting bids during predefined auction windows. Rather than executing trades instantly through continuous matching, Biddex collects all bids within a time interval and computes a uniform clearing price at the end of the cycle. This method ensures that all matched participants transact at the same price, eliminating time-based execution advantages and significantly reducing the impact of automated front-running strategies.

As trading activity accumulates, market prices are continuously translated into implied probabilities. These probability signals represent aggregated market sentiment and form the foundation of Biddex’s data intelligence layer. Once the event concludes, resolution logic is triggered, and winning outcome tokens become redeemable. Settlement occurs on-chain, ensuring transparency and finality.

The forecasting history, probability movements, and settlement records remain permanently accessible, forming a persistent dataset for analysis.

---

## THE BIDDEX SOLUTION

Biddex creates a decentralized forecasting protocol powered by batch auctions and on-chain settlement. The system introduces structured price discovery through time-based auctions, ensuring that market signals are derived from competitive participation rather than instantaneous matching advantages.

By converting clearing prices into implied probabilities, Biddex produces a continuous stream of forecasting data that can be queried, analyzed, and integrated into external systems. This transforms market participation into structured intelligence. Participants are financially incentivized to provide accurate forecasts, creating a direct alignment between contribution and reward.

The platform’s design ensures that every stage of the forecasting lifecycle, from market creation to final settlement, is transparent and verifiable on Stellar. This removes reliance on centralized intermediaries while preserving efficiency and accessibility.

---

## WHY STELLAR

Biddex is built on Stellar due to its scalability, low transaction costs, and efficient asset issuance model. Stellar enables rapid transaction finality, making it suitable for frequent auction settlement cycles. The cost efficiency ensures that high-frequency forecasting participation remains economically viable.

Stellar’s native asset issuance framework simplifies the tokenization of outcome positions, while Soroban smart contracts provide programmable logic for auction execution and payout automation. Furthermore, Stellar’s expanding ecosystem and strong presence in emerging markets provide strategic alignment with Biddex’s long-term adoption strategy.

---

## PROJECT STRUCTURE

- `/contracts`: Soroban smart contracts built with Rust.
  - `biddex`: Main contract logic for market creation and bidding.
- `/backend`: Node.js & TypeScript API for auction engine and settlement logic.
- `/frontend`: Next.js web application with a premium UI and Stellar wallet integration.

---

## GETTING STARTED

### Contracts
1. Navigate to `contracts/biddex`.
2. Run `cargo test` to verify logic.
3. Build with `stellar contract build`.

### Backend
1. Navigate to `backend`.
2. Run `npm install`.
3. Start dev server: `npm run dev` (or `ts-node src/index.ts`).

### Frontend
1. Navigate to `frontend`.
2. Run `npm install`.
3. Start dev server: `npm run dev`.

## LICENSE
MIT
