---
sidebar_position: 5
---

# Kraken API Key

export const ImageWrapper = ({ children }) => (
<div className="image-wrapper">
{children}
</div>
);

You can very easily add your Kraken API key by following the below steps:

1. Go to Kraken and navigate to **Profile > Security > API** and click on **Add key**.
2. Naming the API something memorable such as "Bitexbot API".

:::warning
Please make sure your API key has all **"Orders & Trades"** permissions and **"Access Websockets API"** permission. Do not select any Funds permissions. This is not something that Bitexbot wants or needs to operate successfully.
:::

<ImageWrapper>
    <img src={require('/img/tutorial/kraken-apikey-1.png').default} alt="Kraken apikey form" />
</ImageWrapper>

3. Click on **Generate key**.
4. Once the key is generated copy and past the public and secret key into [Bitexbot API Key form](/get-started/apikey-guide.md#connect-bitexbot-to-your-exchange).

In case you face any issues, please feel free to reach out to support@bitexbot.org