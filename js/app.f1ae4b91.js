(function(){var e={2657:function(e,t,o){"use strict";var n=o(9963),i=o(2201),a=o(6252);const s=e=>((0,a.dD)("data-v-60e92caa"),e=e(),(0,a.Cn)(),e),r={class:"content-container"},c=s((()=>(0,a._)("div",{class:"content-1"}," ABOUT ME ",-1))),l=s((()=>(0,a._)("div",{class:"content-2"}," WHO AM I ",-1))),d=s((()=>(0,a._)("div",{class:"content-3"},[(0,a._)("p",null," I double graduated in Software Engineering at Centrale Nantes (France) and Civil Engineering at the Federal University of Ceará (Brazil). "),(0,a._)("p",null," I have over 2 years of experience working with Web Development. I really enjoy solving challenging problems and learning new technologies, reasons why I pursue a Software Engineer career. "),(0,a._)("p",null," I master the VueJs framework (HTML, CSS, JavaScript, TypeScript), building responsive interfaces in well-architected projects. Not only that, but I also work with NodeJs, Express, databases, ORM, and other useful stacks to create a server-side application. ")],-1))),u=[c,l,d];function p(e,t){return(0,a.wg)(),(0,a.iD)("div",r,u)}var h=o(3744);const v={},m=(0,h.Z)(v,[["render",p],["__scopeId","data-v-60e92caa"]]);var f=m;const g=e=>((0,a.dD)("data-v-24b9fdfd"),e=e(),(0,a.Cn)(),e),w={class:"description-container"},b={class:"title-1"},_=g((()=>(0,a._)("div",{class:"title-2"}," DESCRIPTION ",-1))),y={class:"description-description"},k=g((()=>(0,a._)("div",{class:"title-2"}," ABOUT ",-1))),U={class:"description-description"},j={class:"video"};function I(e,t){return(0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("div",b,[(0,a.WI)(e.$slots,"title",{},void 0,!0)]),_,(0,a._)("div",y,[(0,a.WI)(e.$slots,"description",{},void 0,!0)]),k,(0,a._)("div",U,[(0,a.WI)(e.$slots,"about",{},void 0,!0)]),(0,a._)("div",j,[(0,a.WI)(e.$slots,"video",{},void 0,!0)])])}const O={},T=(0,h.Z)(O,[["render",I],["__scopeId","data-v-24b9fdfd"]]);var C=T;const D=(0,a._)("p",null,[(0,a.Uk)(" A Single Page Application that fetches data from the "),(0,a._)("a",{href:"https://developer.marvel.com/"}," Marvel public API"),(0,a.Uk)(" and intuitively displays its contents. The user can search for a hero and discover its history and in which comics they appear. Digging further, the user can access the comic details, such as the the synopsis, price, and other heroes appearing in the comic. ")],-1),E=(0,a._)("p",null,[(0,a.Uk)(" I used "),(0,a._)("b",null,"VueJs"),(0,a.Uk)(" since it is one of the powerful frameworks to use components to create modern SPA. The most evident component is the card that will handle the hero's information (name, image and description). ")],-1),S=(0,a._)("p",null," This was my first side project. I was motivated to use front-end technologies to build an exciting website. Connecting a website to an API is one of the best ways to start. I decided to use Marvel API because it is free and easy to use. It is also fantastic to discover new heroes, isn't it? ",-1),P=(0,a._)("p",null,[(0,a.Uk)(" One of my concerns was to create a minimum "),(0,a._)("b",null,"responsive layout"),(0,a.Uk)(", so I developed using a mobile device layout to check the accessibility. ")],-1),A=(0,a._)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Qua8Ec9aSlE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1);var R={__name:"MarvelWorld",setup(e){return(e,t)=>((0,a.wg)(),(0,a.j4)(C,null,{title:(0,a.w5)((()=>[(0,a.Uk)(" MARVEL WORLD ")])),description:(0,a.w5)((()=>[D])),about:(0,a.w5)((()=>[E,S,P])),video:(0,a.w5)((()=>[A])),_:1}))}};const W=R;var L=W,M=(o(7658),o.p+"img/post-your-ideas-banner.db40efb4.jpg"),N=o.p+"img/find-your-duo-banner.aef365bc.png",x=o.p+"img/marvel-banner.cb6df74b.jpg";const Y={class:"project-list-container"},B={class:"project-card"},F=(0,a._)("div",{class:"project-info"},[(0,a._)("div",{class:"project-category"}," FULL-STACK WEB "),(0,a._)("div",{class:"project-date"}," 2022 ")],-1),J=(0,a._)("div",{class:"project-title"}," POST YOUR IDEAS ",-1),V=(0,a.uE)('<img src="'+N+'"><div class="project-info"><div class="project-category"> FULL-STACK WEB / MOBILE </div><div class="project-date"> 2022 </div></div><div class="project-title"> FIND YOUR YOU </div>',3),q=[V],H=(0,a.uE)('<img src="'+x+'"><div class="project-info"><div class="project-category"> FRONT-END WEB </div><div class="project-date"> 2021 </div></div><div class="project-title"> MARVEL WORLD </div>',3),Z=[H];var $={__name:"ProjectList",setup(e){const t=(0,i.tv)();function o(e){t.push({name:e})}return(e,t)=>((0,a.wg)(),(0,a.iD)("div",Y,[(0,a._)("div",B,[(0,a._)("img",{src:M,onClick:t[0]||(t[0]=e=>o("post-your-ideas"))}),F,J]),(0,a._)("div",{class:"project-card",onClick:t[1]||(t[1]=e=>o("find-your-duo"))},q),(0,a._)("div",{class:"project-card",onClick:t[2]||(t[2]=e=>o("marvel"))},Z)]))}};const z=$;var G=z;const K=(0,a._)("p",null," Single Page Application similar to Twitter, users may create posts with images to share thoughts. The user may log in to be able to create, edit and delete posts while they can see other users' posts. ",-1),Q=(0,a._)("p",null," The client-side consists of three main views: the login page, the post's timeline, and the formulary for creating and editing posts. ",-1),X=(0,a._)("p",null," The server handles CRUD requests for users and posts models with a NoSQL database. ",-1),ee=(0,a._)("p",null,null,-1),te=(0,a._)("a",{href:"https://www.udemy.com/course/angular-2-and-nodejs-the-practical-guide/"},"Udemy course",-1),oe=(0,a._)("p",null,[(0,a.Uk)(" The technologies used for building the application were "),(0,a._)("b",null," Angular "),(0,a.Uk)(" in the front end, and "),(0,a._)("b",null,"NodeJs"),(0,a.Uk)(" in the backend, using "),(0,a._)("b",null,"MongoDB"),(0,a.Uk)(" as a database to store user and post information. Mongoose is an easy way to create database schemas for MongoDB and apply some queries for CRUD requisitions. ")],-1),ne=(0,a._)("p",null,[(0,a.Uk)(" I learned some core web development concepts, such as the "),(0,a._)("b",null,"authentication"),(0,a.Uk)(" of clients to check if they are logged in or not and "),(0,a._)("b",null,"authorization"),(0,a.Uk)(" to check if a user has the permission to edit or delete a post. Moreover, pagination is an elegant way to avoid loading too many posts on a large dataset. ")],-1),ie=(0,a._)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Tfnzh2fxGw8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1);var ae={__name:"PostYourIdeas",setup(e){return(e,t)=>((0,a.wg)(),(0,a.j4)(C,null,{title:(0,a.w5)((()=>[(0,a.Uk)("POST YOUR IDEAS")])),description:(0,a.w5)((()=>[K,Q,X])),about:(0,a.w5)((()=>[ee,(0,a.Uk)(" I developed this project along with a full-stack "),te,(0,a.Uk)(". "),oe,ne])),video:(0,a.w5)((()=>[ie])),_:1}))}};const se=ae;var re=se;const ce=e=>((0,a.dD)("data-v-795dbf72"),e=e(),(0,a.Cn)(),e),le=ce((()=>(0,a._)("p",null," A full-stack application helps gamers find other people to play together according to their preferences, such as which game they play, when they usually are online, and if they use voice chat. The user can also create an announcement and wait for others to connect. ",-1))),de=ce((()=>(0,a._)("p",null," Both mobile and web versions have three main pages: a game list, an announcement list and a formulary to create an announcement. ",-1))),ue=ce((()=>(0,a._)("p",null,[(0,a.Uk)(" Developed along with the NLW course by "),(0,a._)("a",{href:"https://lp.rocketseat.com.br/nlw"}," Rockseat"),(0,a.Uk)(" e-sport edition. ")],-1))),pe=ce((()=>(0,a._)("p",null,[(0,a.Uk)(" On the server side, "),(0,a._)("b",null,"NodeJs"),(0,a.Uk)(" with "),(0,a._)("b",null,"Express"),(0,a.Uk)(" is used to create a server and retrieve GET and POST requests for users and announcements models. "),(0,a._)("b",null,"Prisma"),(0,a.Uk)(" TypeScript ORM facilitates data modelling, migrations, type-safety and auto-completion. ")],-1))),he=ce((()=>(0,a._)("p",null,[(0,a.Uk)(" On the client side, "),(0,a._)("b",null,"React"),(0,a.Uk)(" use components such as the Game Card and the Announcement Card. "),(0,a._)("b",null,"React Native"),(0,a.Uk)(" with "),(0,a._)("b",null,"Expo"),(0,a.Uk)(" is used to create the mobile version. Tailwind CSS is used for styling the website. ")],-1))),ve=ce((()=>(0,a._)("div",{class:"video-item"},[(0,a._)("iframe",{width:"473",height:"315",src:"https://www.youtube.com/embed/gfqAo8Os1XI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1))),me=ce((()=>(0,a._)("div",{class:"video-item"},[(0,a._)("iframe",{width:"473",height:"840",src:"https://www.youtube.com/embed/W48FVi21Sdw",title:"Side Project - Find Your Duo - mobile",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""})],-1)));var fe={__name:"FindYourDuo",setup(e){return(e,t)=>((0,a.wg)(),(0,a.j4)(C,null,{title:(0,a.w5)((()=>[(0,a.Uk)(" FIND YOUR DUO ")])),description:(0,a.w5)((()=>[le,de])),about:(0,a.w5)((()=>[ue,pe,he])),video:(0,a.w5)((()=>[ve,me])),_:1}))}};const ge=(0,h.Z)(fe,[["__scopeId","data-v-795dbf72"]]);var we=ge,be=o(3076);const _e=[{path:"/",component:f},{path:"/about-me",component:f},{path:"/projects",component:G},{path:"/projects/marvel-world",component:L,name:"marvel"},{path:"/projects/post-your-ideas",component:re,name:"post-your-ideas"},{path:"/projects/find-your-duo",component:we,name:"find-your-duo"}],ye=i.p7({history:i.PO(be.publicPath),routes:_e});var ke=ye,Ue=o(3577),je=o.p+"img/icon-github.12f02278.svg",Ie=o.p+"img/icon-linkedin.fe30bb43.svg",Oe=o.p+"img/me.6787d31f.jpg";const Te=e=>((0,a.dD)("data-v-706b4c86"),e=e(),(0,a.Cn)(),e),Ce={class:"presentation-card"},De=Te((()=>(0,a._)("div",{class:"presentation-content-1"},"Hello, I'm",-1))),Ee=Te((()=>(0,a._)("div",{class:"presentation-content-2"},"Igor",-1))),Se=Te((()=>(0,a._)("div",{class:"presentation-content-1"},"a Web Developer",-1))),Pe=Te((()=>(0,a._)("img",{src:je,alt:""},null,-1))),Ae=[Pe],Re=Te((()=>(0,a._)("img",{src:Ie,alt:""},null,-1))),We=[Re],Le=Te((()=>(0,a._)("div",{class:"profile-img"},[(0,a._)("img",{src:Oe,alt:""})],-1)));var Me={__name:"PresentationCard",setup(e){function t(){window.open("https://docs.google.com/viewer?url=https://igor-lira.github.io/Igor-Lira/CV_EN.pdf")}function o(){window.open("https://www.linkedin.com/in/igor-lira-passos-5b4aa5192/")}function n(){window.open("https://github.com/Igor-Lira")}return(e,i)=>((0,a.wg)(),(0,a.iD)("div",Ce,[(0,a._)("div",{class:"presentation-content"},[De,Ee,Se,(0,a._)("div",{class:"buttons-container"},[(0,a._)("button",{onClick:t}," Resume "),(0,a._)("button",{onClick:n},Ae),(0,a._)("button",{onClick:o},We)])]),Le]))}};const Ne=(0,h.Z)(Me,[["__scopeId","data-v-706b4c86"]]);var xe=Ne,Ye=o(2262);const Be={class:"page-content"},Fe={class:"links"},Je={name:"App",components:{PresentationCard:xe}};var Ve=Object.assign(Je,{setup(e){const t=(0,i.tv)(),o=(0,Ye.iH)(!1);return(0,a.YP)((()=>t),(()=>o.value=t.currentRoute.value.path.includes("projects")),{deep:!0}),(e,t)=>{const n=(0,a.up)("router-link"),i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",Be,[(0,a.Wm)(xe,{class:"page-item"}),(0,a._)("div",Fe,[(0,a.Wm)(n,{to:"/about-me",class:"link-item"},{default:(0,a.w5)((()=>[(0,a.Uk)(" ABOUT ME ")])),_:1}),(0,a.Wm)(n,{to:"/projects",class:(0,Ue.C_)(["link-item",[o.value?"router-link-active":""]])},{default:(0,a.w5)((()=>[(0,a.Uk)(" SIDE PROJECTS ")])),_:1},8,["class"])]),(0,a.Wm)(i)])}}});const qe=(0,h.Z)(Ve,[["__scopeId","data-v-4be85268"]]);var He=qe;(0,n.ri)(He).use(ke).mount("#app")},3076:function(e){const t="/Igor-Lira/";e.exports.publicPath=t,e.exports={publicPath:t,devServer:{allowedHosts:"all"}}}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,a){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],a=e[d][2];for(var r=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(r=!1,a<s&&(s=a));if(r){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,i,a]}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/Igor-Lira/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,s=n[0],r=n[1],c=n[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(i in r)o.o(r,i)&&(o.m[i]=r[i]);if(c)var d=c(o)}for(t&&t(n);l<s.length;l++)a=s[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},n=self["webpackChunkigor_lira"]=self["webpackChunkigor_lira"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(2657)}));n=o.O(n)})();
//# sourceMappingURL=app.f1ae4b91.js.map