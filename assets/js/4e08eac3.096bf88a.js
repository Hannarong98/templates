(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[605],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,h=s["".concat(p,".").concat(m)]||s[m]||u[m]||a;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},848:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),l=["components"],o={title:".gitlab-ci.yml Overview",sidebar_position:3},p=void 0,c={unversionedId:"setup/gitlab-ci",id:"setup/gitlab-ci",isDocsHomePage:!1,title:".gitlab-ci.yml Overview",description:"The template comes packed with a pipeline, that builds, tests, analyzes and deploys your API.",source:"@site/dotnet/setup/gitlab-ci.mdx",sourceDirName:"setup",slug:"/setup/gitlab-ci",permalink:"/dotnet/setup/gitlab-ci",editUrl:"https://github.com/Intility/templates/tree/main/docusaurus/dotnet/setup/gitlab-ci.mdx",version:"current",sidebarPosition:3,frontMatter:{title:".gitlab-ci.yml Overview",sidebar_position:3},sidebar:"cra",previous:{title:"AAD Authorization",permalink:"/dotnet/setup/authorization"},next:{title:"SonarQube",permalink:"/dotnet/setup/sonarqube"}},d=[{value:"Jobs",id:"jobs",children:[{value:"<code>build</code>",id:"build",children:[]},{value:"<code>test</code>",id:"test",children:[]},{value:"<code>analyze</code>",id:"analyze",children:[]},{value:"<code>image:dev</code>",id:"imagedev",children:[]},{value:"<code>deploy:dev</code>",id:"deploydev",children:[]}]},{value:"Debugging the pipeline",id:"debugging-the-pipeline",children:[{value:"Paths",id:"paths",children:[]}]}],u={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The template comes packed with a pipeline, that builds, tests, analyzes and deploys your API."),(0,a.kt)("h2",{id:"jobs"},"Jobs"),(0,a.kt)("h3",{id:"build"},(0,a.kt)("inlineCode",{parentName:"h3"},"build")),(0,a.kt)("p",null,"Builds the project, and creates a build artifact for later stages to use."),(0,a.kt)("h3",{id:"test"},(0,a.kt)("inlineCode",{parentName:"h3"},"test")),(0,a.kt)("p",null,"Runs the tests in the project.\nRuns parallel with ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,a.kt)("h3",{id:"analyze"},(0,a.kt)("inlineCode",{parentName:"h3"},"analyze")),(0,a.kt)("p",null,"Analyzes the project with sonar-scanner.\nRuns parallel with ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,a.kt)("h3",{id:"imagedev"},(0,a.kt)("inlineCode",{parentName:"h3"},"image:dev")),(0,a.kt)("p",null,"Uses the artifact from the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," step, and creates and publish a docker image with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile.CI")," file using kaniko.\nRuns once the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," job has finished, and only in the ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch."),(0,a.kt)("h3",{id:"deploydev"},(0,a.kt)("inlineCode",{parentName:"h3"},"deploy:dev")),(0,a.kt)("p",null,"Deploys the application to OpenShift using the Helm chart.\nRuns once the ",(0,a.kt)("inlineCode",{parentName:"p"},"image:dev")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," jobs have succeeded, and only in the ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch."),(0,a.kt)("h2",{id:"debugging-the-pipeline"},"Debugging the pipeline"),(0,a.kt)("h3",{id:"paths"},"Paths"),(0,a.kt)("p",null,"Ensure the paths used are right.\nIn the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," step, we need to ensure that we are working from the right folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title='.gitlab-ci.yml'",title:"'.gitlab-ci.yml'"},"build:\n  script:\n    - dotnet restore\n    - cd YOUR_PROJECT_FOLDER # cd to the project folder\n    - dotnet publish -o build\n  artifacts:\n    paths:\n      - YOUR_PROJECT_FOLDER/build # the build in the project folder\n")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"image:dev"),", we need the ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," parameter to be set to the project folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title='.gitlab-ci.yml'",title:"'.gitlab-ci.yml'"},"image:dev:\n  script:\n    - echo ...\n    - /kaniko/executor\n      --context $CI_PROJECT_DIR/YOUR_PROJECT_FOLDER # sets the context to your project folder\n")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy:dev"),", ensure the path to the chart is right."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title='.gitlab-ci.yml'",title:"'.gitlab-ci.yml'"},"deploy:dev:\n  script:\n    - oc login $OPENSHIFT_SERVER --token=$OPENSHIFT_TOKEN\n    - helm upgrade\n      --install $CI_ENVIRONMENT_SLUG ./YOUR_PROJECT_FOLDER/chart # path to chart\n")))}s.isMDXComponent=!0}}]);