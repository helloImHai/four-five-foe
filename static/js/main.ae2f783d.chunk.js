(this["webpackJsonpfour-five-foe"]=this["webpackJsonpfour-five-foe"]||[]).push([[0],{137:function(e,t,n){},176:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),i=n(12),o=n.n(i),s=(n(137),n(228)),l=n(219),j=n(112),u=n(9),b=n(17),d=n(208),O=n(210),x={0:"x","-1":"_",1:"o"},m=Object(d.a)((function(e){var t=e.palette;return{unpicked:{borderRadius:"0px",color:t.background.default,"&:disabled":{color:t.background.default},"&:hover":{color:"rgb(0,0,0,0)"}},picked:{borderRadius:"0px","&:disabled":{color:t.text.primary}},winningCell:{borderRadius:"0px","&:disabled":{backgroundColor:t.success.light,color:t.text.primary}},lastMove:{borderRadius:"0px","&:disabled":{backgroundColor:"#ffb6c1",color:t.text.primary}}}}));function h(e){var t=m(),n=e.col,c=e.row,r=e.player,i=e.clicked,o=e.isDisabled,s=e.isWinningCell,l=e.isLastMove,j=s?t.winningCell:l?t.lastMove:-1===r?t.unpicked:t.picked;return Object(a.jsx)(O.a,{onClick:function(){return i(c,n)},disabled:o,className:j,style:{width:"100%"},children:x[r]})}var f=n(220),p=n(221),g=n(223),y=n(222),v=n(212),C=n(214),w=n(110),k=n.n(w),N=r.a.createContext(),P=r.a.createContext();function I(){return Object(c.useContext)(N)}function S(e){var t=e.children,n=Object(c.useState)(),r=Object(b.a)(n,2),i=r[0],o=r[1];function s(){var e=k()("https://backboardd.herokuapp.com/",{transports:["websocket"]});return o(e),e}return Object(c.useEffect)((function(){var e=s();if(null!=e)return function(){return e.disconnect()}}),[]),Object(a.jsx)(N.Provider,{value:i,children:Object(a.jsx)(P.Provider,{value:s,children:t})})}var T=r.a.createContext(),_=r.a.createContext();function D(){return Object(c.useContext)(T)}function W(){return Object(c.useContext)(_)}function F(e){var t=e.children,n=Object(c.useState)({name:"",gameId:"",playerId:"",playerNumber:-1,opponentDisconnected:!1}),r=Object(b.a)(n,2),i=r[0],o=r[1];return Object(a.jsx)(T.Provider,{value:i,children:Object(a.jsx)(_.Provider,{value:o,children:t})})}var E=n(213),R=n(115),z=Object(d.a)((function(e){return{player:{height:"45px",paddingTop:5},current:{paddingTop:5,background:e.palette.success.main}}}));function G(e){var t=e.players,n=e.currentPlayer,c=D(),r=b(c.name),i=b(t[Object.keys(t).filter((function(e){return e!==c.playerId})).reduce((function(e,t){return t}),null)]),o=z(),l="",j="";if(null!=n){var u=n===c.playerNumber;l=u?o.current:"",j=u?"":o.current}function b(e){return null==e?" ":e.length>8?e.substring(0,7)+"...":e}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(v.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(a.jsx)(v.a,{item:!0,xs:5,sm:3,children:Object(a.jsx)(E.a,{className:"".concat(o.player," ").concat(l),elevation:5,children:Object(a.jsx)(R.a,{variant:"h4",children:r})})}),Object(a.jsx)(v.a,{item:!0,xs:5,sm:3,children:Object(a.jsx)(E.a,{className:"".concat(o.player," ").concat(j),elevation:5,children:Object(a.jsx)(R.a,{variant:"h4",children:i})})})]}),Object(a.jsx)(s.a,{m:2})]})}var B=n(14);function H(){var e=I(),t=Object(B.e)(),n=Object(c.useContext)(P);return Object(a.jsx)(C.a,{color:"secondary",variant:"contained",onClick:function(){t.push("/four-five-foe/"),e.disconnect(),n()},children:"Home"})}var M=n(215);function L(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(s.a,{display:"flex",flexDirection:"row",justifyContent:"center",children:Object(a.jsx)(M.a,{})})})}var J=n(73),A=n(5),Y=n(230),q=n(216),X=n(217),K=n(218),Q=n(70),U=n.n(Q),V={intro:{title:"Welcome to Four-Five-Foe",message:"Hello everyone! This is a two-player game I used to play back in \n    secondary school. It's really similar to tic-tac-toe, but you win with \n    either an open 4, or with 5 in a row. Due to this slight variation in the \n    rules, I'm calling it Four-Five-Foe!",closingText:"Play Now"},joinFail:{title:"Join Room Failure",message:"The room you tried to join does not exists or is full.",closingText:"Okay"},anotherPlayerDisconnect:{title:"Your Opponent has disconnected",message:"The reason you're seeing this message is because your friend doesn't\n     want to play with you. ",closingText:"\ud83d\ude22"},win:{title:"Ezpz lmn sqzy!",message:"Click New Game to play again!",closingText:"Nice"},lose:{title:"Well, you win some, you lose some.",message:"Click New Game to play again!",closingText:"\ud83d\ude22"}},Z=Object(A.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,n=e.classes,c=e.onClose,r=Object(J.a)(e,["children","classes","onClose"]);return Object(a.jsxs)(q.a,Object(u.a)(Object(u.a)({disableTypography:!0,className:n.root},r),{},{children:[Object(a.jsx)(R.a,{variant:"h6",children:t}),c?Object(a.jsx)(O.a,{"aria-label":"close",className:n.closeButton,onClick:c,children:Object(a.jsx)(U.a,{})}):null]}))})),$=Object(A.a)((function(e){return{root:{padding:e.spacing(2)}}}))(X.a),ee=Object(A.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(K.a);function te(e){var t=e.isOpen,n=e.setIsOpen,c=e.type,r=function(){n(!1)},i=V[c],o=i.title,s=i.message,l=i.closingText;return Object(a.jsx)("div",{children:Object(a.jsxs)(Y.a,{onClose:r,"aria-labelledby":"customized-dialog-title",open:t,children:[Object(a.jsx)(Z,{id:"customized-dialog-title",onClose:r,children:o}),Object(a.jsx)($,{dividers:!0,children:Object(a.jsx)(R.a,{gutterBottom:!0,children:s})}),Object(a.jsx)(ee,{children:Object(a.jsx)(C.a,{autoFocus:!0,onClick:r,color:"primary",children:l})})]})})}var ne=Object(d.a)((function(e){return{gamegrid:{overflowX:"auto",maxHeight:"60vh",border:5,borderColor:e.palette.text.secondary,borderStyle:"solid",borderRadius:5},table:{width:"100%"},tableBody:{position:"relative"},cell:{padding:0,border:1,borderColor:"#aaa",borderStyle:"solid"}}}));function ae(){var e=ne(),t=Object(c.useState)({}),n=Object(b.a)(t,2),r=n[0],i=n[1],o=Object(c.useState)(!1),d=Object(b.a)(o,2),O=d[0],x=d[1],m=Object(c.useState)(!1),w=Object(b.a)(m,2),k=w[0],N=w[1],P=r.gameGrid,S=r.currentPlayer,T=r.isGameOver,_=r.players,F=D(),E=W(),R=Object(c.useRef)(1),z=I(),M=Object(B.e)();function J(e,t){i((function(n){var a=n.gameGrid,c=n.currentPlayer,r=n.lastMove,i=n.count,o=Object(j.a)(a),s=(c+1)%2;return o[e][t]=Object(u.a)(Object(u.a)({},a[e][t]),{},{player:c,isLastMove:!0}),null!=r&&(o[r[0]][r[1]].isLastMove=!1),Object(u.a)(Object(u.a)({},n),{},{gameGrid:o,currentPlayer:s,lastMove:[e,t],count:i+1})})),z.emit("clickTile",[e,t])}return Object(c.useEffect)((function(){""===F.gameId&&M.push("/four-five-foe")}),[M,F]),Object(c.useEffect)((function(){if(null!=z)return z.on("game_state",(function(e){i(e)})),z.on("another_player_disconnected",(function(){E((function(e){return Object(u.a)(Object(u.a)({},e),{},{opponentDisconnected:!0,playerNumber:0})})),M.push("/four-five-foe/lobby")})),function(){return z.off()}}),[z,E,M]),Object(c.useEffect)((function(){T&&(S===F.playerNumber?x(!0):N(!0))}),[T,S,x,N,F]),Object(c.useEffect)((function(){R.current=R.current+1})),null==P?Object(a.jsx)(L,{}):Object(a.jsxs)(l.a,{maxWidth:"md",children:[Object(a.jsx)(te,{isOpen:O,setIsOpen:x,type:"win"}),Object(a.jsx)(te,{isOpen:k,setIsOpen:N,type:"lose"}),Object(a.jsx)(G,{players:_,currentPlayer:S}),Object(a.jsx)(v.a,{container:!0,className:e.gamegrid,children:Object(a.jsx)(f.a,{className:e.table,children:Object(a.jsx)(p.a,{className:e.tableBody,children:P.map((function(t,n){return Object(a.jsx)(y.a,{children:t.map((function(t,n){var c=t.row,r=t.col,i=t.player,o=t.isWinningCell,s=t.isLastMove;return Object(a.jsx)(g.a,{className:e.cell,style:{minWidth:"50px"},align:"center",size:"small",children:Object(a.jsx)(h,{row:c,col:r,player:i,isDisabled:-1!==i||F.playerNumber!==S||T,isWinningCell:o,isLastMove:s,clicked:J})},100*c+r)}))},n)}))})})}),Object(a.jsx)("br",{}),Object(a.jsxs)(s.a,{display:"flex",flexDirection:"row",justifyContent:"center",children:[Object(a.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){z.emit("reset_game")},children:"New Game"}),Object(a.jsx)(s.a,{m:1}),Object(a.jsx)(H,{})]})]})}var ce=Object(A.a)({root:{fontSize:16,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"#f9a602",borderColor:"#f9a602","&:hover":{backgroundColor:"#D68E22",borderColor:"#D68E02",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#FEC34E",borderColor:"#FEC34E"}}})(C.a),re=Object(A.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,n=e.classes,c=e.onClose,r=Object(J.a)(e,["children","classes","onClose"]);return Object(a.jsxs)(q.a,Object(u.a)(Object(u.a)({disableTypography:!0,className:n.root},r),{},{children:[Object(a.jsx)(R.a,{variant:"h6",children:t}),c?Object(a.jsx)(O.a,{"aria-label":"close",className:n.closeButton,onClick:c,children:Object(a.jsx)(U.a,{})}):null]}))})),ie=Object(A.a)((function(e){return{root:{padding:e.spacing(2)}}}))(X.a),oe=Object(A.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(K.a);function se(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],i=function(){r(!1)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(s.a,{m:3}),n?Object(a.jsxs)(Y.a,{onClose:i,"aria-labelledby":"customized-dialog-title",open:n,children:[Object(a.jsx)(re,{id:"customized-dialog-title",onClose:i,children:"HOW TO PLAY"}),Object(a.jsxs)(ie,{dividers:!0,children:[Object(a.jsx)(R.a,{gutterBottom:!0,children:'It\'s just like tic-tac-toe but the board is much bigger and you win with 5 instead of 3. This means that an "open" 4 would also result in a win because the opponent will have no way to block you!'}),Object(a.jsx)(R.a,{gutterBottom:!0,children:"I meant to write more for this part and include pictures but I'm lazy, will get back to this if I have time after deployment."})]}),Object(a.jsx)(oe,{children:Object(a.jsx)(C.a,{autoFocus:!0,onClick:i,color:"primary",children:"READY"})})]}):Object(a.jsx)(s.a,{display:"flex",flexDirection:"row",justifyContent:"center",children:Object(a.jsx)(ce,{variant:"contained",color:"primary",onClick:function(){return r(!0)},children:"Instructions"})})]})}var le=Object(d.a)((function(e){return{indexContainer:{marginLeft:"auto",textAlign:"center"}}}));function je(){var e=le();return Object(a.jsxs)("div",{children:[Object(a.jsx)(s.a,{className:e.game,children:Object(a.jsx)(l.a,{className:e.indexContainer,maxWidth:"lg",children:Object(a.jsx)(ae,{})})}),Object(a.jsx)(se,{})]})}var ue=n(227),be=n(224);function de(){var e=Object(B.e)(),t=I(),n=W(),r=D(),i=Object(c.useState)(!1),o=Object(b.a)(i,2),s=o[0],j=o[1],d=Object(c.useState)(!0),O=Object(b.a)(d,2),x=O[0],m=O[1],h=""!==r.name;return Object(c.useEffect)((function(){if(null!=t)return h&&(m(!1),t.emit("set_name",r.name)),t.on("set_player_id",(function(e){n((function(t){return Object(u.a)(Object(u.a)({},t),{},{playerId:e})}))})),t.on("joined_room",(function(t){n((function(e){return Object(u.a)(Object(u.a)({},e),{},{gameId:t})})),e.push("/four-five-foe/lobby")})),t.on("join_room_failure",(function(){j(!0)})),function(){return t.off()}}),[t,h,n,r,e]),null==t?Object(a.jsx)(L,{}):Object(a.jsxs)(l.a,{maxWidth:"md",children:[Object(a.jsx)(te,{isOpen:x,setIsOpen:m,type:"intro"}),Object(a.jsx)(te,{isOpen:s,setIsOpen:j,type:"joinFail"}),Object(a.jsx)(me,{hasSetName:h}),h?Object(a.jsx)(xe,{}):"",Object(a.jsx)(se,{})]})}var Oe=Object(d.a)((function(e){return{gameTypePaper:{minHeight:170,padding:20,"&:hover":{backgroundColor:e.palette.action.hover,boxShadow:"3px 4px ".concat(e.palette.background.default,";")}}}}));function xe(){var e=I(),t=W(),n=Object(c.useRef)(),r=Oe();return Object(a.jsxs)(v.a,{container:!0,spacing:3,children:[Object(a.jsx)(v.a,{item:!0,xs:6,children:Object(a.jsxs)(E.a,{className:r.gameTypePaper,elevation:5,children:[Object(a.jsx)(R.a,{variant:"h4",children:"Create a new game"}),Object(a.jsx)(s.a,{m:3}),Object(a.jsx)(R.a,{children:"Click on this to create a new game and invite a friend to join you!"}),Object(a.jsx)(s.a,{m:3}),Object(a.jsx)(C.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){t((function(e){return Object(u.a)(Object(u.a)({},e),{},{playerNumber:0})})),e.emit("create_room")},children:"New Game"})]})}),Object(a.jsx)(v.a,{item:!0,xs:6,children:Object(a.jsxs)(E.a,{className:r.gameTypePaper,elevation:5,children:[Object(a.jsx)(R.a,{variant:"h4",children:"Join a game"}),Object(a.jsx)(s.a,{m:3}),Object(a.jsx)(ue.a,{inputRef:n,label:"Game id",variant:"outlined",color:"secondary",size:"small",fullWidth:!0,style:{marginRight:10}}),Object(a.jsx)(s.a,{m:3}),Object(a.jsx)(C.a,{fullWidth:!0,variant:"contained",color:"secondary",onClick:function(){t((function(e){return Object(u.a)(Object(u.a)({},e),{},{playerNumber:1})})),e.emit("join_room",n.current.value)},children:"Join Game"})]})})]})}function me(e){var t=e.hasSetName,n=I(),r=D(),i=W(),o=Object(c.useRef)();return Object(a.jsxs)(a.Fragment,{children:[t?Object(a.jsxs)(s.a,{display:"flex",flexDirection:"row",children:[Object(a.jsxs)(R.a,{variant:"h3",color:"textPrimary",children:["Hello, ",r.name]}),Object(a.jsx)(s.a,{children:Object(a.jsx)(O.a,{size:"small",onClick:function(){n.emit("set_name",""),i((function(e){return Object(u.a)(Object(u.a)({},e),{},{name:""})}))},children:Object(a.jsx)(be.a,{})})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(R.a,{variant:"h3",color:"textPrimary",children:"Hello, what's your name?"}),Object(a.jsx)(s.a,{m:3}),Object(a.jsx)(ue.a,{xs:4,inputRef:o,label:"Name",variant:"outlined",size:"small",style:{marginRight:10,minWidth:"50%"}}),Object(a.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){""!==o.current.value?(n.emit("set_name",o.current.value),i((function(e){return Object(u.a)(Object(u.a)({},e),{},{name:o.current.value})}))):alert("Please, I want to know your name")},children:"Set Name"})]}),Object(a.jsx)(s.a,{m:3})]})}var he={waiting:{title:"Waiting for Player 2...",details:"Get a friend to join this room!"},ready:{title:"We're all set!...",details:"Let's get this party started!"}};function fe(e){var t=e.state,n=he[t];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(R.a,{variant:"h6",color:"textPrimary",children:n.title}),Object(a.jsx)(R.a,{color:"textPrimary",children:n.details})]})}function pe(){var e=Object(B.e)(),t=I(),n=Object(c.useState)(!1),r=Object(b.a)(n,2),i=r[0],o=r[1],j=Object(c.useState)(),d=Object(b.a)(j,2),O=d[0],x=d[1],m=D(),h=m.name,f=m.gameId,p=D(),g=W();return Object(c.useEffect)((function(){""===p.gameId&&e.push("/four-five-foe")}),[e,p]),Object(c.useEffect)((function(){if(null!=t)return t.on("game_started",(function(){e.push("/four-five-foe/game")})),t.on("game_state",(function(e){var t=e.players;x((function(e){return 2===Object.keys(t).length?o(!0):o(!1),t}))})),t.on("another_player_disconnected",(function(){g((function(e){return Object(u.a)(Object(u.a)({},e),{},{playerNumber:0})}))})),function(){return t.off()}}),[t,e,o,g,x]),Object(a.jsxs)(l.a,{maxWidth:"md",children:[Object(a.jsx)(te,{isOpen:p.opponentDisconnected,setIsOpen:function(){return g((function(e){return Object(u.a)(Object(u.a)({},e),{},{opponentDisconnected:!e.opponentDisconnected})}))},type:"anotherPlayerDisconnect"}),Object(a.jsxs)(v.a,{container:!0,direction:"column",justify:"center",align:"center",children:[Object(a.jsx)(v.a,{item:!0,children:null==O?"":Object(a.jsx)(G,{players:O})}),Object(a.jsxs)(v.a,{item:!0,children:[Object(a.jsxs)(R.a,{variant:"h3",color:"textPrimary",children:["Hi ","".concat(h),"!"]}),Object(a.jsx)(s.a,{m:1}),Object(a.jsx)(fe,{state:i?"ready":"waiting"}),Object(a.jsx)(s.a,{m:1}),Object(a.jsxs)(R.a,{variant:"h5",color:"textPrimary",children:["Game ID: ",Object(a.jsx)("strong",{children:"".concat(f)})]})]}),Object(a.jsx)(v.a,{item:!0,children:Object(a.jsx)(s.a,{m:3})}),Object(a.jsx)(v.a,{item:!0,children:Object(a.jsxs)(s.a,{display:"flex",flexDirection:"row",justifyContent:"center",children:[Object(a.jsx)(C.a,{variant:"contained",color:"primary",disabled:!i,onClick:function(){t.emit("start_game")},children:i?"Start Game":"Waiting for player 2"}),Object(a.jsx)(s.a,{m:1}),Object(a.jsx)(H,{})]})})]}),Object(a.jsx)(se,{})]})}var ge=n(111),ye=n(225),ve=r.a.createContext(),Ce=r.a.createContext();function we(e){var t=e.children,n=Object(c.useState)(!0),r=Object(b.a)(n,2),i=r[0],o=r[1],s=i?"dark":"light",l=Object(ge.a)({palette:{type:s}});return Object(a.jsx)(ye.a,{theme:l,children:Object(a.jsx)(ve.Provider,{value:i,children:Object(a.jsx)(Ce.Provider,{value:o,children:t})})})}var ke=n(226),Ne=n(231);function Pe(){var e=Object(c.useContext)(Ce),t=Object(c.useContext)(ve),n=t?"\ud83c\udf19":"\u2600\ufe0f";return Object(a.jsx)(l.a,{maxWidth:"md",children:Object(a.jsx)(s.a,{display:"flex",justifyContent:"flex-end",paddingBottom:2,children:Object(a.jsx)(ke.a,{label:n,labelPlacement:"start",control:Object(a.jsx)(Ne.a,{checked:t,onChange:function(){return e((function(e){return!e}))}})})})})}var Ie=n(43),Se=Object(d.a)({main:{minHeight:"95vh"}});var Te=function(){var e=Se();return Object(a.jsx)(we,{children:Object(a.jsx)(S,{children:Object(a.jsx)(F,{children:Object(a.jsxs)(s.a,{bgcolor:"background.default",paddingTop:"5vh",className:e.main,children:[Object(a.jsx)(Pe,{}),Object(a.jsxs)(Ie.a,{children:[Object(a.jsx)(B.a,{path:"/four-five-foe/",exact:!0,component:de}),Object(a.jsx)(B.a,{path:"/four-five-foe/lobby",component:pe}),Object(a.jsx)(B.a,{path:"/four-five-foe/game",component:je})]})]})})})})};o.a.render(Object(a.jsx)(Te,{}),document.getElementById("root"))}},[[176,1,2]]]);
//# sourceMappingURL=main.ae2f783d.chunk.js.map