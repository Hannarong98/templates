"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[790],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9680:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={title:"Sentry",sidebar_position:6},p=void 0,l={unversionedId:"configuration/sentry",id:"configuration/sentry",isDocsHomePage:!1,title:"Sentry",description:"The project comes included with error reporting to Sentry, and a pipeline job to upload sourcemaps and create releases.",source:"@site/cra/configuration/sentry.mdx",sourceDirName:"configuration",slug:"/configuration/sentry",permalink:"/cra/configuration/sentry",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/cra/configuration/sentry.mdx",version:"current",sidebarPosition:6,frontMatter:{title:"Sentry",sidebar_position:6},sidebar:"cra",previous:{title:"SonarQube",permalink:"/cra/configuration/sonarqube"},next:{title:"Deploy",permalink:"/cra/configuration/deploy"}},s=[{value:"Create Project",id:"create-project",children:[]},{value:"Acquire Token",id:"acquire-token",children:[]}],u={toc:s};function d(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The project comes included with error reporting to Sentry, and a pipeline job to upload sourcemaps and create releases.\nTo set this up, we'll need to create a project in Sentry, the project DSN and an auth token."),(0,o.kt)("h3",{id:"create-project"},"Create Project"),(0,o.kt)("p",null,"Head over to the ",(0,o.kt)("a",{parentName:"p",href:"https://sentry.intility.no/organizations/intility/projects/new/"},"Create a new Project page in Sentry"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sentry Platform Select",src:n(4611).Z}),(0,o.kt)("br",{parentName:"p"}),"\n","Under platform, select React."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sentry New Project Name",src:n(7504).Z}),(0,o.kt)("br",{parentName:"p"}),"\n","For the project name, use the project slug from GitLab.\nSelect a fitting team, or create a new one, and hit Create."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you use something other than the GitLab project slug\nyou'll need to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"SENTRY_PROJECT")," variable in the top of the .gitlab-ci.yml file.  "))),(0,o.kt)("p",null,"You'll be taken to a Configure React page.\nIn the code example under Connecting the SDK to Sentry, copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"dsn")," value, and ",(0,o.kt)("a",{parentName:"p",href:"/cra/configuration/gitlab#adding-cicd-variables"},"add it to GitLab CI/CD variables")," with the key ",(0,o.kt)("inlineCode",{parentName:"p"},"SENTRY_DSN"),"."),(0,o.kt)("h3",{id:"acquire-token"},"Acquire Token"),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://sentry.intility.no/settings/account/api/auth-tokens/"},"Auth Token section of your Account Settings"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create Sentry Token",src:n(6881).Z}),"\nThe needed scopes are ",(0,o.kt)("inlineCode",{parentName:"p"},"project:read"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"project:releases")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"org:read"),"."),(0,o.kt)("p",null,"Create it, copy the token and ",(0,o.kt)("a",{parentName:"p",href:"/cra/configuration/gitlab#adding-cicd-variables"},"add it to GitLab CI/CD variables")," with the key ",(0,o.kt)("inlineCode",{parentName:"p"},"SENTRY_AUTH_TOKEN"),"."))}d.isMDXComponent=!0},7504:function(e,t,n){t.Z=n.p+"assets/images/sentry-new-name-e4d56201bb4d182ffa0ac979abcd2e2c.png"},4611:function(e,t,n){t.Z=n.p+"assets/images/sentry-new-platform-a15be14f3343e8fe9618d581dde3f01f.png"},6881:function(e,t,n){t.Z=n.p+"assets/images/sentry-token-3104b9071fe4ba5d3189aef0eee173f5.png"}}]);