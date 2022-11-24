(this.webpackJsonpfrosty=this.webpackJsonpfrosty||[]).push([[14],{1488:function(e,t,r){"use strict";r.r(t),r.d(t,"NoEthereumProviderError",(function(){return v})),r.d(t,"ProvidedConnector",(function(){return m})),r.d(t,"UserRejectedRequestError",(function(){return l}));var n=r(741);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function s(e,t,r){return(s=a()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&u(o,r.prototype),o}).apply(null,arguments)}function h(e){var t="function"===typeof Map?new Map:void 0;return(h=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return s(e,arguments,c(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function f(e,t){try{var r=e()}catch(n){return t(n)}return r&&r.then?r.then(void 0,t):r}function p(e){return e.hasOwnProperty("result")?e.result:e}var v=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="No Ethereum provider was passed to the constructor or found on window.ethereum.",t}return i(t,e),t}(h(Error)),l=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="The user rejected the request.",t}return i(t,e),t}(h(Error)),m=function(e){function t(t){var r,n=t.provider,o=void 0===n?window.ethereum:n,i=t.supportedChainIds;return(r=e.call(this,{supportedChainIds:i})||this).provider=o,r.handleNetworkChanged=r.handleNetworkChanged.bind(d(r)),r.handleChainChanged=r.handleChainChanged.bind(d(r)),r.handleAccountsChanged=r.handleAccountsChanged.bind(d(r)),r.handleClose=r.handleClose.bind(d(r)),r}i(t,e);var r=t.prototype;return r.handleChainChanged=function(e){this.emitUpdate({chainId:e,provider:this.provider})},r.handleAccountsChanged=function(e){0===e.length?this.emitDeactivate():this.emitUpdate({account:e[0]})},r.handleClose=function(e,t){this.emitDeactivate()},r.handleNetworkChanged=function(e){this.emitUpdate({chainId:e,provider:this.provider})},r.activate=function(){try{var e,t=function(t){if(r)return t;function i(){return o({provider:n.provider},e?{account:e}:{})}var c=function(){if(!e)return Promise.resolve(n.provider.enable().then((function(e){return e&&p(e)[0]}))).then((function(t){e=t}))}();return c&&c.then?c.then(i):i()},r=!1,n=this;if(!n.provider)throw new v;n.provider.on&&(n.provider.on("chainChanged",n.handleChainChanged),n.provider.on("accountsChanged",n.handleAccountsChanged),n.provider.on("close",n.handleClose),n.provider.on("networkChanged",n.handleNetworkChanged)),n.provider.isMetaMask&&(n.provider.autoRefreshOnNetworkChange=!1);var i=f((function(){return Promise.resolve(n.provider.send("eth_requestAccounts").then((function(e){return p(e)[0]}))).then((function(t){e=t}))}),(function(e){if(4001===e.code)throw new l}));return Promise.resolve(i&&i.then?i.then(t):t(i))}catch(c){return Promise.reject(c)}},r.getProvider=function(){try{return Promise.resolve(this.provider)}catch(e){return Promise.reject(e)}},r.getChainId=function(){try{var e,t=function(){function t(){if(!e)try{e=p(r.provider.send({method:"net_version"}))}catch(t){}return e||(e=r.provider.isDapper?p(r.provider.cachedResults.net_version):r.provider.chainId||r.provider.networkVersion||r.provider._chainId),e}var n=function(){if(!e){var t=f((function(){return Promise.resolve(r.provider.send("net_version").then(p)).then((function(t){e=t}))}),(function(){}));if(t&&t.then)return t.then((function(){}))}}();return n&&n.then?n.then(t):t()},r=this;if(!r.provider)throw new v;var n=f((function(){return Promise.resolve(r.provider.send("eth_chainId").then(p)).then((function(t){e=t}))}),(function(){}));return Promise.resolve(n&&n.then?n.then(t):t())}catch(o){return Promise.reject(o)}},r.getAccount=function(){try{var e,t=function(){function t(){return e||(e=p(r.provider.send({method:"eth_accounts"}))[0]),e}var n=function(){if(!e){var t=f((function(){return Promise.resolve(r.provider.enable().then((function(e){return p(e)[0]}))).then((function(t){e=t}))}),(function(){}));if(t&&t.then)return t.then((function(){}))}}();return n&&n.then?n.then(t):t()},r=this;if(!r.provider)throw new v;var n=f((function(){return Promise.resolve(r.provider.send("eth_accounts").then((function(e){return p(e)[0]}))).then((function(t){e=t}))}),(function(){}));return Promise.resolve(n&&n.then?n.then(t):t())}catch(o){return Promise.reject(o)}},r.deactivate=function(){this.provider&&this.provider.removeListener&&(this.provider.removeListener("chainChanged",this.handleChainChanged),this.provider.removeListener("accountsChanged",this.handleAccountsChanged),this.provider.removeListener("close",this.handleClose),this.provider.removeListener("networkChanged",this.handleNetworkChanged))},r.isAuthorized=function(){try{var e=this;return e.provider?Promise.resolve(f((function(){return Promise.resolve(e.provider.send("eth_accounts").then((function(e){return p(e).length>0})))}),(function(){return!1}))):Promise.resolve(!1)}catch(t){return Promise.reject(t)}},t}(n.a)},741:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(51),o=r(71);var i=function(e){var t,r;function n(t){var r,n=(void 0===t?{}:t).supportedChainIds;return(r=e.call(this)||this).supportedChainIds=n,r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var i=n.prototype;return i.emitUpdate=function(e){this.emit(o.a.Update,e)},i.emitError=function(e){this.emit(o.a.Error,e)},i.emitDeactivate=function(){this.emit(o.a.Deactivate)},n}(n.EventEmitter)}}]);
//# sourceMappingURL=14.81aa9cd8.chunk.js.map