---
sidebar_position: 2
---

# Bybit API Key

export const ImageWrapper = ({ children }) => (
<div className="image-wrapper">
{children}
</div>
);

You can very easily add your Bybit API key by following the below steps:

1. Go to Binance and navigate to **Profile > API > Create New Key**
2. Naming the API something memorable such as "Bitexbot API".
3. To avoid that your API key expires, click on "Specified IPs only" then copy and paste our trusted IP **78.47.73.106**

:::warning
Please make sure your API key has "Positions", "Orders" and "Trade" permissions. Do not select any Wallet permissions. This is not something that Bitexbot wants or needs to operate successfully.
:::

<ImageWrapper>
    <img src={require('/img/tutorial/bybit-apikey-1.png').default} alt="Bybit apikey form" />
</ImageWrapper>

3. Click on Confirm and complete the required security verification.
4. Once the key is generated copy and past the public and secret key into [Bitexbot API Key form](/get-started/apikey-guide.md#connect-bitexbot-to-your-exchange).

In case you face any issues, please feel free to reach out to support@bitexbot.org