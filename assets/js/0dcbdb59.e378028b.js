"use strict";(self.webpackChunkdocumentations=self.webpackChunkdocumentations||[]).push([[732],{3905:function(e,t,A){A.d(t,{Zo:function(){return s},kt:function(){return g}});var r=A(7294);function n(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function a(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,r)}return A}function o(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?a(Object(A),!0).forEach((function(t){n(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):a(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function f(e,t){if(null==e)return{};var A,r,n=function(e,t){if(null==e)return{};var A,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)A=a[r],t.indexOf(A)>=0||(n[A]=e[A]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)A=a[r],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(n[A]=e[A])}return n}var u=r.createContext({}),i=function(e){var t=r.useContext(u),A=t;return e&&(A="function"==typeof e?e(t):o(o({},t),e)),A},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var A=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,s=f(e,["components","mdxType","originalType","parentName"]),c=i(A),g=n,b=c["".concat(u,".").concat(g)]||c[g]||d[g]||a;return A?r.createElement(b,o(o({ref:t},s),{},{components:A})):r.createElement(b,o({ref:t},s))}));function g(e,t){var A=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=A.length,o=new Array(a);o[0]=c;var f={};for(var u in t)hasOwnProperty.call(t,u)&&(f[u]=t[u]);f.originalType=e,f.mdxType="string"==typeof e?e:n,o[1]=f;for(var i=2;i<a;i++)o[i]=A[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,A)}c.displayName="MDXCreateElement"},6936:function(e,t,A){A.r(t),A.d(t,{frontMatter:function(){return f},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return s},ImageWrapper:function(){return d},default:function(){return g}});var r=A(7462),n=A(3366),a=(A(7294),A(3905)),o=["components"],f={sidebar_position:4},u="Webhook Message",i={unversionedId:"get-started/webhook-message-guide",id:"get-started/webhook-message-guide",isDocsHomePage:!1,title:"Webhook Message",description:");",source:"@site/docs/get-started/webhook-message-guide.md",sourceDirName:"get-started",slug:"/get-started/webhook-message-guide",permalink:"/get-started/webhook-message-guide",editUrl:"https://github.com/bitexbot/documentations/edit/master/docs/get-started/webhook-message-guide.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Setup API Keys",permalink:"/get-started/apikey-guide"},next:{title:"Connect TradingView",permalink:"/get-started/tradingview-guide"}},s=[],d=function(e){var t=e.children;return(0,a.kt)("div",{className:"image-wrapper"},t)},c={toc:s,ImageWrapper:d};function g(e){var t=e.components,f=(0,n.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,f,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webhook-message"},"Webhook Message"),(0,a.kt)("p",null,"The webhook message, is the message that TradingView sent to ",(0,a.kt)("strong",{parentName:"p"},"Bitexbot")," when the market meets your custom criteria."),(0,a.kt)("p",null,"To generate your message go to the ",(0,a.kt)("strong",{parentName:"p"},"Bitexbot > Trade Wizard")," page where you will be assisted by our trade wizard. Select your ",(0,a.kt)("strong",{parentName:"p"},"Exchange")," and ",(0,a.kt)("strong",{parentName:"p"},"API Key")," and click on the ",(0,a.kt)("strong",{parentName:"p"},"Next")," button."),(0,a.kt)(d,{mdxType:"ImageWrapper"},(0,a.kt)("img",{src:A(4466).Z,alt:"Bitexbot trade wizard select exchange and api key"})),(0,a.kt)("p",null,"You will now see many options you can choose from to configure your order. Let's say we want to go LONG on BTC/USDT with 10% of our available balance."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the BTC/USD coin pairs."),(0,a.kt)("li",{parentName:"ol"},"Set the order side BUY and the order type MARKET."),(0,a.kt)("li",{parentName:"ol"},"Select PERCENTAGE amount and drag the slider to the desired percentage.")),(0,a.kt)(d,{mdxType:"ImageWrapper"},(0,a.kt)("img",{src:A(9653).Z,alt:"Bitexbot trade wizard order settings"})),(0,a.kt)("p",null,"After filling the form, hit the ",(0,a.kt)("strong",{parentName:"p"},"Generate")," button and copy the ",(0,a.kt)("strong",{parentName:"p"},"webhook message"),". This message will then be used in the configuration of your TradingView alerts."),(0,a.kt)(d,{mdxType:"ImageWrapper"},(0,a.kt)("img",{src:A(2655).Z,alt:"Bitexbot trade wizard generate webhook message"})))}g.isMDXComponent=!0},4466:function(e,t){t.Z="data:image/png;base64,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"},9653:function(e,t,A){t.Z=A.p+"assets/images/trade-wizard-2-e2de43b96443b82537c66d94443f317c.png"},2655:function(e,t,A){t.Z=A.p+"assets/images/trade-wizard-3-2cd395fc033d9ce6595d991381c5da11.png"}}]);