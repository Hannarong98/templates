(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[320],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7294),r=n(944),i=n(6010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,p=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,m=e.groupId,d=e.className,f=(0,r.Z)(),v=f.tabGroupChoices,h=f.setTabGroupChoices,g=(0,a.useState)(c),k=g[0],y=g[1],b=a.Children.toArray(e.children),N=[];if(null!=m){var w=v[m];null!=w&&w!==k&&u.some((function(e){return e.value===w}))&&y(w)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),a=u[n].value;y(a),null!=m&&(h(m,a),setTimeout((function(){var e,n,a,r,i,l,s,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,s=l.innerHeight,p=l.innerWidth,n>=0&&i<=p&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case p:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},3934:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return f}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=n(1395),o=n(8215),s=["components"],p={title:"Installation",sidebar_position:1},c=void 0,u={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"Prerequisites",source:"@site/cra/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/cra/getting-started/installation",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/cra/getting-started/installation.mdx",version:"current",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1},sidebar:"cra",previous:{title:"Introduction",permalink:"/cra/"},next:{title:"Project Overview",permalink:"/cra/getting-started/project-overview"}},m=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Intility NPM Registry (optional)",id:"intility-npm-registry-optional",children:[]}]},{value:"Create App",id:"create-app",children:[]},{value:"Available Scripts",id:"available-scripts",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Some experience with React"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"node.js")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code")," with the following plugins",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=swellaby.node-pack"},"Node Extension Pack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"Prettier")))),(0,i.kt)("li",{parentName:"ul"},"Set up the Intility NPM registry (optional)")),(0,i.kt)("h3",{id:"intility-npm-registry-optional"},"Intility NPM Registry (optional)"),(0,i.kt)("p",null,"The Intility NPM registry (includes access to ",(0,i.kt)("inlineCode",{parentName:"p"},"@intility/*")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@fortawesome/*")," packages) can be configured by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm config set registry https://artifactory.int.intility.no/artifactory/api/npm/npm/\n")),(0,i.kt)("p",null,"For other alternatives, see the ",(0,i.kt)("a",{parentName:"p",href:"https://developers.intility.no/guides/tutorials/npm"},"guide on developers.intility.no")," (login required)."),(0,i.kt)("h2",{id:"create-app"},"Create App"),(0,i.kt)("p",null,"Select the version you want. By default, TypeScript and an authentication sample is included."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"default git branch")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"create-react-app automatically creates a git repo. If you want the default branch to be something other than ",(0,i.kt)("inlineCode",{parentName:"p"},"master"),", you need to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"init.defaultBranch")," config in git:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"git config --global init.defaultBranch main"),(0,i.kt)("br",{parentName:"p"}),"\n","You need git version 2.28.0 or higher to use this option."))),(0,i.kt)(l.Z,{groupId:"typed",defaultValue:"typed",values:[{label:"TypeScript",value:"typed"},{label:"JavaScript",value:"plain"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"typed",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'npx create-react-app my-app --template "@intility"\n'))),(0,i.kt)(o.Z,{value:"plain",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'npx create-react-app my-app --template "@intility/js"\n')))),(0,i.kt)("p",null,"Run it in your terminal, and then open the Visual Studio Code Workspace with the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"code my-app/app.code-workspace\n")),(0,i.kt)("p",null,"You can now start coding by running the start script."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,i.kt)("h2",{id:"available-scripts"},"Available Scripts"),(0,i.kt)("p",null,"There are 5 scripts included by default, click on each one for more information."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://create-react-app.dev/docs/available-scripts#npm-start"},(0,i.kt)("inlineCode",{parentName:"a"},"npm start"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://create-react-app.dev/docs/available-scripts#npm-test"},(0,i.kt)("inlineCode",{parentName:"a"},"npm test"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://create-react-app.dev/docs/available-scripts#npm-run-build"},(0,i.kt)("inlineCode",{parentName:"a"},"npm run build"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://create-react-app.dev/docs/available-scripts#npm-run-eject"},(0,i.kt)("inlineCode",{parentName:"a"},"npm run eject"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cra/getting-started/included-dependencies#source-map-explorer"},(0,i.kt)("inlineCode",{parentName:"a"},"npm run analyze")))))}f.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);