webpackJsonp([0x67ef26645b2a,60335399758886],{122:function(e,t){e.exports={layoutContext:{}}},259:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o=a(2),l=r(o),s=a(262),i=r(s),u=a(122),p=r(u);t.default=function(e){return l.default.createElement(i.default,n({},e,p.default))},e.exports=t.default},49:function(e,t){(function(t){"use strict";e.exports={siteMetadata:{title:"Nathan Birrell",author:"Nathan Birrell",description:"Software engineer, primarily focussed on Javascript web application development.",siteUrl:"https://nathanbirrell.me"},plugins:[{resolve:"gatsby-source-filesystem",options:{path:t+"/src/pages",name:"pages"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:590}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},"gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA-41066869-1"}},"gatsby-plugin-feed","gatsby-plugin-offline","gatsby-plugin-sitemap","gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-typography",options:{pathToConfigModule:"src/utils/typography"}}]}}).call(t,"/")},350:function(e,t){},351:function(e,t){},262:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(2),i=r(s),u=a(42),p=r(u),f=a(350),c=(r(f),a(351)),y=(r(c),a(23)),d=a(49),m=r(d),g=m.default.siteMetadata.title,h={paddingLeft:(0,y.rhythm)(.25)},b=function(e){function t(){return n(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=e.children,r=void 0,n="/";return r=t.pathname===n?i.default.createElement("h1",{style:{marginBottom:(0,y.rhythm)(1.5),marginTop:0}},i.default.createElement(p.default,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},g)):i.default.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},i.default.createElement("h3",{style:{marginTop:0}},i.default.createElement(p.default,{to:"/"},g)),i.default.createElement("nav",null,i.default.createElement(p.default,{to:"/",style:h},"Home")," ",i.default.createElement(p.default,{to:"/resume",style:h},"CV"))),i.default.createElement("div",{className:"markdown-body",style:{marginLeft:"auto",marginRight:"auto",maxWidth:(0,y.rhythm)(24),padding:(0,y.rhythm)(1.5)+" "+(0,y.rhythm)(.75)}},r,a())},t}(i.default.Component);t.default=b,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-f95c0c0c76e4f9f4af41.js.map