"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9300],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return v}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),v=o,d=m["".concat(l,".").concat(v)]||m[v]||u[v]||i;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},940:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],p={title:"TypeScript - Environment Variables",sidebar_label:"Environment Variables",slug:"/TypeScript/environment-variables",sidebar_position:3},l=void 0,s={unversionedId:"TypeScript/environmentVariables",id:"TypeScript/environmentVariables",title:"TypeScript - Environment Variables",description:"The most usual way to store your secrets is by using environment variables. In production these is best applied to the host OS running the server. But in development mode we can use an dependency to load environment variables from a .env file.",source:"@site/express/TypeScript/environmentVariables.mdx",sourceDirName:"TypeScript",slug:"/TypeScript/environment-variables",permalink:"/express/TypeScript/environment-variables",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/express/TypeScript/environmentVariables.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"TypeScript - Environment Variables",sidebar_label:"Environment Variables",slug:"/TypeScript/environment-variables",sidebar_position:3},sidebar:"express",previous:{title:"Development Environment",permalink:"/express/TypeScript/development-environment"},next:{title:"ESLint",permalink:"/express/TypeScript/ESLint"}},c=[],u={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The most usual way to store your secrets is by using environment variables. In production these is best applied to the host OS running the server. But in development mode we can use an dependency to load environment variables from a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/dotenv"},"dotenv"),": Loads environment variables from a ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file into ",(0,i.kt)("inlineCode",{parentName:"li"},"process.env"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm i dotenv")),(0,i.kt)("p",null,"Next create a file named ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," in the root level of your project. The values stored in this file need to follow a given syntax ",(0,i.kt)("inlineCode",{parentName:"p"},"<KEY>=<VALUE>"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"# Set the node environment to be development. Use production instead in your production environment.\nNODE_ENV=development\n\n# Here you can add your own secrets\n")),(0,i.kt)("p",null,"Then at the very top of the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")," file, before all import statements insert the following code snippet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import dotenv from "dotenv"\ndotenv.config()\n')),(0,i.kt)("p",null,"Now you can access environment variables by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.<KEY>")," value in Node."))}m.isMDXComponent=!0}}]);