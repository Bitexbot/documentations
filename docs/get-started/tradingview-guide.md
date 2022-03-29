---
sidebar_position: 5
---

# Connect TradingView

With TradingView you can send signals to Bitexbot with **TradingView Alerts**, that will be **automagically converted by Bitexbot into a trade** on your exchange. Alerts can be sent with **Webhook** but you need to have a paid TradingView account.

<!--
Alerts can be sent with **Webhook** or **Email**; in order to use webhook alerts you need to have a paid TradingView account, while email alerts are availables for free.
-->

## Setup Webhook Alert

export const ImageWrapper = ({ children }) => (
<div className="image-wrapper">
{children}
</div>
);

<ImageWrapper>
    <img src={require('/img/tutorial/tv-clock-button.png').default} alt="Alert button" />
</ImageWrapper>

Go to [TradingView](https://www.tradingview.com/) and click on the clock symbol in the upper right corner. You will now see many options you can choose from to generate a signal. It's necessary to select the option "WebHook URL". 

After selecting this option, a text field will appear in which you have to paste the **Bitexbot WebHook URL** `https://api.bitexbot.org/webhook/trade`. Next paste the message that you have previously generated on the [**Webhook Message**](webhook-message-guide.md) page and hit the "Save" button.

<ImageWrapper>
    <img src={require('/img/tutorial/tv-webhook-field.png').default} alt="Webhook alert option" />
</ImageWrapper>

:::info
For more information on how to correctly create the webhook message, [click here](webhook-message-guide.md).
:::

<!--
## Setup Email Alert

If you have a paid TradingView account, we strongly recommend to use the **Webhook** integration above. The email integration is more difficult to implement and less efficient then the previous one, but it's the only available option for user with the free Basic TradingView Account.

In order to setup an email alert, you need to have a **Gmail** account and set your **gmail address in your TradingView profile**.
-->