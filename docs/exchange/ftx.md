---
sidebar_position: 4
---

# FTX API Key

export const ImageWrapper = ({ children }) => (
<div className="image-wrapper">
{children}
</div>
);

You can very easily add your FTX API key by following the below steps:

1. Go to FTX and navigate to **Profile > Settings > Api**
2. Click on "CREATE API KEY".

<ImageWrapper>
    <img src={require('/img/tutorial/ftx-apikey-1.png').default} alt="FTX apikey" />
</ImageWrapper>

3. Copy and past the public and secret key into [Bitexbot API Key form](/get-started/apikey-guide.md#connect-bitexbot-to-your-exchange).

In case you face any issues, please feel free to reach out to support@bitexbot.org
