---
sidebar_position: 2
---

# BitMEX API Key

export const ImageWrapper = ({ children }) => (
<div className="image-wrapper">
{children}
</div>
);

You can very easily add your BitMEX API key by following the below steps:

1. Go to BitMEX and navigate to **Profile > API Keys**
2. Naming the API something memorable such as "Bitexbot API".
3. To avoid that your API key expires copy and paste our trusted IP **78.47.73.106/32** in the CIDR block.
4. Select **Order** under Key Permissions.

:::warning
Do not select Withdraw permissions. This is not something that Bitexbot wants or needs to operate successfully.
:::

<ImageWrapper>
    <img src={require('/img/tutorial/bitmex-apikey-1.png').default} alt="BitMEX apikey form" />
</ImageWrapper>

5. Click on "Create API Key" and complete the required security verification.
6. Once the key is generated copy and past the public and secret key into [Bitexbot API Key form](/get-started/apikey-guide.md#connect-bitexbot-to-your-exchange).

In case you face any issues, please feel free to reach out to support@bitexbot.org