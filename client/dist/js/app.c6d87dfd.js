(function(e){function t(t){for(var a,o,i=t[0],c=t[1],d=t[2],u=0,h=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(h.length)h.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0182":function(e,t,r){"use strict";var a=r("e34b"),n=r.n(a);n.a},"0291":function(e,t,r){e.exports=r.p+"img/CardBack.25b4a4d6.png"},"034f":function(e,t,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"068f":function(e,t,r){"use strict";var a=r("aaa2"),n=r.n(a);n.a},"1b76":function(e,t,r){},"1bdc":function(e,t,r){},"20b9":function(e,t,r){},"31cf":function(e,t,r){},"3dc3":function(e,t,r){"use strict";var a=r("20b9"),n=r.n(a);n.a},"3e9a":function(e,t,r){"use strict";var a=r("31cf"),n=r.n(a);n.a},"4ced":function(e,t,r){"use strict";var a=r("6ce8"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t),r.d(t,"eventBus",(function(){return cr})),r.d(t,"test",(function(){return dr}));r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("bf19");var a=r("8aa5"),n=Object(a["initializeApp"])({apiKey:"AIzaSyB72305T76qBMmzL8WaC9WCUJwlhHVXZF8",authDomain:"golf-card-game.firebaseapp.com",databaseURL:"https://golf-card-game.firebaseio.com",projectId:"golf-card-game",storageBucket:"golf-card-game.appspot.com",messagingSenderId:"53407633152"}),s=n.database(),o=n,i=(s.ref("scores"),s.ref("leaderboard")),c=o.auth(),d=(s.ref("scores/-LzbcOnDQ_isE4pJ0ylY").toJSON(),r("2b0e")),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("logo-header",{attrs:{id:"nav-bar",gameStatus:e.gameStatus,scoreCard:e.scoreCard}}),r("router-view",{attrs:{gameMode:e.gameMode,userData:e.userData,gameDeck:e.gameDeck,userName:e.userName,gameStatus:e.gameStatus}})],1)},u=[],h=(r("d3b7"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.selectScoresPage?e._e():r("div",{attrs:{id:"intro-screen"}},[r("h2",[e._v("Player Profile:")]),r("div",{attrs:{id:"top-container"}},[e.newGame?e._e():r("player-profile",{attrs:{userData:e.userData,gamesPlayed:e.gamesPlayed,totalScore:e.totalScore,averageScore:e.averageScore,bestScore:e.bestScore}})],1),r("h2",[e._v("Game Modes:")]),r("div",{attrs:{id:"game-modes-container"}},e._l(e.gameModes,(function(e,t){return r("ul",[r("li",[r("game-mode",{attrs:{game:e}})],1)])})),0),r("h2",[e._v("Game Log:")]),r("div",{attrs:{id:"last-game-container"}},[r("game-history",{attrs:{matches:e.matches}})],1)])}),f=[],m=(r("4160"),r("07ac"),r("159b"),r("2909")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"profile-container"}},[r("div",{attrs:{id:"button-row"}},[r("b-button",{attrs:{id:"btn-main"}},[e._v("Edit Profile")]),r("b-button",{attrs:{id:"btn-main"},on:{click:e.signOut}},[e._v("Sign Out")])],1),r("div",{attrs:{id:"information-row"}},[e._m(0),r("div",{attrs:{id:"profile-info-box"}},[r("div",{attrs:{id:"profile-info-box-title"}},[r("h2",[r("b",[e._v(e._s(this.userData.username))])])]),r("div",{attrs:{id:"profile-info-box-data"}},[r("p",{staticClass:"record-box top-left"},[e._v("Games Played: "+e._s(this.gamesPlayed))]),r("p",{staticClass:"record-box top-right"},[e._v("Total Score: "+e._s(this.totalScore))]),r("p",{staticClass:"record-box bot-left"},[e._v("Average Score: "+e._s(this.averageScore))]),r("p",{staticClass:"record-box bot-right"},[e._v("Best Score: "+e._s(this.bestScore))])])])])])},g=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"photo-box"}},[a("img",{attrs:{src:r("74b6")}})])}],v=(r("ac1f"),r("5319"),r("96cf"),r("1da1")),b={name:"player-profile",props:["userData","gamesPlayed","totalScore","averageScore","bestScore"],methods:{signOut:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.auth().signOut();case 3:e.sent,this.$router.replace({name:"login"}),eventBus.$emit("signed-out"),this.userData={},e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}()}},_=b,C=(r("f768"),r("2877")),w=Object(C["a"])(_,p,g,!1,null,"856656bc",null),S=w.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"new-game-container"}},[r("h4",[e._v(e._s(this.game.mode))]),r("b-button",{attrs:{to:"/game",id:"btn-main",type:"submit"},on:{click:e.clickedNewGame}},[e._v("Tee Off")])],1)},k=[],$={name:"game-mode",props:["game"],methods:{clickedNewGame:function(){"Single Player"===this.game.mode?cr.$emit("start-new-game","single-player"):"Versus Computer"===this.game.mode&&cr.$emit("start-new-game","versus-computer")}}},x=$,D=(r("3dc3"),Object(C["a"])(x,y,k,!1,null,"d215992c",null)),O=D.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"game-history-container"}},[r("match-list",{attrs:{matches:e.matches}})],1)},P=[],E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{attrs:{id:"match-list"}},[r("b-table",{attrs:{large:"",hover:"","head-variant":"dark",border:"",items:e.matches,fields:e.fields},scopedSlots:e._u([{key:"cell(averageScore)",fn:function(t){return[e._v(" "+e._s(e.getAverageScore(t))+" ")]}},{key:"cell(card)",fn:function(t){return[r("b-button",{attrs:{id:"btn-main"},on:{click:function(r){return e.showScoreCard(t)}}},[e._v("View")])]}}])})],1),r("b-modal",{attrs:{scrollable:"",title:"Score Card","ok-only":""},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[r("score-card",{attrs:{scoreCard:e.score}})],1)],1)},T=[],G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"match-details-container"}},[r("p",[r("b",[e._v("Played:")]),e._v(" "+e._s(this.match.date.date)+" @ "+e._s(this.match.date.time))]),r("p",[r("b",[e._v("Score:")]),e._v(" "+e._s(this.match.score))]),e._m(0),r("score-card",{attrs:{scoreCard:this.match.card}})],1)},B=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("b",[e._v("Scorecard:")])])}],N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("tr",[r("th",[e._v("Hole")]),e._l(this.holes,(function(t,a){return r("th",[e._v(e._s(t))])})),r("th",[e._v("Total")])],2),r("tr",[r("th",[e._v("Score")]),e._l(this.scores,(function(t,a){return r("th",[e._v(e._s(t))])})),r("th",[e._v(e._s(e.totalScore))])],2)])},L=[],I=(r("a4d3"),r("e01a"),r("d28b"),r("a434"),r("3ca3"),r("ddb0"),{name:"score-card",props:["scoreCard"],data:function(){return{holes:[],scores:[],total:0}},mounted:function(){for(var e=1;e<=9;e++)this.holes.push(e);for(var t=1;t<=9;t++)this.scores.push("");this.getScores()},watch:{scoreCard:function(){if(0===this.scoreCard.length){this.scores=[];for(var e=1;e<=9;e++)this.scores.push("")}else{var t=0,r=!0,a=!1,n=void 0;try{for(var s,o=this.scoreCard[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var i=s.value;this.scores.splice(t,1,i),t+=1}}catch(c){a=!0,n=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw n}}}},totalScore:function(){eventBus.$emit("total",this.totalScore)}},scores:function(){9===this.scores.length&&eventBus.$emit("total-score",this.score),this.scores.length>=1&&eventBus.$emit("total",this.total)},computed:{totalScore:function(){var e=0,t=!0,r=!1,a=void 0;try{for(var n,s=this.scoreCard[Symbol.iterator]();!(t=(n=s.next()).done);t=!0){var o=n.value;e+=o}}catch(i){r=!0,a=i}finally{try{t||null==s.return||s.return()}finally{if(r)throw a}}return e}},methods:{getScores:function(){if(0===this.scoreCard.length){this.scores=[];for(var e=1;e<=9;e++)this.scores.push("")}else{var t=0,r=!0,a=!1,n=void 0;try{for(var s,o=this.scoreCard[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var i=s.value;this.scores.splice(t,1,i),t+=1}}catch(c){a=!0,n=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw n}}}}}}),H=I,M=(r("61cb"),Object(C["a"])(H,N,L,!1,null,"0907e7e8",null)),A=M.exports,U={name:"match-details",props:["match","chosenScoreCard"],components:{"score-card":A}},R=U,F=(r("0182"),Object(C["a"])(R,G,B,!1,null,"6955e513",null)),q=F.exports,J={name:"match-list",props:["matches"],data:function(){return{modalShow:!1,score:[],fields:[{key:"date.date",label:"Date",sortable:!0},{key:"card.length",label:"Length",sortable:!1},{key:"averageScore",label:"Average"},{key:"score",sortable:!0},{key:"card",label:"Card"}],averageScore:0}},components:{"match-details":q,"score-card":A},methods:{getAverageScore:function(e){var t=e.item.card.length,r=e.item.score,a=r/t;return Math.floor(a)},showScoreCard:function(e){this.modalShow=!0,this.score=e.item.card,console.log("modal",this.modalShow)}}},V=J,K=(r("4ced"),Object(C["a"])(V,E,T,!1,null,"029b9fc1",null)),W=K.exports,z={name:"game-history",props:["matches"],components:{"match-list":W}},Y=z,Q=Object(C["a"])(Y,j,P,!1,null,"9cd49292",null),X=Q.exports,Z={name:"intro-screen",props:["viewLeaderBoard"],data:function(){return{newGame:!1,userName:null,selectScoresPage:!1,loggedIn:!1,userData:{},lastMatch:{},chosenScoreCard:[],gamesPlayed:0,totalScore:0,averageScore:0,matches:[],bestScore:0,gameModes:[{mode:"Single Player",holes:[3,9,18]}]}},components:{"player-profile":S,"game-mode":O,"game-history":X},created:function(){var e=this;o.auth().onAuthStateChanged((function(t){t?(e.loggedIn=!0,e.getUserData()):e.loggedIn=!1}))},watch:{userName:function(){cr.$emit("username-selected",this.userName),this.clickedNewGame()}},userData:function(){var e=this;cr.$emit("user-data",this.userData).then((function(){e.getLastGame()}))},mounted:function(){var e=this;cr.$on("view-leaderboard",(function(){e.selectScoresPage=!e.selectScoresPage})),cr.$on("register-user",(function(){e.getUserData()}))},methods:{handleClick:function(){cr.$emit("username-selected",this.userName),this.clickedNewGame()},getUserData:function(){var e=this;if(c.currentUser){var t=c.currentUser.uid;s.ref().child("users").child(t).once("value",(function(t){e.userData=t.val()})).then((function(){cr.$emit("user-data",e.userData),e.userData.games&&(e.getLastGame(),e.getGamesPlayed(),e.getTotalScore(),e.getAverageScore(),e.getBestScore())}))}},getLastGame:function(){var e=Object.values(this.userData.games);this.matches=e;var t=Object(m["a"])(e);this.lastMatch=t.pop();this.getDate();this.chosenScoreCard=this.lastMatch.card},getDate:function(){var e=new Date,t=e.getDate()+"-"+(e.getMonth()+1)+"-"+e.getFullYear(),r=e.getHours()+":"+e.getMinutes(),a={date:t,time:r};return a},getGamesPlayed:function(){var e=Object.values(this.userData.games);this.gamesPlayed=e.length},getTotalScore:function(){var e=0,t=Object.values(this.userData.games);t.forEach((function(t){e+=t.score})),this.totalScore=e},getAverageScore:function(){var e=this.gamesPlayed,t=this.totalScore,r=t/e;this.averageScore=Math.floor(r)},getBestScore:function(){var e=150,t=Object.values(this.userData.games);t.forEach((function(t){t.score<e&&(e=t.score)})),this.bestScore=e}}},ee=Z,te=(r("be06"),Object(C["a"])(ee,h,f,!1,null,"5a63dd13",null)),re=te.exports,ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"logo-header"}},[a("b-navbar",{attrs:{toggleable:"lg",variant:"faded",type:"light"}},[a("b-navbar-brand",{attrs:{href:"#"}},[a("img",{attrs:{src:r("f4e8"),height:"80",alt:""}})]),a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/"},on:{click:e.reset}},[e._v("Home")]),e.gameStatus?e._e():a("b-nav-item",{attrs:{to:"/leaderboard"}},[e._v("Leaderboard")]),a("div",[e.gameStatus?a("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}]},[e._v("Leaderboard")]):e._e(),a("b-modal",{attrs:{id:"modal-1",scrollable:"",title:"Leaderboard","ok-only":""}},[a("scores-page")],1)],1),e.gameStatus?e._e():a("b-nav-item",{attrs:{to:"/rules"}},[e._v("Rules")]),a("div",[e.gameStatus?a("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-2",modifiers:{"modal-2":!0}}]},[e._v("Rules")]):e._e(),a("b-modal",{attrs:{id:"modal-2",scrollable:"",title:"Rules","ok-only":""}},[a("game-rules")],1)],1)],1),a("b-navbar-nav",{staticClass:"ml-auto"},[e.gameStatus?a("b-nav-item",{attrs:{right:""}},[e._v("Hole: "+e._s(this.currentHole))]):e._e(),e.gameStatus?a("b-nav-item",{attrs:{right:""}},[e._v("Current Score: "+e._s(this.score))]):e._e(),e.gameStatus?a("b-nav-item",{attrs:{href:"#",right:""},on:{click:e.newGame}},[e._v("Restart Game")]):e._e(),a("div",[e.gameStatus?a("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-3",modifiers:{"modal-3":!0}}]},[e._v("Score Card")]):e._e(),a("b-modal",{attrs:{id:"modal-3",scrollable:"",title:"Score Card","ok-only":""}},[a("score-card",{attrs:{scoreCard:e.scoreCard}})],1)],1)],1)],1)],1)},ne=[],se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"leaderboard-container"}},[r("div",{attrs:{id:"views-container"}},[r("b-button",{attrs:{id:"btn-main",type:"button",name:"button"},on:{click:e.setFilter}},[e._v(e._s(this.filter?"Show All Scores":"Show Best Scores"))]),r("b-button",{attrs:{id:"btn-main",type:"button",name:"button"},on:{click:e.seeTable}},[e._v(e._s(this.tableFilter?"Show Legacy":"Show Current"))])],1),r("div",{attrs:{id:"scoreboard-container"}},[e.sortedLeaderBoard&&e.tableFilter?r("leaderboard",{attrs:{scores:this.sortedLeaderBoard,title:e.newTitle,gameStatus:e.gameStatus}}):e._e(),e.sortedScores&&!e.tableFilter?r("leaderboard",{attrs:{scores:this.sortedScores,title:e.title,gameStatus:e.gameStatus}}):e._e()],1)])},oe=[],ie=(r("4de4"),r("c740"),r("d81d"),r("b64b"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("table",[e._m(0),e._l(e.scores,(function(t,a){return r("tr",[r("td",[e._v(e._s(a+1))]),r("td",[e._v(e._s(t.golfer))]),r("td",[e._v(e._s(t.score))])])}))],2)])}),ce=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("th",[e._v("#")]),r("th",[e._v("Name")]),r("th",[e._v("Score")])])}],de={name:"leaderBoard",props:["scores","title","gameStatus"]},le=de,ue=(r("cb3b"),Object(C["a"])(le,ie,ce,!1,null,"04ad57ae",null)),he=ue.exports,fe={name:"playerScores",props:["gameStatus"],data:function(){return{scores:{},sortedScores:[],leaderBoard:{},sortedLeaderBoard:[],title:"Legacy",newTitle:"Current",filter:!0,tableFilter:!0}},components:{leaderboard:he},created:function(){var e=this;s.ref("scores").once("value",(function(t){return e.scores=t.toJSON()})),s.ref("leaderboard").once("value",(function(t){return e.leaderBoard=t.toJSON()}))},watch:{scores:function(){var e=this;this.sortedScores=Object.keys(this.scores).map((function(t){return e.scores[t]})),this.sortedScores.sort((function(e,t){return e.score-t.score}))},leaderBoard:function(){this.fillLeaderboard(),this.filterView()},filter:function(){!0===this.filter?this.filterView():this.fillLeaderboard()}},methods:{filterView:function(){var e=Object(m["a"])(this.sortedLeaderBoard),t=e.filter((function(e,t,r){return r.findIndex((function(t){return t.golfer===e.golfer}))===t}));this.sortedLeaderBoard=t},fillLeaderboard:function(){var e=this;this.sortedLeaderBoard=Object.keys(this.leaderBoard).map((function(t){return e.leaderBoard[t]})),this.sortedLeaderBoard.sort((function(e,t){return e.score-t.score}))},setFilter:function(){this.filter=!this.filter},seeTable:function(){this.tableFilter=!this.tableFilter}}},me=fe,pe=(r("b7c8"),Object(C["a"])(me,se,oe,!1,null,"76959eaf",null)),ge=pe.exports,ve=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},be=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"game-rules"}},[r("h4",[e._v("The Deal:")]),r("p",[e._v(" Each player is dealt 4 cards face down from the deck. The remainder of the cards are placed face down, and the top card is turned up to start the discard pile beside it. Players arrange their 4 cards in a row face down. At the start of a round, the player can look at two cards but only for a short time. ")]),r("h4",[e._v("The Game:")]),r("p",[e._v(' The object is for players to have the lowest value of the cards in front of them by either swapping them for lesser value cards or by pairing them up with cards of equal rank. A game is nine "holes" (deals), and the player with the lowest total score is the winner. ')]),e._v(" Beginning with the player to the dealer's left, players take turns drawing single cards from either the stock or discard piles. The drawn card may either be swapped for one of that player's 4 cards, or discarded. If the card is swapped for one of the face down cards, the card swapped in remains face up. If the player choose not to take the card, they must turn over one of their own. The round ends when all of a player's cards are face-up. "),r("p"),r("h4",[e._v("Gameplay:")]),r("ul",[r("li",[e._v("Once cards have been dealt and at the beginning of the round, click a card to reveal it for a short time.")]),r("li",[e._v("To lock in a card: Double click the chosen card.")]),r("li",[e._v("To swap a card: Click the face up card you want and then click the card in your hand that you want to switch.")]),r("li",[e._v("If you change your mind after selecting the top card from the pile, just click it again to cancel the swap.")])]),r("h4",[e._v("Special Cards & Combinations:")]),r("ul",[r("li",[r("b",[e._v("King:")]),e._v(" 0")]),r("li",[r("b",[e._v("5:")]),e._v(" -5")]),r("li",[r("b",[e._v("Pair:")]),e._v(" 0")]),r("li",[r("b",[e._v("4 of a kind:")]),e._v(" -30")])]),r("h4",[e._v("Useful Links:")]),r("ul",[r("li",[r("a",{attrs:{href:"https://www.pagat.com/draw/golf.html",target:"_blank"}},[e._v("Four Card Golf")])]),r("li",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=I6xcdO7qKsU",target:"_blank"}},[e._v("Video Walkthrough")])])]),r("p",[e._v("Sidenote: There are many variations of golf. This is but my own interpretation of the great game.")])])}],_e={name:"game-rules"},Ce=_e,we=(r("b5da"),Object(C["a"])(Ce,ve,be,!1,null,"a415bb2c",null)),Se=we.exports,ye={name:"logo-header",data:function(){return{loggedIn:!1,score:0,currentHole:1}},props:["gameStatus","scoreCard"],components:{"scores-page":ge,"game-rules":Se,"score-card":A},mounted:function(){var e=this;cr.$on("total",(function(t){e.score=t})),cr.$on("start-next-hole",(function(){e.currentHole+=1})),cr.$on("start-new-game",(function(){e.currentHole=1,e.score=0}))},watch:{scoreCard:function(){var e=0;this.scoreCard.length>0&&(this.scoreCard.forEach((function(t){e+=t})),this.score=e)}},methods:{newGame:function(){cr.$emit("start-new-game"),this.score=0,this.currentHole=1},reset:function(){cr.$emit("reset-app"),this.score=0,this.currentHole=1}}},ke=ye,$e=(r("3e9a"),Object(C["a"])(ke,ae,ne,!1,null,"efc300ec",null)),xe=$e.exports,De=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"game_container"}},[r("div",{attrs:{id:"game-board"}},[r("div",{attrs:{id:"next-button"}},[r("game-header",{attrs:{gameStatus:e.gameStatus,scoreCard:e.scoreCard,lockedCards:e.lockedCards,counter:e.counter,currentHole:e.currentHole}})],1),e.viewLeaderBoard?e._e():r("div",{attrs:{id:"board-one"}},[e.discardPile?r("discard-pile",{attrs:{discardPile:e.discardPile}}):e._e(),r("card-deck",{attrs:{topCardStatus:e.topCardStatus}}),e.topCard?r("top-card",{attrs:{topCard:e.topCard}}):e._e()],1)]),e.playerCards&&!e.viewLeaderBoard?r("div",{attrs:{id:"hand-container"}},[r("player-cards",{attrs:{counter:e.counter,lockedCards:e.lockedCards,playerCards:e.playerCards,topCardSelected:e.topCardSelected,userData:e.userData}}),"versus-computer"===e.gameMode?r("player-cards",{attrs:{counter:e.counter,lockedCards:e.lockedCards,playerCards:e.playerCards,topCardSelected:e.topCardSelected,userData:e.userData}}):e._e()],1):e._e()])},Oe=[],je=(r("c975"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return this.discardPile.length>0?r("div",{attrs:{id:"discard-pile"}},[r("p",[e._v("Discard Pile:")]),r("img",{staticClass:"card-icon",attrs:{src:this.discardPile[this.discardPile.length-1][0].image}})]):e._e()}),Pe=[],Ee={name:"discard-pile",props:["discardPile"]},Te=Ee,Ge=(r("e570"),Object(C["a"])(Te,je,Pe,!1,null,"43b23d0d",null)),Be=Ge.exports,Ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"top-card"}},[r("p",[e._v("Top Card:")]),r("img",{staticClass:"card-icon",attrs:{src:this.topCard.image},on:{click:e.handleClick}})])},Le=[],Ie={name:"topCard",props:["topCard"],methods:{handleClick:function(){cr.$emit("top-card-selected")}}},He=Ie,Me=(r("7a22"),Object(C["a"])(He,Ne,Le,!1,null,"41487a9b",null)),Ae=Me.exports,Ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"cards-container"}},[r("ul",e._l(e.playerCards,(function(t,a){return r("player-card",{key:a,attrs:{playerCard:t,index:a,shownCards:e.shownCards,lockedCards:e.lockedCards,counter:e.counter,topCardSelected:e.topCardSelected}})})),1)])},Re=[],Fe=(r("7db0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"player-card-container"}},[a("li",[e.hidden?a("img",{staticClass:"card-icon",attrs:{src:r("0291")},on:{click:e.handleClick,dblclick:e.lockCard}}):e._e(),e.hidden?e._e():a("img",{staticClass:"card-icon",attrs:{src:this.playerCard.image}})])])}),qe=[],Je={name:"player-card",props:["playerCard","shownCards","lockedCards","counter","topCardSelected"],data:function(){return{hidden:!0,lockedIn:!1,popoverShow:!1}},watch:{lockedCards:function(){0===this.lockedCards.length&&this.resetCard()}},methods:{handleClick:function(){cr.$emit("player-clicked-card",this.playerCard),this.shownCards<2&&0===this.counter&&this.showCard(),2===this.shownCards&&!0===this.topCardSelected&&this.switchCard()},showCard:function(){var e=this;this.hidden=!1,setTimeout((function(){e.hideCard()}),2e3),cr.$emit("shown-a-card",1)},revealCard:function(){!1===this.lockedIn?this.hidden=!0:this.hidden=!1},hideCard:function(){!1===this.lockedIn&&(this.hidden=!0)},lockCard:function(){cr.$emit("card-value",this.playerCard),this.lockedIn=!0,this.revealCard()},switchCard:function(){cr.$emit("player-card",this.playerCard),this.lockedIn=!0,this.revealCard()},resetCard:function(){this.hidden=!0,this.lockedIn=!1}}},Ve=Je,Ke=(r("068f"),Object(C["a"])(Ve,Fe,qe,!1,null,"6002d7a3",null)),We=Ke.exports,ze={name:"players-cards",props:["playerCards","lockedCards","counter","topCardSelected","userData"],data:function(){return{shownCards:0}},mounted:function(){var e=this;cr.$on("shown-a-card",(function(t){e.shownCards+=t})),cr.$on("player-clicked-card",(function(t){e.playerCards.find((function(e){return e===t}))}))},components:{"player-card":We},watch:{lockedCards:function(){0===this.lockedCards.length&&(this.shownCards=0)}}},Ye=ze,Qe=(r("e130"),Object(C["a"])(Ye,Ue,Re,!1,null,"e6775f48",null)),Xe=Qe.exports,Ze=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"game-header"}},[this.gameStatus||9!==this.currentHole?e._e():r("end-game",{attrs:{scoreCard:e.scoreCard,gameStatus:e.gameStatus}}),this.gameStatus?e._e():r("b-button",{attrs:{pill:"",id:"btn-main",name:"button"},on:{click:e.newGame}},[e._v("Play Again?")]),e.checkIfHoleFinished?r("b-button",{attrs:{pill:"",id:"btn-main"},on:{click:e.startNextHole}},[e._v("Next Round")]):e._e()],1)},et=[],tt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"end-game-modal"}},[r("b-modal",{attrs:{size:"lg",id:"my-modal",centered:"",title:"Game Result:","ok-only":""},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[r("score-card",{attrs:{scoreCard:e.scoreCard}})],1)],1)},rt=[],at={name:"end-game",props:["scoreCard","gameStatus"],data:function(){return{modalShow:!0}},components:{"score-card":A},watch:{gameStatus:function(){this.gameStatus||(this.modalShow=!0)}}},nt=at,st=Object(C["a"])(nt,tt,rt,!1,null,"6d2c9f3e",null),ot=st.exports,it={name:"game-header",props:["gameStatus","scoreCard","lockedCards","counter","currentHole"],data:function(){return{selectScoresPage:!1,modalShow:!1}},components:{"end-game":ot},mounted:function(){var e=this;cr.$on("view-leaderboard",(function(){e.selectScoresPage=!e.selectScoresPage}))},watch:{gameStatus:function(){this.gameStatus||(this.modalShow=!0)}},computed:{checkIfHoleFinished:function(){return this.currentHole>=1&&(4===this.counter||4===this.lockedCards.length)&&!0===this.gameStatus}},methods:{startNextHole:function(){cr.$emit("start-next-hole")},newGame:function(){cr.$emit("start-new-game")}}},ct=it,dt=(r("edf0"),Object(C["a"])(ct,Ze,et,!1,null,"b82cebce",null)),lt=dt.exports,ut=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"deck-container"}},[a("p",[e._v("Deck:")]),a("img",{class:[e.topCardStatus?e.selectedClass:e.unSelectedClass],attrs:{src:r("0291")},on:{click:e.drawNextCard}})])},ht=[],ft={name:"deck-list",props:["topCardStatus"],data:function(){return{selectedClass:"card-icon-greyed",unSelectedClass:"card-icon-original"}},methods:{drawNextCard:function(){cr.$emit("draw-next-card")}}},mt=ft,pt=(r("cddb"),Object(C["a"])(mt,ut,ht,!1,null,"5ff21db4",null)),gt=pt.exports,vt=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},bt=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h4",[e._v("Hint:")]),r("div",{attrs:{id:"info-container"}},[r("div",{attrs:{id:"info-box"}},[r("p",[r("b",[e._v("King:")]),e._v(" 0")]),r("p",[r("b",[e._v("5:")]),e._v(" -5")]),r("p",[r("b",[e._v("Pair:")]),e._v(" 0")]),r("p",[r("b",[e._v("4 of a kind:")]),e._v(" -30")])])])])}],_t={name:"info-box"},Ct=_t,wt=(r("c4fd"),Object(C["a"])(Ct,vt,bt,!1,null,"73f91652",null)),St=wt.exports,yt={name:"game",props:["gameDeck","userName","gameStatus","userData","gameMode"],data:function(){return{roundDeck:[],playerCards:null,topCard:null,currentCard:null,runningTotal:0,counter:0,currentHole:1,lockedCards:[],scoreCard:[],discardPile:[],drawnCard:!1,topCardStatus:!1,viewLeaderBoard:!1,topCardSelected:!1}},components:{"player-cards":Xe,"top-card":Ae,"score-card":A,"discard-pile":Be,"card-deck":gt,"info-box":St,"game-header":lt},mounted:function(){var e=this;cr.$on("player-card",(function(t){var r=e.playerCards.indexOf(t),a=e.topCard,n=e.playerCards.splice(r,1,a),s=e.lockedCards.filter((function(e){return a.value===e}));3===s.length?e.runningTotal=-30:1===s.length&"5"===a.value?e.runningTotal+=e.calculateScore(a.value):1===s.length?e.runningTotal-=e.calculateScore(a.value):e.runningTotal+=e.calculateScore(a.value),e.nextRound(a.value),e.discardPile.push(n),e.counter+=1,e.topCardSelected=!1})),cr.$on("card-value",(function(t){e.currentCard=t,e.counter+=1})),cr.$on("draw-next-card",(function(){e.drawNextCard(),e.topCardStatus=!0})),cr.$on("get-cards",(function(){e.getCards()})),cr.$on("setup-game",(function(){e.setupGame()})),cr.$on("start-next-hole",(function(){e.nextHole()})),cr.$on("start-new-game",(function(){e.setupNewGame()})),cr.$on("view-leaderboard",(function(){e.viewLeaderBoard=!e.viewLeaderBoard})),cr.$on("top-card-selected",(function(){e.topCardSelected=!e.topCardSelected}))},watch:{currentCard:function(){var e=this.currentCard.value,t=this.calculateScore(e),r=this.lockedCards.filter((function(t){return e===t}));3===r.length?this.runningTotal=-30:1===r.length&"5"===e?this.runningTotal+=t:1===r.length?this.runningTotal-=t:this.runningTotal+=t,this.nextRound(e)},playerCards:function(){null===this.topCard&&this.drawTopCard()},counter:function(){4===this.counter&&(this.scoreCard.push(this.runningTotal),cr.$emit("score-card",this.scoreCard))},scoreCard:function(){if(9===this.scoreCard.length){var e=this.getTotalScore();i.push({golfer:this.userData.username,score:e,card:this.scoreCard,edit:!1}),cr.$emit("game-status",!1);try{s.ref("users/"+this.userData.userID).child("games").push({golfer:this.userData.username,score:e,card:this.scoreCard,date:this.getDate(),edit:!1})}catch(t){console.log("fail",t)}}}},computed:{holesCompleted:function(){return this.scoreCard.length},checkIfHoleFinished:function(){return this.currentHole>=1&&4===this.counter&&4===this.lockedCards.length&&!0===this.gameStatus}},methods:{getCards:function(){this.getRoundDeck();for(var e=[],t=0;t<4;t++){var r=this.roundDeck.shift();e.push(r)}this.playerCards=e,this.playerCards.forEach((function(e){e.lockedIn=!1}))},getRoundDeck:function(){var e=this;return this.gameDeck.cards.forEach((function(t){e.roundDeck.push(t)})),this.shuffleDeck(this.roundDeck)},shuffleDeck:function(e){for(var t,r,a=e.length-1;a>0;a--)t=Math.floor(Math.random()*(a+1)),r=e[a],e[a]=e[t],e[t]=r},drawTopCard:function(){this.playerCards&&(this.topCard=this.roundDeck.shift())},calculateScore:function(e){switch(e){case"ACE":return 1;case"KING":return 0;case"QUEEN":return 10;case"JACK":return 10;case"5":return-5;default:return parseInt(e)}},setupGame:function(){this.playerCards=null,this.topCard=null,this.runningTotal=0,this.lockedCards=[],this.discardPile=[]},setupNewGame:function(){this.setupGame(),this.scoreCard=[],cr.$emit("score-card",this.scoreCard),this.counter=0,this.currentHole=1,this.roundDeck=[],this.getCards(),cr.$emit("game-status",!0),this.topCardStatus=!1},nextHole:function(){this.counter=0,this.currentHole+=1,this.roundDeck=[],this.setupGame(),this.getCards(),this.discardPile=[],this.topCardStatus=!1},nextRound:function(e){this.drawTopCard(),this.drawnCard=!1,this.lockedCards.push(e),this.topCardStatus=!1},drawNextCard:function(){!1===this.drawnCard&&(this.drawTopCard(),this.drawnCard=!0)},getTotalScore:function(){var e=0;return this.scoreCard.forEach((function(t){e+=t})),e},getDate:function(){var e=new Date,t=e.getDate()+"-"+(e.getMonth()+1)+"-"+e.getFullYear(),r=e.getHours()+":"+e.getMinutes(),a={date:t,time:r};return a}}},kt=yt,$t=(r("fea4"),Object(C["a"])(kt,De,Oe,!1,null,"37dc2244",null)),xt=$t.exports,Dt={name:"app",data:function(){return{deck:[],gameDeck:[],gameStatus:!1,tutorialStatus:!1,userName:null,scoreCard:[],userData:{},gameMode:null}},components:{"intro-screen":re,"logo-header":xe,Game:xt},mounted:function(){var e=this;this.getDeck(),fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then((function(e){return e.json()})).then((function(t){return e.deck=t})).then(setTimeout((function(){e.getDeck()}),1e3)),this.getUserData(),cr.$on("clicked-new-game",(function(){setTimeout((function(){cr.$emit("start-new-game")}),1e3),e.tutorialStatus=!0})),cr.$on("start-new-game",(function(t){e.gameMode=t})),cr.$on("username-selected",(function(t){e.userName=t})),cr.$on("game-status",(function(t){e.gameStatus=t})),cr.$on("reset-app",(function(){e.gameStatus=!1,e.tutorialStatus=!1,e.userName=null,e.gameMode=null,e.scoreCard=[]})),cr.$on("signed-out",(function(){e.userData={}})),cr.$on("register-user",(function(){e.getUserData()})),cr.$on("signed-in",(function(){e.getUserData()})),cr.$on("score-card",(function(t){e.scoreCard=t}))},methods:{getDeck:function(){var e=this;cr.$emit("setup-game");var t=this.deck.deck_id;fetch("https://deckofcardsapi.com/api/deck/".concat(t,"/draw/?count=52")).then((function(e){return e.json()})).then((function(t){return e.gameDeck=t}))},getUserData:function(){var e=this;if(c.currentUser){var t=c.currentUser.uid;s.ref().child("users").child(t).once("value",(function(t){e.userData=t.val()}))}}}},Ot=Dt,jt=(r("034f"),Object(C["a"])(Ot,l,u,!1,null,null,null)),Pt=jt.exports,Et=r("0ff2"),Tt=r("5f5b"),Gt=(r("f9e3"),r("2dd8"),r("45fc"),r("8c4f")),Bt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"score-container"}},[r("scores-page",{attrs:{gameStatus:e.gameStatus}})],1)},Nt=[],Lt={name:"leaderboard-container",props:["gameStatus"],components:{"scores-page":ge},methods:{seeScoresPage:function(){cr.$emit("view-leaderboard")}}},It=Lt,Ht=(r("de9e"),Object(C["a"])(It,Bt,Nt,!1,null,"5f9a2e90",null)),Mt=Ht.exports,At=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"main-container"}},[r("h2",[e._v("Welcome to Golf: The Card Game")]),r("div",{attrs:{id:"login-container"}},[r("register"),r("sign-in")],1)])},Ut=[],Rt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"register-container"}},[r("h4",{attrs:{id:"login-heading"}},[e._v("Register a user:")]),e.error?r("div",{staticClass:"error",attrs:{id:"register-form"}},[e._v(e._s(e.error.message))]):e._e(),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[r("b-form-group",{attrs:{id:"email",label:"Email:"}},[r("b-form-input",{attrs:{type:"email",required:"",placeholder:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("b-form-group",{attrs:{id:"username",label:"Golfer's Name:"}},[r("b-form-input",{attrs:{type:"text",required:"",placeholder:"username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),r("b-form-group",{attrs:{id:"password",label:"Password:"}},[r("b-form-input",{attrs:{type:"password",required:"",placeholder:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("b-button",{attrs:{id:"btn-main",type:"submit"}},[e._v("Sign Up")])],1)],1)},Ft=[],qt={data:function(){return{email:"",password:"",username:"",error:""}},methods:{handleSubmit:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:try{o.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(){var e=c.currentUser.uid;s.ref().child("users").child(e).set({email:t.email,username:t.username,games:{},userID:e}),cr.$emit("register-user")})).then((function(){t.$router.replace({name:"home"})}))}catch(r){console.log("fail",r)}case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},Jt=qt,Vt=(r("59da"),Object(C["a"])(Jt,Rt,Ft,!1,null,"ff27080c",null)),Kt=Vt.exports,Wt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"sign-in-container"}},[r("h4",{attrs:{id:"login-heading"}},[e._v("Sign in:")]),r("b-form",{on:{submit:function(t){return t.preventDefault(),e.handleSignIn(t)}}},[r("b-form-group",{attrs:{id:"sign-in",label:"Email:"}},[r("b-form-input",{attrs:{type:"email",placeholder:"sign in"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),r("b-form-group",{attrs:{id:"password",label:"Password:"}},[r("b-form-input",{attrs:{type:"password",placeholder:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),r("b-button",{attrs:{id:"btn-main",type:"submit"}},[e._v("Sign In")])],1),e.error?r("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):e._e()],1)},zt=[],Yt={name:"sign-in",data:function(){return{email:"",password:"",error:""}},methods:{handleSignIn:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.auth().signInWithEmailAndPassword(this.email,this.password);case 3:e.sent,this.$router.replace({name:"home"}),cr.$emit("signed-in"),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),window.alert("Please try entering your details again!"),console.log("fail",e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()}},Qt=Yt,Xt=(r("5dc0"),Object(C["a"])(Qt,Wt,zt,!1,null,"5d875277",null)),Zt=Xt.exports,er={name:"login",components:{register:Kt,"sign-in":Zt}},tr=er,rr=(r("a0cc"),Object(C["a"])(tr,At,Ut,!1,null,"63a98951",null)),ar=rr.exports;d["default"].use(Gt["a"]);var nr=[{path:"/",name:"home",component:re,meta:{requiresAuth:!0}},{path:"/game",name:"game",component:xt,meta:{requiresAuth:!0}},{path:"/leaderboard",name:"leaderboard",component:Mt},{path:"/rules",name:"rules",component:Se},{path:"/login",name:"login",component:ar}],sr=new Gt["a"]({routes:nr});sr.beforeEach((function(e,t,r){var a=e.matched.some((function(e){return e.meta.requiresAuth})),n=o.auth().currentUser;a&&!n?r("/login"):r()}));var or=sr;d["default"].use(Et),d["default"].use(Tt["a"]);var ir,cr=new d["default"],dr="hi";d["default"].config.productionTip=!1,o.auth().onAuthStateChanged((function(e){e&&s.ref().child("users").child(e.uid).once("value",(function(e){e.val()})),ir||(ir=new d["default"]({router:or,test:dr,render:function(e){return e(Pt)}}).$mount("#app"))}))},5869:function(e,t,r){},"59da":function(e,t,r){"use strict";var a=r("1b76"),n=r.n(a);n.a},"5dc0":function(e,t,r){"use strict";var a=r("e0eb"),n=r.n(a);n.a},"61cb":function(e,t,r){"use strict";var a=r("1bdc"),n=r.n(a);n.a},"6ce8":function(e,t,r){},"6dd5":function(e,t,r){},"74b6":function(e,t,r){e.exports=r.p+"img/profile-default.9c3d174f.jpg"},"7a22":function(e,t,r){"use strict";var a=r("86df"),n=r.n(a);n.a},"85ec":function(e,t,r){},"86df":function(e,t,r){},"86f1":function(e,t,r){},"8d10":function(e,t,r){},"9d08":function(e,t,r){},"9d2f":function(e,t,r){},a0cc:function(e,t,r){"use strict";var a=r("eb0c"),n=r.n(a);n.a},a14d:function(e,t,r){},aaa2:function(e,t,r){},b5da:function(e,t,r){"use strict";var a=r("c58b"),n=r.n(a);n.a},b669:function(e,t,r){},b7c8:function(e,t,r){"use strict";var a=r("f161"),n=r.n(a);n.a},be06:function(e,t,r){"use strict";var a=r("c905"),n=r.n(a);n.a},c4fd:function(e,t,r){"use strict";var a=r("9d08"),n=r.n(a);n.a},c58b:function(e,t,r){},c905:function(e,t,r){},cb3b:function(e,t,r){"use strict";var a=r("b669"),n=r.n(a);n.a},cddb:function(e,t,r){"use strict";var a=r("f158"),n=r.n(a);n.a},de9e:function(e,t,r){"use strict";var a=r("8d10"),n=r.n(a);n.a},e0eb:function(e,t,r){},e130:function(e,t,r){"use strict";var a=r("9d2f"),n=r.n(a);n.a},e34b:function(e,t,r){},e570:function(e,t,r){"use strict";var a=r("6dd5"),n=r.n(a);n.a},eb0c:function(e,t,r){},edf0:function(e,t,r){"use strict";var a=r("5869"),n=r.n(a);n.a},f158:function(e,t,r){},f161:function(e,t,r){},f4e8:function(e,t,r){e.exports=r.p+"img/GameLogo.e1210845.svg"},f768:function(e,t,r){"use strict";var a=r("a14d"),n=r.n(a);n.a},fea4:function(e,t,r){"use strict";var a=r("86f1"),n=r.n(a);n.a}});
//# sourceMappingURL=app.c6d87dfd.js.map