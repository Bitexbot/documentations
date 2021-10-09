"use strict";(self.webpackChunkdocumentations=self.webpackChunkdocumentations||[]).push([[256],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),y=a,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5836:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},ImageWrapper:function(){return u},default:function(){return y}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},s="Bybit API Key",p={unversionedId:"exchange/bybit",id:"exchange/bybit",isDocsHomePage:!1,title:"Bybit API Key",description:");",source:"@site/docs/exchange/bybit.md",sourceDirName:"exchange",slug:"/exchange/bybit",permalink:"/exchange/bybit",editUrl:"https://github.com/bitexbot/documentations/edit/master/docs/exchange/bybit.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Binance API Key",permalink:"/exchange/binance"},next:{title:"FTX API Key",permalink:"/exchange/ftx"}},l=[],u=function(e){var t=e.children;return(0,o.kt)("div",{className:"image-wrapper"},t)},m={toc:l,ImageWrapper:u};function y(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bybit-api-key"},"Bybit API Key"),(0,o.kt)("p",null,"You can very easily add your Bybit API key by following the below steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to Binance and navigate to ",(0,o.kt)("strong",{parentName:"li"},"Profile > API > Create New Key")),(0,o.kt)("li",{parentName:"ol"},'Naming the API something memorable such as "Bitexbot API".')),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Please make sure your API key has "Positions", "Orders" and "Trade" permissions. Do not select any Wallet permissions. This is not something that Bitexbot wants or needs to operate successfully.'))),(0,o.kt)(u,{mdxType:"ImageWrapper"},(0,o.kt)("img",{src:n(4955).Z,alt:"Bybit apikey form"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Click on Confirm and complete the required security verification."),(0,o.kt)("li",{parentName:"ol"},"Once the key is generated copy and past the public and secret key into ",(0,o.kt)("a",{parentName:"li",href:"/get-started/apikey-guide#connect-bitexbot-to-your-exchange"},"Bitexbot API Key form"),".")),(0,o.kt)("p",null,"In case you face any issues, please feel free to reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@bitexbot.org"},"support@bitexbot.org")))}y.isMDXComponent=!0},4955:function(e,t,n){t.Z=n.p+"assets/images/bybit-apikey-1-9057ccba6a2e1273b86af07d32f9a085.png"}}]);