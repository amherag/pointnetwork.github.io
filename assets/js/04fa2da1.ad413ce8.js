(self.webpackChunk=self.webpackChunk||[]).push([[551],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(k,l(l({ref:t},p),{},{components:n})):o.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3343:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),l=["components"],a={id:"build-build-with-point-network",title:"Point Network Builders Starter's Guide",sidebar_label:"Point Network Builders Starter's Guide",slug:"../build-build-with-point-network"},s=void 0,c={unversionedId:"build/build-build-with-point-network",id:"build/build-build-with-point-network",isDocsHomePage:!1,title:"Point Network Builders Starter's Guide",description:"Welcome to the builder's section of the Point Network Wiki.",source:"@site/docs/build/build-build-with-pointnetwork.md",sourceDirName:"build",slug:"/build-build-with-point-network",permalink:"/docs/build-build-with-point-network",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-build-with-pointnetwork.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1631873023,formattedLastUpdatedAt:"9/17/2021",frontMatter:{id:"build-build-with-point-network",title:"Point Network Builders Starter's Guide",sidebar_label:"Point Network Builders Starter's Guide",slug:"../build-build-with-point-network"},sidebar:"pnSidebar",previous:{title:"Builder's Portal",permalink:"/docs/build-index"},next:{title:"Testing Guide",permalink:"/docs/build-testing-guide"}},p=[{value:"Develop using docker compose",id:"develop-using-docker-compose",children:[]},{value:"Coding style",id:"coding-style",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the builder's section of the Point Network Wiki."),(0,i.kt)("h3",{id:"develop-using-docker-compose"},"Develop using docker compose"),(0,i.kt)("p",null,"If one needs to leverage the Point Network docker-compose and still be able to make changes in the code, they can do so by starting the compose the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d\n")),(0,i.kt)("p",null,"When started this way the service has all the local folders ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/bind-mounts/"},"bind-mounted")," into each Point Network node container. Therefore all the local changes will be available inside the dockerized nodes."),(0,i.kt)("p",null,"If you make changes to the code while the compose is already running, you can restart the whole service or a particular container like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose restart storage_provider # to restart a specified container\ndocker-compose restart # to restart the whole compose\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Docker Compose Logs")),(0,i.kt)("p",null,"To follow the logs of ",(0,i.kt)("em",{parentName:"p"},"all")," the containers simply run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose logs -f")," in the terminal. If you want to follow the logs of a specific container, hten specify the service name as well like so: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose logs -f storage_provider")," (to follow the logs of ",(0,i.kt)("inlineCode",{parentName:"p"},"storage_provider"),")"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Docker Compose Single Site Deployment")),(0,i.kt)("p",null,"If you want to deploy a single example site then you can do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter the website owner container like this: ",(0,i.kt)("inlineCode",{parentName:"li"},"docker exec -it pointnetwork_website_owner /bin/bash"),","),(0,i.kt)("li",{parentName:"ul"},"Now inside the container terminal: ",(0,i.kt)("inlineCode",{parentName:"li"},"cd /app/example/store.z"),"."),(0,i.kt)("li",{parentName:"ul"},"Run the deploy command: ",(0,i.kt)("inlineCode",{parentName:"li"},"./point deploy ./example/store.z --datadir $DATADIR -v --contracts"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Docker Compose and Truffle Console")),(0,i.kt)("p",null,"Since the ",(0,i.kt)("inlineCode",{parentName:"p"},"blockchain_node")," service is exposed via ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:7545")," its therefore possible to use truffle console without any modification. So you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"truffle console")," and it will connect to the running Ganache blockchain in the Docker ",(0,i.kt)("inlineCode",{parentName:"p"},"blockchain_node")," service."),(0,i.kt)("h3",{id:"coding-style"},"Coding style"),(0,i.kt)("p",null,"Following coding style applies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Always use semicolons otherwise ",(0,i.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/codebyte-why-are-explicit-semicolons-important-in-javascript-49550bea0b82/"},"dragons may bite you"),"!"),(0,i.kt)("li",{parentName:"ul"},"Use 4 spaces as a default indent for all files and set this in your IDE.")))}u.isMDXComponent=!0}}]);