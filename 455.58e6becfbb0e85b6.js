"use strict";(self.webpackChunkyoutube_client=self.webpackChunkyoutube_client||[]).push([[455],{1455:(z,x,s)=>{s.r(x),s.d(x,{YoutubeModule:()=>R});var l=s(6895),T=s(6841),d=s(5116),t=s(4650),c=s(9653);const C=e=>e.adminCards.cards,m=e=>e.youtubeCards.cards,S=(0,c.P1)(C,m,(e,i)=>[...e,...i]);var h=s(5332),f=s(7392),b=s(3546),p=s(136);let w=(()=>{class e{constructor(n){this.el=n,this.color="red"}ngOnInit(){this.showAge(this.el)}showAge(n){if(!this.dateOfPublishing)return this.color=p.DM.red,void(n.nativeElement.style.backgroundColor=this.color);const a=((new Date).getTime()-new Date(this.dateOfPublishing).getTime())/p.V$;switch(!0){case a>182:this.color=p.DM.red;break;case a>=30:this.color=p.DM.yellow;break;case a>7:this.color=p.DM.green;break;default:this.color=p.DM.blue}n.nativeElement.style.backgroundColor=this.color}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.SBq))},e.\u0275dir=t.lG2({type:e,selectors:[["","appShowAge",""]],inputs:{dateOfPublishing:"dateOfPublishing"}}),e})();function Z(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"mat-card",1),t._UZ(1,"img",2),t.TgZ(2,"div",3)(3,"div",4),t._UZ(4,"mat-icon",5),t.TgZ(5,"div"),t._uU(6),t.qZA()(),t.TgZ(7,"div",6),t._UZ(8,"mat-icon",7),t.TgZ(9,"div"),t._uU(10),t.qZA()(),t.TgZ(11,"div",8),t._UZ(12,"mat-icon",9),t.TgZ(13,"div"),t._uU(14),t.qZA()(),t.TgZ(15,"div",10),t._UZ(16,"mat-icon",11),t.TgZ(17,"div"),t._uU(18),t.qZA()()(),t.TgZ(19,"mat-card-title"),t._uU(20),t.qZA(),t.TgZ(21,"button",12),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.renderDetails(r.searchItem.id))}),t._uU(22,"more..."),t.qZA(),t.TgZ(23,"mat-card-footer"),t._UZ(24,"div",13),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(1),t.Q6J("src",n.searchItem.snippet.thumbnails.medium.url,t.LSH)("alt",n.searchItem.snippet.title),t.xp6(5),t.Oqu(n.searchItem.statistics.viewCount),t.xp6(4),t.Oqu(n.searchItem.statistics.likeCount),t.xp6(4),t.Oqu(n.searchItem.statistics.commentCount),t.xp6(4),t.Oqu(null==n.searchItem.contentDetails?null:n.searchItem.contentDetails.duration),t.xp6(2),t.Oqu(n.searchItem.snippet.title.split(" ").slice(0,6).join(" ")),t.xp6(1),t.Q6J("disabled",n.disabled),t.xp6(3),t.Q6J("dateOfPublishing",n.searchItem.snippet.publishedAt)}}let v=(()=>{class e{constructor(n,o){this.router=n,this.dashboardService=o,this.disabled=!1}renderDetails(n){this.dashboardService.showDashboard=!1,this.router.navigate([`/main/${n}`])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.F0),t.Y36(h.s))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card"]],inputs:{searchItem:"searchItem",disabled:"disabled"},decls:1,vars:1,consts:[["class","search-item",4,"ngIf"],[1,"search-item"],[1,"main-card-image",3,"src","alt"],[1,"icons-wrapper"],["title","views",1,"icon-wrapper"],["fontIcon","visibility"],["title","likes",1,"icon-wrapper"],["fontIcon","thumb_up"],["title","comments",1,"icon-wrapper"],["fontIcon","forum"],["title","duration",1,"icon-wrapper"],["fontIcon","timer"],[1,"action-btn",3,"disabled","click"],["appShowAge","",1,"ageBar",3,"dateOfPublishing"]],template:function(n,o){1&n&&t.YNc(0,Z,25,9,"mat-card",0),2&n&&t.Q6J("ngIf",o.searchItem)},dependencies:[l.O5,f.Hw,b.a8,b.rt,b.n5,w],styles:[".search-item[_ngcontent-%COMP%]{width:270px;height:360px;min-height:360px;background-color:#e6e3e3;margin:15px;padding-left:15px;padding-right:15px;padding-top:15px}.main-card-image[_ngcontent-%COMP%]{height:150px;max-height:150px;background-size:cover;background-position:center}.icons-wrapper[_ngcontent-%COMP%]{margin:15px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:5px}.icon-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.mat-mdc-card-title[_ngcontent-%COMP%]{font-size:18px;color:var(--secondary-color);font-weight:500;margin-bottom:0;text-align:center;height:50px}.action-btn[_ngcontent-%COMP%]{height:32px;width:120px;align-self:center;border-radius:5px;border:none;color:#e6e3e3;background-color:#2f80ed;margin:20px 0;cursor:pointer}.action-btn[_ngcontent-%COMP%]:disabled{opacity:.3}.ageBar[_ngcontent-%COMP%]{height:5px;width:100%;border-radius:5px;background-color:#2f80ed}"]}),e})(),y=(()=>{class e{transform(n,o){return o===p.kl.asc?n.sort((r,a)=>new Date(r.snippet.publishedAt).getTime()-new Date(a.snippet.publishedAt).getTime()):o===p.kl.desc?n.sort((r,a)=>new Date(a.snippet.publishedAt).getTime()-new Date(r.snippet.publishedAt).getTime()):n}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"sortByDate",type:e,pure:!0}),e})(),A=(()=>{class e{transform(n,o){return"asc"===o?n.sort((r,a)=>Number(r.statistics.viewCount)-Number(a.statistics.viewCount)):"desc"===o?n.sort((r,a)=>Number(a.statistics.viewCount)-Number(r.statistics.viewCount)):n}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"sortByViews",type:e,pure:!0}),e})();var k=s(5439),u=s.n(k);let _=(()=>{class e{transform(n,o){return"asc"===o?n.sort((r,a)=>u().duration(r?.contentDetails?.duration).asSeconds()-u().duration(a?.contentDetails?.duration).asSeconds()):"desc"===o?n.sort((r,a)=>u().duration(a?.contentDetails?.duration).asSeconds()-u().duration(r?.contentDetails?.duration).asSeconds()):n}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"sortByDuration",type:e,pure:!0}),e})(),O=(()=>{class e{transform(n,o){return 0===o.length?n:n.filter(r=>r.snippet.title.toLowerCase().includes(o.toLowerCase()))}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"filterByQuery",type:e,pure:!0}),e})();function I(e,i){1&e&&t._UZ(0,"app-card",2),2&e&&t.Q6J("searchItem",i.$implicit)("disabled",!0)}let D=(()=>{class e{constructor(n,o){this.dashboardService=n,this.store=o,this.cardsToRender=[{id:"k5E2AVpwsko",snippet:{publishedAt:"2017-09-05T16:48:15Z",title:"Angular Tutorial for Beginners: Learn Angular & TypeScript",description:"Angular tutorial for beginners: Learn Angular & TypeScript from scratch. \n\u{1f64f} Enjoyed this video? Please vote for me as the Top Programming Guru: https://bit.ly/2G7tf2s\n\u{1f525} Get my complete Angular course (60% OFF - LIMITED TIME): https://bit.ly/367j4nB\n\nThis Angular tutorial teaches you the fundamentals of Angular and TypeScript.\n\nSUBSCRIBE FOR MORE VIDEOS!\nhttps://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1\n\n\nTABLE OF CONTENT \n\n00:00 Introduction\n02:54 What is Angular?\n04:54 Architecture of Angular Apps\n08:41 Setting Up the Development Environment\n11:25 Your First Angular App\n13:50 Structure of Angular Projects\n20:43 Webpack\n23:57 Angular Version History \n27:31 Course Structure\n31:55 TypeScript Fundamentals\n32:34 What is TypeScript?\n34:58 Your First TypeScript Program\n37:57 Declaring Variables\n42:46 Types\n48:29 Type Assertions\n51:15 Arrow Functions\n52:59 Interfaces\n56:54 Classes\n01:01:22 Objects\n01:05:31 Constructors\n01:08:22 Access Modifiers\n01:11:18 Access Modifiers in Constructor Parameters\n01:12:58 Properties\n01:18:15 Modules\n01:23:22 Angular Fundamentals\n01:23:41 Building Blocks of Angular Apps\n01:27:22 Creating Components\n01:37:00 Generating Components Using Angular CLI\n01:41:40 Templates\n01:44:08 Directives\n01:47:34 Services\n01:52:02 Dependency Injection\n01:59:22 Generating Services Using Angular CLI\n02:01:32 Exercise\n \n\nSTAY IN TOUCH\n\nhttps://www.facebook.com/programmingwithmosh/\nhttps://twitter.com/moshhamedani",thumbnails:{medium:{url:"https://i.ytimg.com/vi/k5E2AVpwsko/mqdefault.jpg",width:320,height:180}}},statistics:{viewCount:"3833150",likeCount:"56284",favoriteCount:"0",commentCount:"2235"},contentDetails:{duration:"02:02:42"}},{id:"nQ2A30cD3Q8",snippet:{publishedAt:"2023-04-12T17:18:25Z",title:"Angular is back with a vengeance",description:"Angular is adding a new feature called signals that will give it a reactive primitive similar to Vue.js and Solid. Learn how it compares to other popular JavaScript frameworks like React.js and Svelte. \n\n#javascript #programming #TheCodeReport\n\n\u{1f4ac} Chat with Me on Discord\n\nhttps://discord.gg/fireship\n\n\u{1f517} Resources\n\nAngular Signals Demo https://angular-signals.netlify.app\nRFC https://github.com/angular/angular/discussions/49685\nIn Depth Change Detection https://indepth.dev/posts/1510/rendering-cycle-in-angular-applications-browser-angular-and-zone-js-interaction\nAngular in 100 Seconds https://youtu.be/Ata9cSC2WpM\n\n\u{1f525} Get More Content - Upgrade to PRO\n\nUpgrade at https://fireship.io/pro\nUse code YT25 for 25% off PRO access \n\n\u{1f3a8} My Editor Settings\n\n- Atom One Dark \n- vscode-icons\n- Fira Code Font\n\n\u{1f516} Topics Covered\n\n- Angular Signals tutorial\n- Is Angular dead?\n- History of JavaScript frameworks \n- Cool new JavaScript features\n- Will Angular signals replace RxJS?\n- Reactive programming on the web",thumbnails:{medium:{url:"https://i.ytimg.com/vi/nQ2A30cD3Q8/mqdefault.jpg",width:320,height:180}}},statistics:{viewCount:"398373",likeCount:"21587",favoriteCount:"0",commentCount:"1629"},contentDetails:{duration:"00:03:48"}},{id:"3dHNOWTI7H8",snippet:{publishedAt:"2021-05-06T15:40:03Z",title:"Angular Crash Course",description:"Learn the fundamentals of Angular in this project-based crash course\n\nVideo Sponsor:\nhttps://www.hostinger.com/traversymedia\n- Use the code TRAVERSYMEDIA for 10% off!\n\nCode:\nhttps://github.com/bradtraversy/angular-crash-2021\n\nLatest Udemy Courses:\nhttps://traversymedia.com\u200b\n\n\u{1f496}  Support The Channel!\nhttp://www.patreon.com/traversymedia\n\nTimestamps:\n0:00 - Hostinger Sponsor\n0:35 - Intro & Slides\n7:41 - Angular CLI & Setup\n10:39 - Files & Folders\n14:49 - Component structure\n16:42 - Properties & Interpolation\n18:40 - Global Styles\n19:20 - Header Component\n23:15 - Button Component\n24:36 - Component Input Data\n22:19 - Creating an event & event emitter output\n30:51 - Mock Tasks & Task Interface\n34:10 - Tasks Component\n36:03 - Looping with ngFor\n37:16 - Task Item Component\n40:13 - Angular Font Awesome Setup\n44:39 - Create a Task Service\n49:06 - Creating and Subscribe to Observable\n50:04 - JSON-Server Setup\n57:29 - Angular HTTP Client\n59:48 - Fetching Tasks\n1:02:59 - Deleting Tasks\n1:12:54 - Toggle Reminder\n1:20:29 - Add Task Component\n1:26:26 - Forms Module & ngModel\n1:29:00 - Submit & Create Task\n1:37:02 - Toggle Button & UI Service\n1:51:38 - Angular Router\n1:57:34 - Limit Component to Route",thumbnails:{medium:{url:"https://i.ytimg.com/vi/3dHNOWTI7H8/mqdefault.jpg",width:320,height:180}}},statistics:{viewCount:"1164015",likeCount:"19069",favoriteCount:"0",commentCount:"1314"},contentDetails:{duration:"02:01:32"}}]}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h.s),t.Y36(c.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-static-cards"]],decls:6,vars:13,consts:[[1,"container","search-results-list","wrapper"],[3,"searchItem","disabled",4,"ngFor","ngForOf"],[3,"searchItem","disabled"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.YNc(1,I,1,2,"app-card",1),t.ALo(2,"sortByDuration"),t.ALo(3,"sortByViews"),t.ALo(4,"sortByDate"),t.ALo(5,"filterByQuery"),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.xi3(3,4,t.xi3(4,7,t.xi3(5,10,o.cardsToRender,o.dashboardService.filterQuery),o.dashboardService.dateSortOrder),o.dashboardService.viewsSortOrder),o.dashboardService.durationSortOrder)))},dependencies:[l.sg,v,y,A,_,O],styles:[".search-results-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.wrapper[_ngcontent-%COMP%]{margin-top:10px}"]}),e})();function U(e,i){1&e&&t._UZ(0,"app-card",4),2&e&&t.Q6J("searchItem",i.$implicit)}function B(e,i){if(1&e&&(t.TgZ(0,"div",2),t.YNc(1,U,1,1,"app-card",3),t.ALo(2,"sortByDuration"),t.ALo(3,"sortByViews"),t.ALo(4,"sortByDate"),t.ALo(5,"filterByQuery"),t.qZA()),2&e){const n=i.ngIf,o=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.xi3(3,4,t.xi3(4,7,t.xi3(5,10,n,o.dashboardService.filterQuery),o.dashboardService.dateSortOrder),o.dashboardService.viewsSortOrder),o.dashboardService.durationSortOrder))}}function F(e,i){1&e&&(t.TgZ(0,"div",5)(1,"div",6),t._uU(2,"Enter a search query in the input field above and wait a bit to get relevant Youtube videos. "),t.qZA(),t.TgZ(3,"div",7),t._uU(4,"Click the settings button above "),t._UZ(5,"mat-icon",8),t._uU(6," to filter the searched results by views, date or an additional word query. "),t.qZA(),t._UZ(7,"app-static-cards"),t.TgZ(8,"div",9),t._uU(9,"The bottom line on the video card indicates how old the video is:"),t.qZA(),t.TgZ(10,"div",10)(11,"div",11),t._UZ(12,"span",12),t._uU(13,"older than 6 months"),t.qZA(),t.TgZ(14,"div",11),t._UZ(15,"span",13),t._uU(16,"between a month up to 6 months"),t.qZA(),t.TgZ(17,"div",11),t._UZ(18,"span",14),t._uU(19,"between seven days up to a month"),t.qZA(),t.TgZ(20,"div",11),t._UZ(21,"span",15),t._uU(22,"younger than 7 days"),t.qZA()()())}let Y=(()=>{class e{constructor(n,o){this.dashboardService=n,this.store=o,this.cards$=this.store.select(S)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(h.s),t.Y36(c.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-search-results"]],decls:4,vars:6,consts:[["class","container search-results-list",4,"ngIf"],["class","wrapper",4,"ngIf"],[1,"container","search-results-list"],[3,"searchItem",4,"ngFor","ngForOf"],[3,"searchItem"],[1,"wrapper"],[1,"title","bold"],[1,"title"],["fontIcon","tune",1,"mat-icon"],[1,"regular"],[1,"legend-list"],[1,"legend-item"],[1,"color-bullet","red-bullet"],[1,"color-bullet","yellow-bullet"],[1,"color-bullet","green-bullet"],[1,"color-bullet","blue-bullet"]],template:function(n,o){1&n&&(t.YNc(0,B,6,13,"div",0),t.ALo(1,"async"),t.YNc(2,F,23,0,"div",1),t.ALo(3,"async")),2&n&&(t.Q6J("ngIf",t.lcZ(1,2,o.cards$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(3,4,o.cards$).length<1))},dependencies:[l.sg,l.O5,f.Hw,D,v,l.Ov,y,A,_,O],styles:[".search-results-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center}.wrapper[_ngcontent-%COMP%]{width:100%;max-width:1200px;display:flex;flex-direction:column;margin:40px auto;padding-left:15px;padding-right:15px}.title[_ngcontent-%COMP%]{font-size:24px;font-weight:300;line-height:40px;letter-spacing:0em;text-align:left;color:#828282}.bold[_ngcontent-%COMP%]{font-weight:700}.regular[_ngcontent-%COMP%]{margin-top:30px;font-size:20px;font-weight:300;color:#828282}.mat-icon[_ngcontent-%COMP%]{border-radius:50%;width:40px;height:40px;color:#fff;background-color:#2979ff;display:inline-flex;justify-content:center;align-items:center}.legend-list[_ngcontent-%COMP%]{margin:20px auto 0;align-self:flex-start;display:flex;gap:15px;font-size:20px;font-weight:300;text-align:left;color:#828282}.legend-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px}.color-bullet[_ngcontent-%COMP%]{display:inline-block;width:20px;height:20px;border-radius:50%}.red-bullet[_ngcontent-%COMP%]{background-color:red}.blue-bullet[_ngcontent-%COMP%]{background-color:#2979ff}.green-bullet[_ngcontent-%COMP%]{background-color:green}.yellow-bullet[_ngcontent-%COMP%]{background-color:#ff0}@media only screen and (max-width: 600px){.legend-list[_ngcontent-%COMP%]{flex-direction:column}}"]}),e})();function q(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",1)(1,"div",2),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.goBack())}),t.qZA(),t.TgZ(2,"div",3)(3,"div",4)(4,"a",5),t._UZ(5,"button",6)(6,"img",7),t.qZA()(),t.TgZ(7,"div",8)(8,"div",9)(9,"div",10),t._uU(10),t.qZA(),t.TgZ(11,"div",11),t._uU(12),t.ALo(13,"date"),t.qZA()(),t.TgZ(14,"div",12)(15,"span",13),t._uU(16,"Description:"),t.qZA(),t._uU(17),t.qZA(),t.TgZ(18,"div",14)(19,"div",15),t._UZ(20,"mat-icon",16),t.TgZ(21,"div"),t._uU(22),t.qZA()(),t.TgZ(23,"div",17),t._UZ(24,"mat-icon",18),t.TgZ(25,"div"),t._uU(26),t.qZA()(),t.TgZ(27,"div",19),t._UZ(28,"mat-icon",20),t.TgZ(29,"div"),t._uU(30),t.qZA()(),t.TgZ(31,"div",21),t._UZ(32,"mat-icon",22),t.TgZ(33,"div"),t._uU(34),t.qZA()()(),t._UZ(35,"div",23),t.qZA()()()}if(2&e){const n=i.ngIf,o=t.oxw();t.xp6(4),t.MGl("href","https://youtube.com/watch?v=",o.id,"",t.LSH),t.xp6(2),t.Q6J("src",n.snippet.thumbnails.medium.url,t.LSH)("alt",n.snippet.title),t.xp6(4),t.Oqu(n.snippet.title.split(" ").slice(0,6).join(" ")),t.xp6(2),t.Oqu(t.lcZ(13,11,n.snippet.publishedAt)),t.xp6(5),t.Oqu(n.snippet.description.substring(0,800)),t.xp6(5),t.Oqu(n.statistics.viewCount),t.xp6(4),t.Oqu(n.statistics.likeCount),t.xp6(4),t.Oqu(n.statistics.commentCount),t.xp6(4),t.Oqu(null==n.contentDetails?null:n.contentDetails.duration),t.xp6(1),t.Q6J("dateOfPublishing",n.snippet.publishedAt)}}const j=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-main-page"]],decls:1,vars:0,template:function(n,o){1&n&&t._UZ(0,"app-search-results")},dependencies:[Y],encapsulation:2}),e})()},{path:":id",component:(()=>{class e{constructor(n,o,r){this.router=n,this.route=o,this.store=r,this.id="";const{id:a}=this.route.snapshot.params;this.id=a}ngOnInit(){const{id:n}=this.route.snapshot.params;this.searchItem$=this.store.select((e=>(0,c.P1)(C,m,(i,n)=>{const o=i.find(a=>a.id===e),r=n.find(a=>a.id===e);return o||r}))(n)),this.searchItem$||this.router.navigate(["404"])}goBack(){this.router.navigate(["/main"])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.F0),t.Y36(d.gz),t.Y36(c.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-details-page"]],decls:2,vars:3,consts:[["class","search-item",4,"ngIf"],[1,"search-item"],[1,"action-btn",3,"click"],[1,"box-shadow"],[1,"image-wrapper"],["target","_blank",3,"href"],[1,"btn","btn-play-main"],[1,"main-card-image",3,"src","alt"],[1,"content-wrapper"],[1,"title-date-wrapper"],[1,"title"],[1,"regular","small"],[1,"regular","medium"],[1,"bold"],[1,"icons-wrapper"],["title","views",1,"icon-wrapper"],["fontIcon","visibility"],["title","likes",1,"icon-wrapper"],["fontIcon","thumb_up"],["title","comments",1,"icon-wrapper"],["fontIcon","forum"],["title","duration",1,"icon-wrapper"],["fontIcon","timer"],["appShowAge","",1,"ageBar",3,"dateOfPublishing"]],template:function(n,o){1&n&&(t.YNc(0,q,36,13,"div",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,o.searchItem$))},dependencies:[l.O5,f.Hw,w,l.Ov,l.uU],styles:[".search-item[_ngcontent-%COMP%]{width:1200px;height:460px;margin:45px auto 0;display:flex;flex-direction:row}.action-btn[_ngcontent-%COMP%]{height:32px;width:32px;background-image:url(back_button.cf30d79c256205bf.svg);cursor:pointer;z-index:10}.box-shadow[_ngcontent-%COMP%]{display:flex;border-radius:10px;box-shadow:5px 20px 10px -15px var(--primary-color)}.image-wrapper[_ngcontent-%COMP%]{font-size:0;align-self:center;height:100%;position:relative}.btn-play-main[_ngcontent-%COMP%]{width:220px;height:220px;cursor:pointer;-webkit-mask-size:cover;mask-size:cover;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;-webkit-mask-image:url(play-btn.2adc99695cbb12b8.svg);mask-image:url(play-btn.2adc99695cbb12b8.svg);background-color:var(--primary-color);border:transparent;border-radius:50%;position:absolute;top:30%;left:40%;z-index:10}.btn-play-main[_ngcontent-%COMP%]:hover{background-color:#f0f8ff}.main-card-image[_ngcontent-%COMP%]{width:730px;height:460px;background-size:cover;background-position:center;border-bottom-left-radius:5px}.content-wrapper[_ngcontent-%COMP%]{width:438px;display:flex;flex-direction:column;background-color:#e6e3e3;box-shadow:15px 0 10px -15px var(--primary-color);border-top-right-radius:5px;border-bottom-right-radius:5px}.title-date-wrapper[_ngcontent-%COMP%]{margin:40px 15px 50px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.title[_ngcontent-%COMP%]{font-size:20px;font-weight:500}.regular[_ngcontent-%COMP%]{font-weight:200;color:var(--secondary-color)}.small[_ngcontent-%COMP%]{font-size:10px}.medium[_ngcontent-%COMP%]{font-size:12px;margin:40px 15px 50px}.bold[_ngcontent-%COMP%]{margin-bottom:5px;display:block;font-weight:500}.icons-wrapper[_ngcontent-%COMP%]{height:15px;margin:auto auto 20px;display:flex;flex-direction:row;gap:15px;justify-content:space-between;align-items:center}.icon-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:5px}.ageBar[_ngcontent-%COMP%]{height:5px;width:100%;background-color:var(--primary-color);border-bottom-right-radius:5px}@media only screen and (max-width: 1200px){.search-item[_ngcontent-%COMP%]{width:762px;height:-moz-fit-content;height:fit-content}.main-card-image[_ngcontent-%COMP%]{border-bottom-left-radius:0}.content-wrapper[_ngcontent-%COMP%]{width:730px;border-top-right-radius:0;border-bottom-left-radius:5px}.box-shadow[_ngcontent-%COMP%]{flex-direction:column}.btn-play-main[_ngcontent-%COMP%]{width:200px;height:200px}}@media only screen and (min-width: 440px) and (max-width: 740px){.search-item[_ngcontent-%COMP%]{width:470px}.content-wrapper[_ngcontent-%COMP%]{width:438px}.box-shadow[_ngcontent-%COMP%]{flex-direction:column}.btn-play-main[_ngcontent-%COMP%]{width:100px;height:100px}.main-card-image[_ngcontent-%COMP%]{width:438px;height:300px}}@media only screen and (min-width: 100px) and (max-width: 439px){.search-item[_ngcontent-%COMP%]{width:350px}.box-shadow[_ngcontent-%COMP%]{flex-direction:column}.btn-play-main[_ngcontent-%COMP%]{width:80px;height:80px}.main-card-image[_ngcontent-%COMP%]{width:318px;height:230px}.content-wrapper[_ngcontent-%COMP%]{width:318px}}"]}),e})()}];let Q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(j),d.Bz]}),e})();var g=s(5361);const P={error:"",isLoading:!1,cards:[]},J=(0,c.Lq)(P,(0,c.on)(g.n_,e=>({...e,isLoading:!0})),(0,c.on)(g.CM,(e,{cards:i})=>({...e,cards:i,isLoading:!1,error:""})),(0,c.on)(g.JQ,(e,{error:i})=>({...e,cards:[],error:i,isLoading:!1})),(0,c.on)(g.DA,()=>({...P})));let R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,T.m,Q,c.Aw.forFeature("youtubeCards",J)]}),e})()}}]);