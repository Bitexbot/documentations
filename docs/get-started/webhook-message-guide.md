---
sidebar_position: 4
---

# Webhook Message

export const ImageWrapper = ({ children }) => (
<div className="image-wrapper">
{children}
</div>
);

The webhook message, is the message that TradingView sent to **Bitexbot** when the market meets your custom criteria.

To generate your message go to the **Bitexbot > Trade Wizard** page where you will be assisted by our trade wizard. Select your **Exchange** and **API Key** and click on the **Next** button.

<ImageWrapper>
    <img src={require('/img/tutorial/trade-wizard-1.png').default} alt="Bitexbot trade wizard select exchange and api key" />
</ImageWrapper>

You will now see many options you can choose from to configure your order. Let's say we want to go LONG on BTC/USDT with 10% of our available balance.

1. Select the BTC/USD coin pairs.
2. Set the order side BUY and the order type MARKET.
4. Select PERCENTAGE amount and drag the slider to the desired percentage.

<ImageWrapper>
    <img src={require('/img/tutorial/trade-wizard-2.png').default} alt="Bitexbot trade wizard order settings" />
</ImageWrapper>

After filling the form, hit the **Generate** button and copy the **webhook message**. This message will then be used in the configuration of your TradingView alerts.

<ImageWrapper>
    <img src={require('/img/tutorial/trade-wizard-3.png').default} alt="Bitexbot trade wizard generate webhook message" />
</ImageWrapper>