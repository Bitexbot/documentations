---
sidebar_position: 3
---

# Setup API Keys

In order to let Bitexbot execute orders for you, you have to setup one or more API Keys for the supported echanges.

## So, What Exactly Is an API Key?

According to Wikipedia's dictionary, an API key is: “is a unique identifier used to authenticate a user, developer, or calling program to an API. However, they are typically used to authenticate a project with the API rather than a human user”.

In simple words an API Key can be considered as a username and password that is generating to allow access to your exchange. These are created in your exchange account, check the section "Exchange API Key" for more information on how to correctly create API Keys on your specific exchange.

:::warning IMPORTANT
You will have to give the API Key **"View"** and **"Trading"** rights. **Please do not give "Withdrawal" rights**. We don't need it!!
:::

## Connect Bitexbot to Your Exchange

To create an API Key:

1. Go to the **Bitexbot > API Keys** page.
2. On the **API Keys** page, click the **Create API** button.
3. You’ll be prompted to enter information such as label, exchange, public and secret api keys.
4. Click **Create**.

:::tip
Some Exchanges (e.g. Binance and Bybit) let you create API Keys with limited validity (usually 90 days) if you don't bind them to a trusted IP. To avoid that your API key expires you can use our trusted IP **78.47.73.106**
:::