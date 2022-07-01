**Gateway to Heaven**

DEMO: https://mintorburn.com/reflecttau/gateway/

A serverless fiat onramp for Lamden

It currently provides
- Creating a disposable Wallet
- Use your own MetaMask Wallet
- Uses Transak to buy BNB and sends to one of the above wallets

Flow:
1. User chooses if he wants to use his MetaMask Wallet or create disposable one
2. User buys BNB from Transak
3. Client listens to incoming BNB on connected Wallet
4. Client executes Exchanges for TAU
5. Client bridges TAU over to Lamden
6. Finished