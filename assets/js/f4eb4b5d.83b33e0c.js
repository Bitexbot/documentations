"use strict";(self.webpackChunkdocumentations=self.webpackChunkdocumentations||[]).push([[611],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return s}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=n.createContext({}),c=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):A(A({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(g.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,g=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),s=a,l=p["".concat(g,".").concat(s)]||p[s]||d[s]||o;return r?n.createElement(l,A(A({ref:t},u),{},{components:r})):n.createElement(l,A({ref:t},u))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,A=new Array(o);A[0]=p;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i.mdxType="string"==typeof e?e:a,A[1]=i;for(var c=2;c<o;c++)A[c]=r[c];return n.createElement.apply(null,A)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},525:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return g},metadata:function(){return c},toc:function(){return u},ImageWrapper:function(){return d},default:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),A=["components"],i={sidebar_position:5},g="Connect TradingView",c={unversionedId:"get-started/tradingview-guide",id:"get-started/tradingview-guide",isDocsHomePage:!1,title:"Connect TradingView",description:"With TradingView you can send signals to Bitexbot with TradingView Alerts, that will be automagically converted by Bitexbot into a trade on your exchange. Alerts can be sent with Webhook but you need to have a paid TradingView account.",source:"@site/docs/get-started/tradingview-guide.md",sourceDirName:"get-started",slug:"/get-started/tradingview-guide",permalink:"/get-started/tradingview-guide",editUrl:"https://github.com/bitexbot/documentations/edit/master/docs/get-started/tradingview-guide.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Webhook Message",permalink:"/get-started/webhook-message-guide"},next:{title:"Stop Loss and Take Profit",permalink:"/get-started/stop-loss-and-take-profit"}},u=[{value:"Setup Webhook Alert",id:"setup-webhook-alert",children:[]}],d=function(e){var t=e.children;return(0,o.kt)("div",{className:"image-wrapper"},t)},p={toc:u,ImageWrapper:d};function s(e){var t=e.components,i=(0,a.Z)(e,A);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-tradingview"},"Connect TradingView"),(0,o.kt)("p",null,"With TradingView you can send signals to Bitexbot with ",(0,o.kt)("strong",{parentName:"p"},"TradingView Alerts"),", that will be ",(0,o.kt)("strong",{parentName:"p"},"automagically converted by Bitexbot into a trade")," on your exchange. Alerts can be sent with ",(0,o.kt)("strong",{parentName:"p"},"Webhook")," but you need to have a paid TradingView account."),(0,o.kt)("h2",{id:"setup-webhook-alert"},"Setup Webhook Alert"),(0,o.kt)(d,{mdxType:"ImageWrapper"},(0,o.kt)("img",{src:r(541).Z,alt:"Alert button"})),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://www.tradingview.com/"},"TradingView"),' and click on the clock symbol in the upper right corner. You will now see many options you can choose from to generate a signal. It\'s necessary to select the option "WebHook URL". '),(0,o.kt)("p",null,"After selecting this option, a text field will appear in which you have to paste the ",(0,o.kt)("strong",{parentName:"p"},"Bitexbot WebHook URL")," ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.bitexbot.org/webhook/trade"),". Next paste the message that you have previously generated on the ",(0,o.kt)("a",{parentName:"p",href:"/get-started/webhook-message-guide"},(0,o.kt)("strong",{parentName:"a"},"Webhook Message")),' page and hit the "Save" button.'),(0,o.kt)(d,{mdxType:"ImageWrapper"},(0,o.kt)("img",{src:r(6363).Z,alt:"Webhook alert option"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information on how to correctly create the webhook message, ",(0,o.kt)("a",{parentName:"p",href:"/get-started/webhook-message-guide"},"click here"),"."))))}s.isMDXComponent=!0},541:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu0AAADACAIAAAA/ccrxAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAGdYAABnWARjRyu0AAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAACFKSURBVHhe7Z35txxlmcf5H+aH+W08Iso5nuOIqDMyR5aDDB5WhSECCoKK4GhYhMlgRBgQicSEJURWWQwqiBD2PRAkkAUCgRgWERLZAgnZQxIIlxvny33qvhRvd9etqq6u6vvcz+c8J+l+6+3qul3v+7yfqnq7ert/APQBL7+2SrHlna3JcxjNrFy1QXtzzbpNyXMYw7z+5lo1ho1vb0meQy0MDLxvSVUPkiK/4DHQF1iXw2N8gMdAAI9pBDwGoG6sy+ExPsBjIIDHNAIeA1A31uXwGB/gMRDAYxoBjwGoG+tyeIwP8BgI4DGNgMcA1I11OTzGB3gMBPCYRsBjAOrGuhwe4wM8BgJ4TCPgMQB1Y10Oj/EBHgMBPKYR8BiAurEuh8f4AI+BAB7TCHgMQN1Yl8NjfIDHQACPaQQ8BqBurMvhMT7AYyCAxzQCHgNQN9bl8Bgf4DEQwGMaAY8BqBvrcniMD/AYCOAxjYDHANSNdTk8xgd4DATwmEbAYwDqxrocHuMDPAYCeEwj4DEAdWNdDo/xAR4DATymEfAYgLqxLofH+ACPgQAe0wh4DEDdWJerymNeefW1y6645sCDDlccefRxk6dMmztvQbJsJPTau++ZpZfYC/VYJckyyAceAwE8phHwmP6CUWQsYF2ue49Ra5F//NM/b98acprstrR+/YbxJ0yIXmWh12ppUg9GAo+BAB7TCHhMH3HdH2/SKKJ/k+fgFOtyXXqMtRbFxz/52Z/+7OeXXn71o3MX6F89VonKt//UTpddcY3itNPPtrM1Cj1WyfU3zNTS8Fq9UOKifydPuXC3Pfez19519/3JO0EmeAwE8JhGwGOqofvj1zAs4THusS7XjceE1iILSYpSLFnyrGlKdqiOaiavSaF1WgVUJg94DATwmEbAY7pFud7GjN2/sn/bUSEPSMyYwrpcaY955dXXrLVcevnVSdEwWpS+WrTT53eVlEyecqHa1aNzF+hfPVaJykMd1W+9AmUNUg2bC0wjgsdAAI9pBDymK4J/hCghImElJV4LoxHrcqU95kfH/49aywFfPzx5Pky6NcpXsq1a7qI6dgVqqP60ZMEwdlbmyKOPS55DB/AYCOAxjYDHlCecvVfG12GrjS4KHeDmP4pFYsYg1uXKeYyaljWYSFPCaZgjjjo2e4ZvGq0tXEWSskTt1k7bJE+gA015TNGMQYapATymEfCYkgSJkb4kRUOZwg5wc15jQmICL7641GaY3njTrUmRX6zLlfOYR+cu0Kekzyp5PsSBBx3eTUO66+77Q7tNq4wpjt4xed4bRvuur99jtI+0x1tPyHWiaP3+RM1DjURNRQ0mKeo/euQxW7Y4EaONG99+772B5El14DFlUF5olRhD+pLzGx9dSsyatWvHHXa0rSFPnDzhtHfeeSd5cf+Bx+REjUqfkgwjeT5sGxKRDHVWG9NIltHS9FpTmfEnTEiKhp2pdRZOId5///1fTj7/jjvvTZ63gMcUQslHuqmPK6eXFK0f8fTiJYccetR+Bx76sU98Riux2GOv/dVOZj80p86UMmY95vXlb9x3/4P6N3k+apHEPPjQnLnzH6tcZfCYwoS8oB6lx0lpChUecdSx1uFPO/3spPSjdCkxAo9py8DAwILHnjj7nCnLlr2cFPUf1uXKeYysQp/S5CkX2tPQkLKlWfXTr2pLUJkgLuYx2a8akZdfeXXvfQ6eeNpZ725t//fW6TGrVq2ece31V159bfK8Cur0mJB8FHm8pGj9VtSb7OVtY98Dxi1e/ExStceMTY8xifHkMfpbKlcZPKYYI0pMwMYbhepHNbuXGKFRYeETizTSpMOGqy/usqf6fLRIo5SOjJMX9x9VDWaWdvs82VmX6+a6kkRZj9Wu7LzgiKdM8niMsJM9CpthY6/KNqQRuePOe7WSXb689/N//VtS9FFq8xh5vGxebzTlvOlJURXU5jHqwra7TTdH9JKi9dsSPObUiWc+PGeumt+dd913zi/P23WPfaxcKpN/PlY3jEGP8SQxRo9UBo8phs2mVF7IlhhDecQyiLKJ+r8VViIxnRgVXb0teExONGboD/zcF3bTY/OMPONTTo8RNl3dLpjatBs1Y1tUgs2bN4cJyL+dcV1S+lHwmDwEKdFnZbqZvd+L1u9E8Jho7+g46oJpl9iiSy67KintJWPNY/xJjNELlcFjChAkJn9ml+4ofVhvnzxl2mmnn22PeyExAo9x7zHCPqhLL7/aBqqgyBnk9xjzJIUJt1p7sqAUTy56+tP/+iVb4be/84N169YnC1LgMSOiXWz7Wn6plGLn5DK8pGj9DDp5jHj1tdf32f8QLarnmvWY8hivEmNUrjJ4TF5CWs8vMQEbRUL0SGJEdlcfHBx85NH53z1m/A477qxq//4fe5108sTHFy5SeVJjCMtcF1965bZt27Sek06ZaPWVB6++5vc6wlad115fPvX86Xvs9cElNq3nwosuXb16jb3cCIPTn268RW/x/R+caCv56r7/pRfq5Um9YTIGM6XI2Q/NUUa2rwFrPYcfccxNM2+zLQmENUTR9tPQaP2z/ztHW64KnVYo3nxzRfgz9e7ahvtnzVYnTBaXxbpcaY+xpmiRc3DK7zEifBNb0c1FJZvhq5Xo49Ve+NgnPqOmlSxLkbHrDR36337HPd847GibaqrdoX33wt9eVPtMagyRbvxqjWqTtn811j73/AtyFz1uje6dptceE3a3nSQT2V5StH42GR4TpuhFHlMozyjmzlsw68E/2/5VHHTIEb+5aoZWntQbJiO5qUvefMsd4R3VVb/3/fEPPPhwekqWzdPS0rbNTG1JPV1LO9l2TirxGN8SY1SrMnhMAZQXSiuIUoleriihQfnJ6OrK7CecdKqWtsZPfnrm229/mIUtvxw87kitLX3jV4sjjjr21tvvshEiHfseMC49tTYMThKX9DcdLLTaO+68Nz0OdRrMtNnf+nYyaToKbclbb61K6uX2mIGBAdmY5bso9Cek53BopLTEF0X3Z9Gty5X2GKExyTYmZ4Ms5DE27CnKjXwBGzk+/a9f0grtRIi0pnWSVqddbyxd+ndpkG1POtSoLvr15emBKjR+vV2YaK8Yf8IEGeoo9ZhWKREZXlK0/ohkeIws3648pj2maJ5R2EmdKLQfpT5J1SHC/k13Z/HSS8v2+urX068NMeHUM8LBydat7/3sjF+o0NqDFQZWr1krkdJSO35LSovTvccEidEw//jCJ0cMpSx1tO4PripBRrL8jTe1R556+i/RdrbGnEfm2V/avcrgMa7o1NV1hHHcD3+sRRq/dZyqdq/DnScXPX3qxDNNMk4/c1IYEkJ+Ufzw+FOeefZ55aaH58xNDydKHPfPmq1yHeladlCkR6kwOGn9Z5w1SdX0jk8vXvKrqReFYya9kVUWnQYz5ZTLrrhm1z320b8SC61EG68/wVaS3mwJiv5MHYSpXPUXPbVYlRUq1CKro7XpUM/+ZP1p+gRshVITM7MwaVGrnXjaWSrRds743fXLl7+p+N0fbthjr/3Tm10O63LdeMz64bvh5ZmnJQp5jLB5XRr/kuel0MelldgBrrVMjVivvvZ6sniYDI9RZRsptXe0Nu0CNTlt1fd/cKIKFWoVYdSxt5A2aR9phffe94Aqz5v/2Pz5j2vppk2b33hjxfEn/q/q/GLSVGsbCpXby0vTO4+xvaaIbLWTlxStn4cMj5n90BzrSto1VlIuz4TK2l8qDJUlwbJYqyxs/7YmN61Qq93vwEOvv2GmvaOyjXKOrSTdQpTEVPjFXfZUTrOSgN5Xi9R4lKOSolJ06TEazu0sRYmQFqxZuy5ZUe1s2bJF7hJtUv5YufKtZEWlwGNc0barmwqoXEPy3HkfGZkGBwfV+bVIHVjpxgpDfrlg2iUh6QiNIkoWKld+kVIkpUNzOU86ZaLKNeToEM0Kw+CklBryiCHDsEXpA6OMwUzHcMqPyZMhtEK5hSq3JjXb+NZyQz3NzjBNm35ZkBvj2ef+ahtgB2TKhnbO/OxzpqRPIWhj0p9JOazLdeMxNotFG5w8H4miHqMxT/W7uaikXSaD0Urs9FXYv603kum06218UnnU3oQW2fkVLdLQZYXW+NvWN0bX/JgfDd8fPJIS0dZLitbPScgGf7zhZitR0lA3l7uY+n/t4G9KEFVeOs888uh8KzG0Hh0jqaYWpQ+NOnmMUG+NTrGod8tWVf8bhx29ek1yiarTSRc9totK/z3+lPQZoxJ0fz4mXHDRvxrdpSYZ8fryN15auuzxhYuC/TzzzHOVzDgphPqgvbtCG2OniKJNbY0lS561l3R/+QyPcUXbrr5ixcqDxx3Z2nuNMN6oJ9vSkF/0wOoYYRiILoeLm2+9U+Xp9+00OAm9i7ZEi9IHRhn12/K3F1+yb35GG2kb3zbZhekadoYgKR0mbJUlvg0bNn7nez/SUx1f6nFSqSKsy3XjMUVHpqIeY1Nk8tdvJTr21TBj0+RbG0+nXa9suMuX91Z523voKVHKV9KvssavkOO2tnMxijzGpOTjn/xsq5SI1r1ftH5+QjZoG9px4epPVXlGyFPtbGj60Mj2b9uu3ZZ58x+L6oc+HmWA4DedvlKXn0rmx5SYO6Jq6i+mBRV+DygPQUfUEvLfd7jaOUB4TAUo6au/aXcmz8vS/XradvWH/vyICjudMtXofvY5U1QhDDCd8kuGx9hL0u/baXAyFj6xyM76SoCsJLu+jueee/6FSeeeZ1Nud9hx54MOOcKO2KL6rVsSCJfzO01wsQ/KXquUZweXijPOmrT6o7OYu8S6XDceY9+ktbvItKLBTH9pOj73hd1UP7+XFPWeiKCM6VNudpmp9UYynXa9BhUVtr0UJXTcrKNnVQhSYo2/UzsXo8Jj1g/9hoA2MuMrBWkvKVq/KCEbRKE+KCNJ94uq8oxhh0bKEsoVVmL7t23XFgNDN8CU/dhZop0+v+shhx7Vun5Ztdxaq5VnJ0VDW6KSjFsc5acSjxHlpsGuWbtOf9eQUjyZFPUYOxOjTQ2nRfNQrcQIPKYClCDUW5Qskudl6X49bbu6FY4YdXpMWBoOgDLqr123TiahRW0jqt+6JYHwFtkRXqsBOHxzR1lbj//+8ittD/SLYl2uG4+xuyx28gyzkNaozWPCyZIwc0KE8yuRR3ba9XblaMSIPKbtrjdGhceYoSoyfmk87SVF6xclZIMrr75Wj7Uq0xEN/HffMyupNIR9/iNGTo8JS6VHVpKxfzUchilTrZFefzgvGK5YqUfbRaW0c5emKo8R5VRmy5Yt9qqXli5LinqGtKmEjlQuMQKPqYA+95ic48GEU8949913Vb9TfumFx4QRpVN9ZRZtmMoVSlWzH5rz1lurFLfefpeOq1rrt25JIPxd2bHnfx4Yvnj17tatM2++Pdy6VLl70rnndZ/srMv17rrSK6++pgqtYVOY82BryF8/wk69RHshnEGJzuq33fWhsY0YF0y7xF7StvGnGRUeI64b/s6RRtak6KNo12hp2PtF6xci9Jqwd1avXmNXiMLMGKOqPGO0vm+n/atsYF9PU/c8deKZeqG2cPnyN2dc+8EUOkW0frvBdDjPFy4qpZtfaSr0GFFOZcI5kl5fXXp84SK90VNP/yV5noNeSIzAYyqgzz3Gzs9n5PeITvmlFx4z4vkYSzrKUL+5akZ6Zm6n+q1bErBTyq0vGRH9sffPmh2+25n+zkU5rMvVOT+mTsJMiNZ2Yk1RezN9Vr/trgyXIcYddvSalluJtEUvV/22u94YLR4jlgzfCvzIo49r/Upa694vWj8/IRuk986cR+bZVd2p508PvbKqPGOEpdnnY8KUl51abuXQaf3hZKHNu9JSNcj8m51NtR4jgspoFydFOTDDKHStpyjaML1FIVsqd/4mD3hMBXTyj6LzXXrkMffcO0uFGfMGIjr1/wo9xqbgKbRtVtK2vo7b7GRM62TbTutv3ZJAuP1ouRvArF23zr6Wlf+T7IR1uW48RmhL7NcJqsJm1bSdKFoIm+GrzcuItl/Rj3aldpMKO82PaaVt408zijxGBDVp/YG2tl5StH5OQjZI753wbSDZQ8gSVeUZ44833Bytre3+lTQf9q3vqfzMn5+bPs4RndYfJm+pMWzevNkuKmX8jmkhKvcYIWOQlxQ6uWKnPcIU7F7w0tJleotCJ2OEWmnlEiPwmAro5B9FvaRHHhPGiQumXRIGjww69f+qPCYkwRHrZww8ndZvW6JxNEwPDIS1fevbx65atTopLULQrzA9uRzW5br0GPsCufJC8rxrupwTY4RvmmRH+vvSGbvSfKi1CbVF1VQ53agiQgMIlzYqoUceI7RzbS9HatLJS4rWz0PIBtFeWLr073ZW47vHjLerhGE/dplnhEbuHx7/wSXI9Lem2+7fcH+E1kaSsX5T7V2+vLc+Gbuo1PY7cSXohceUIJz5SJ73ADvlU8MsnDzgMRXQ5x6TPnia88i8aKaqlkaDeqf+X4nH6N21DZZt0xdowpeJ0sdV4XxMNAVPFaZffEXbQS58Eyo9wzQQ7twV3RrH0OcQ3lpok6LfT7BvZCjCue5yWJfr0mNsDnKX2pGmEo8Jk3k1vOlTUmOOIkzZDiNH210vwmCm8fK5519ISodRC0xPshFtG3+a0JwOHnfkihUrk9Ku6Z3HCOmI9aPPfWG34Kz6GFXS1kuK1h+RkA1aO/KfbrzFFtm95rTvKskzg4ODWrP10/Rd7ELvm/Xgn61EhPMx6TN8QukiTNKP1i/Cpc9Dv/ldvVH+c34j0iceI+rxGAlT8rxR8JgK6HOPEdFUOLuP7fLlb955132HH3GMEkH6doqd8ks5jwl3YtU7pu/sqcEpfbOycByvpdOmX6axTelM5WF+jMa/Zcte1krmL1iY/m5CmGFjhAyl9/3D9TfqD9dx/62332W3bVUy1crthTqMu+feWapgdxFV1tv533ZX/rX1KHtefOmVO+y481lnT7abEc+b/5h9kzN9LqEc1uW69Bi7FV6Fl5a69xj70Ozj7XSAG0QnuGmnXS/UQuygXzviV1Mvsh2hD//6G2bud+ChJ50yMW23I3qMsOakCDeqVndb9NTiZHEpeuoxIqjJ9p/aydQk20uK1s8mZIPIY0QQTe1Qu0tQuTyz11e/rgrWE7WpoXdrVSpMaqfmteivu/e+B+xCc2hyaiE6ttF7aSUSHTtJY9F61JFuqIroXpfd0D8eM3f+Y/IM7aPkedXgMU3Rrcd0mu9S1GOKric/GalcBxw2wLeGhvz0m4b8ogdJ0RDlPKZtaFHrtdswaCnC7E4NVHYMnQ5lyQumXaKBTY+VHJW8bA3G3HkL7HxPiPTxlrZ86vnTtYZ0BQsVXvTry+06dLgPXhRKlzffckc4RiyHdbkuPUZYg6nqlEz3HhMkMuOER7CW9F0Q2+56Y/HiZ/Y9YJwtikIvSbfzPB7TtjmVmy8V6LXHCKmJ+YGpiXqrHmd4SdH6GWR4jAg3yA5OWSLPtA0dM6R/lECo090087bQc8O15iBP6VA/1eGTTWg76eSJrXfpDbP+FV2eXk3TPx7Ta8/AY5qiW4/p5Bm9Ls9PdirXEKLjnuhXYTUqR85ercdcceWM31w1w/405aBOP2ZrhJ/RTg9meq9rfvsHG+eUCjUKLnnmOSU15SZph0qi2TNapMFPf6alPK1NR43prxCrgtag9ei1Yau0KtVJC8qqVatnXHv9N4Z/ZlmV2/7Mcgmsy3XvMWoq2jCNVRq3kqIu6N5jwgxfHexmfErhpEi6Wttdb2iA1JiU3hHjT5gw+6E5USPM4zFCa7vsimts16sjfO3gb/7+uj91czheg8cY4ZcH7IH6VLKgA0XrtyXbY/S5Tb/4Ci3VrlEmscKieUaLbNfrsV5yeIcfnxeDg4MaPk/88U+0znSvX7tuXfh5c61n0rnnWX9fufKtM86apMqtG682Zudsqr3IiMc0Ah5TgE6e0evy0UjwmLbpb4xjXa57jxE2CWD3r+yfPO+C7j1mbFKbx4igJgqli6S0M0Xr10mn46V6CEdl0cSaLukfj5E1SjJ6dwuZXq+/EHhMAarykqLloxE8JgPrcpV4zPr1G+zbtp3ugZYfPKYcdXqMsFs5K5QukqJMitavjWY9xi4cf+wTn6n23fvHY8YUeEwBqvKSouWjETwmA+tylXiMWDJ84xCpTJ4LTK2/vmRhv8Gkf6Nyi+7vK+OVmj1G2A18lS6S5yNRtH49NOgx4StR6e91VwIe0wh4TAGq8pKi5aMRPCYD63JVeYwIKrP7V/Yf8ccE7LxL0eA8TSfq9xghNVG6SJ7koGj9GqjfY7Zt27Zhw8bwrUnFTTNv6366Wxo8phHwmAJU5SVFy0cjeEwG1uUq9BghlbFvjmz/qZ0mT5mWcWJGoqM21ho2l0L/RuUWI+rRmKURjxFFJ3dXMhm8Qur3mDAnRrHDjjtffc3v0/crqgQ8phHwmALgMfnBYzKwLletxwgNVOFci2xm/AkT7r5nVv7Ri/kx5WjKY0Y7TXnMHnvtP/X86dEtLqsCj2kEPKYAOuSVZLQODL0uB2dYl6vcYwy1ouh2GnKaPHNc8Jhy4DEQwGMaAY8BqBvrcj3yGEM2bFMi0kKT7Sh4TDnwGAjgMY2AxwDUjXW5nnpMhJ3qy57jgseUA4+BAB7TCHgMQN1Yl6vTY/KAx5QDj4EAHtMIeAxA3ViXw2N8gMdAAI9pBDwGoG6sy+ExPsBjIIDHNAIeA1A31uX6zWPsvjLcJ6YoeAwE8JhGwGMA6sa6XL95DJQDj4EAHtMIeAxA3ViXw2N8gMdAAI9pBDwGoG6sy+ExPsBjIIDHNAIeA1A31uXwGB/gMRDAYxoBjwGoG+tyeIwP8BgI4DGNgMcA1I11OTzGB3gMBPCYRsBjAOrGuhwe4wM8BgJ4TCPgMQB1Y11u7HjMwPvbkkcewWMggMc0Ah4DUDfW5caOx8x8dH3yyCN4DATwmEbAYwDqxrrcGPGYTe+8/y/nLl+zYSB57g48BgJ4TCPgMQB1Y11ujHjMwr9uksc8sGhj8twdeAwE8JhGwGMA6sa63BjxmKm3rpbHnPy7lclzd+AxEMBjGgGPAagb63JjwWPsopKF10tLeAwE8JhGwGMA6sa63FjwGLuoZOH10hIeAwE8phHwGIC6sS43FjzGLipZeL20hMdAAI9phLHlMWpeBNF4WJeLCv3FitUfnoyxeOWNt6M6DiJ4TFROjMEIHkPUHGMkqSq2U8YhCKKeuO/xD0/GWNz08KqoDkEQBJE/PnJdaXDbtvVvv7dxk9vbWsCYZXBwqG1vbrhtpy8qWTj+1hLUQJ80bIBqKdSw8RgYE/RDuk9/Uykdjm+IB70GjwGX4DEAMf2Q7tPfVEqH4xviQa/BY8AleAxATD+k+9aLShZcWoLS4DHgEjwGIKbxdN/popIFl5agHHgMuASPAYhpPN13uqhkwaUlKAceAy7BYwBiGk/3nS4qWXBpCcqBx4BL8BiAmGbTffZFJQsuLUEJ8BhwCR4DENNsus++qGTBpSUoAR4DLsFjAGKaTffZF5UsuLQEJcBjwCV4DEBMg+k+z0UlCy4tQVHwGHAJHgMQ02C6z3NRyYJLS1AUPAZcgscAxDSY7vNcVLLg0hIUBY8Bl+AxADFNpfv8F5UsuLQEhcBjwCV4DEBMU+leXvLAoo3pSJ+e0eNo6fJVW5NXAuQAjwGX4DEAMf2T7iUrwWP0OCkFKAUeAy7BYwBi8BhwCR4DLsFjAGLwGHAJHgMuwWMAYvAYcAkeAy7BYwBi8BhwCR4DLsFjAGLwGHAJHgMuwWMAYvAYcAkeAy7BYwBi8BhwCR4DLsFjAGLwGHAJHgMuwWMAYvAYcAkeAy7BYwBi8BhwCR4DLsFjAGLwGHAJHgMuwWMAYvAYcAkeAy7BYwBi8BhwCR4DLsFjAGLwGHAJHgMuwWMAYvAYcAkeAy7BYwBi8BhwCR4DLsFjAGLwGHAJHgMuwWMAYvAYcAkeAy4p5jED728LsXVgUK/csOm9dCFBOIit7/VL277viQ89Ro+jpQRRKPqnYRNEhWENe+Omgai8bWynqgRB1Ba3zV8fPEaPo6UEQRBEodhu05aBdFhpVEgQDkINe0MftO07F3zoMXocLSWIotEnDZsgqo0PGvamXA2b+TEwJmB+DLiE+THgkmLzY5L/h8BjwCt4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAxeAy4BI8Bl+AxADF4DLgEjwGX4DEAMXgMuASPAZfgMQAx/ZPuX1nxrvTFQo+TUoBS4DHgEjwGIIZ0Dy6hYYNL8BiAGNI9uISGDS7BYwBiSPfgEho2uASPAYgh3YNLaNjgEjwGIIZ0Dy6hYYNL8BiAGNI9uISGDS7BYwBiSPfgEho2uASPAYgh3YNLaNjgEjwGIIZ0Dy6hYYNL8BiAGNI9uISGDS7BYwBiSPfgEho2uASPAYgh3YNLaNjgEjwGIIZ0Dy6hYYNL8BiAGNI9uISGDS7BYwBiSPfgEho2uASPAYgh3YNLaNjgEjwGIIZ0Dy6hYYNL8BiAGNI9uISGDS7BYwBiSPfgEho2uASPAYgh3YNLaNjgEjwGIIZ0Dy6hYYNL8BiAGNI9uISGDS7BYwBiSPfgEho2uASPAYgh3YNLaNjgEjwGIIZ0Dy6hYYNLCjTsf/zj/wEyCYLDGLiFCAAAAABJRU5ErkJggg=="},6363:function(e,t,r){t.Z=r.p+"assets/images/tv-webhook-field-199b7edf13022db93b712770bef9d4cc.png"}}]);