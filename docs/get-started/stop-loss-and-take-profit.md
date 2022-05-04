---
sidebar_position: 6
---

# Stop Loss and Take Profit

export const ImageWrapper = ({ children }) => (
<div className="image-wrapper">
{children}
</div>
);

Stop Loss and Take Profit are an essential part of the risk management allowing you to plan your trading actions based on the price movement.

## How to set Stop Loss

Activate the Stop Loss option, than you can choose between "Percentage" or "Absolute" price. If you choose the option "Percentage" the Stop Loss will be placed relative to your entry price. The option "Absolute" instead will place the Stop Loss at the value you provided.

<ImageWrapper>
    <img src={require('/img/tutorial/stop-loss-1.png').default} alt="Stop Loss Bitexbot" />
</ImageWrapper>

## How to set Take Profit

Activate the Take Profit option, then you can specify the Target Price as a percent value or define a fixed price where the take profit should be placed. You can split your Take Profit up to 5 Target Prcie, in this case all amount values must be combined equal or less than 100. For example if you have 4 Take Profit target you can set each Take Profit to 25%.

<ImageWrapper>
    <img src={require('/img/tutorial/take-profit-1.png').default} alt="Take Profit Bitexbot" />
</ImageWrapper>

If you can't find what you need, feel free to visit the [Bitexbot Discord](https://discord.gg/G4vHmWEuXE) and ask for help there!