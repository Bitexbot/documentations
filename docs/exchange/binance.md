---
sidebar_position: 1
---

# Binance API Key

export const ImageWrapper = ({ children }) => (
<div className="image-wrapper">
{children}
</div>
);

You can very easily add your Binance API key by following the below steps:

1. Go to Binance and navigate to **Profile > API Management**
2. Naming the API something memorable such as "Bitexbot API".
3. Click on "Create API" and complete the required security verification.
4. Once the key is generated click on "Edit restrictions" and select "Enable Spot and Margin Trading" permission and hit "Save".

:::warning
Please make sure your API key has "Enable Spot and Margin Trading" permission. Do not select withdrawal permissions. This is not something that Bitexbot wants or needs to operate successfully.
:::

<ImageWrapper>
    <img src={require('/img/tutorial/binance-apikey-1.png').default} alt="Bybit apikey form" />
</ImageWrapper>

5. Copy and past the public and secret key into [Bitexbot API Key form](/get-started/apikey-guide.md#connect-bitexbot-to-your-exchange).

In case you face any issues, please feel free to reach out to support@bitexbot.org
