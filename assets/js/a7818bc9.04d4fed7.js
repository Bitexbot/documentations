"use strict";(self.webpackChunkdocumentations=self.webpackChunkdocumentations||[]).push([[881],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5102:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:3},s="Setup API Keys",u={unversionedId:"get-started/apikey-guide",id:"get-started/apikey-guide",isDocsHomePage:!1,title:"Setup API Keys",description:"In order to let Bitexbot execute orders for you, you have to setup one or more API Keys for the supported echanges.",source:"@site/docs/get-started/apikey-guide.md",sourceDirName:"get-started",slug:"/get-started/apikey-guide",permalink:"/documentations/get-started/apikey-guide",editUrl:"https://github.com/bitexbot/documentations/edit/master/docs/get-started/apikey-guide.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create Account",permalink:"/documentations/get-started/create-account-guide"},next:{title:"Webhook Message",permalink:"/documentations/get-started/webhook-message-guide"}},p=[{value:"So, What Exactly Is an API Key?",id:"so-what-exactly-is-an-api-key",children:[]},{value:"Connect Bitexbot to Your Exchange",id:"connect-bitexbot-to-your-exchange",children:[]}],l={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup-api-keys"},"Setup API Keys"),(0,a.kt)("p",null,"In order to let Bitexbot execute orders for you, you have to setup one or more API Keys for the supported echanges."),(0,a.kt)("h2",{id:"so-what-exactly-is-an-api-key"},"So, What Exactly Is an API Key?"),(0,a.kt)("p",null,"According to Wikipedia's dictionary, an API key is: \u201cis a unique identifier used to authenticate a user, developer, or calling program to an API. However, they are typically used to authenticate a project with the API rather than a human user\u201d."),(0,a.kt)("p",null,"In simple words an API Key can be considered as a username and password that is generating to allow access to your exchange. These are created in your exchange account, for more information on how to correctly create your API Keys on your specific exchange, click here."),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"IMPORTANT")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You will have to give the API Key ",(0,a.kt)("strong",{parentName:"p"},'"View"')," and ",(0,a.kt)("strong",{parentName:"p"},'"Trading"')," rights. ",(0,a.kt)("strong",{parentName:"p"},'Please do not give "Withdrawal" rights'),". We don't need it!!"))),(0,a.kt)("h2",{id:"connect-bitexbot-to-your-exchange"},"Connect Bitexbot to Your Exchange"),(0,a.kt)("p",null,"To create an API Key:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the ",(0,a.kt)("strong",{parentName:"li"},"Bitexbot > API Keys")," page."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"API Keys")," page, click the ",(0,a.kt)("strong",{parentName:"li"},"Create API")," button."),(0,a.kt)("li",{parentName:"ol"},"You\u2019ll be prompted to enter information such as label, exchange, public and secret api keys."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")))}d.isMDXComponent=!0}}]);