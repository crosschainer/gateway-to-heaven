
var staging = true;
var public_api_key = "43087539-a03c-4746-943b-2651b5d11058";
var use_metamask = false;
var non_metamask_account;
var address;



//Click Events
document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (event.target.matches('#use-metamask-wallet')) {
        use_metamask = true;
        window.web3 = new Web3(web3.currentProvider);
        window.web3.eth.requestAccounts().then((value) => {
            address = value[0];
            initializeWidget();
        });
    }
    else if (event.target.matches('#use-disposable-wallet')) {
        use_metamask = false;
        window.web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed1.binance.org:443"));
        generateDisposableWallet();
        initializeWidget();
    }
    else {
        return;
    }
	// Don't follow the link
	event.preventDefault();


}, false);

function generateDisposableWallet() {
    non_metamask_account = window.web3.eth.accounts.create();
    address = non_metamask_account["address"];
}


function initializeWidget() {
    let iframe_url;
    if(staging == true) {
        iframe_url = "https://staging-global.transak.com/?apiKey="+public_api_key+"&redirectURL=https://transak.com&cryptoCurrencyCode=BNB&network=bsc&walletAddress="+address+"&disableWalletAddressForm=true&exchangeScreenTitle=Buying%20BNB%20to%20get%20Lamden%20TAU&isFeeCalculationHidden=true&isDisableCrypto=True";
    }
    else {
        iframe_url = "https://global.transak.com/?apiKey="+public_api_key+"&redirectURL=https://transak.com&cryptoCurrencyCode=BNB&network=bsc&walletAddress="+address+"&disableWalletAddressForm=true&exchangeScreenTitle=Buying%20BNB%20to%20get%20Lamden%20TAU&isFeeCalculationHidden=true&isDisableCrypto=True";
    }
    let ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", iframe_url);
    ifrm.setAttribute("height", 625);
    ifrm.setAttribute("style", "display: block; width: 100%; max-height: 625px; max-width: 500px;border:0");
    document.getElementById("step-2").appendChild(ifrm);
    document.getElementById("step-1-bar").style = "display:none";
    document.getElementById("step-1").style = "display:none";
    document.getElementById("step-2-bar").style = "display:flex";
    document.getElementById("step-2").style = "display:flex";
}