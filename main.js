var q,m,ye,Tt,M,ge,ke,Se,Ce,ee,Q,X,Nt,L={},we=[],jt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,V=Array.isArray;function w(e,t){for(var n in t)e[n]=t[n];return e}function te(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function $(e,t,n){var o,a,i,l={};for(i in t)i=="key"?o=t[i]:i=="ref"?a=t[i]:l[i]=t[i];if(arguments.length>2&&(l.children=arguments.length>3?q.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)l[i]===void 0&&(l[i]=e.defaultProps[i]);return R(e,l,o,a,null)}function R(e,t,n,o,a){var i={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:a??++ye,__i:-1,__u:0};return a==null&&m.vnode!=null&&m.vnode(i),i}function N(e){return e.children}function W(e,t){this.props=e,this.context=t}function F(e,t){if(t==null)return e.__?F(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?F(e):null}function Te(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Te(e)}}function xe(e){(!e.__d&&(e.__d=!0)&&M.push(e)&&!G.__r++||ge!==m.debounceRendering)&&((ge=m.debounceRendering)||ke)(G)}function G(){for(var e,t,n,o,a,i,l,u=1;M.length;)M.length>u&&M.sort(Se),e=M.shift(),u=M.length,e.__d&&(n=void 0,a=(o=(t=e).__v).__e,i=[],l=[],t.__P&&((n=w({},o)).__v=o.__v+1,m.vnode&&m.vnode(n),ne(t.__P,n,o,t.__n,t.__P.namespaceURI,32&o.__u?[a]:null,i,a??F(o),!!(32&o.__u),l),n.__v=o.__v,n.__.__k[n.__i]=n,Ee(i,n,l),n.__e!=a&&Te(n)));G.__r=0}function Ne(e,t,n,o,a,i,l,u,_,c,f){var r,d,p,y,S,k,g=o&&o.__k||we,x=t.length;for(_=Et(n,t,g,_,x),r=0;r<x;r++)(p=n.__k[r])!=null&&(d=p.__i===-1?L:g[p.__i]||L,p.__i=r,k=ne(e,p,d,a,i,l,u,_,c,f),y=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&oe(d.ref,null,p),f.push(p.ref,p.__c||y,p)),S==null&&y!=null&&(S=y),4&p.__u||d.__k===p.__k?_=je(p,_,e):typeof p.type=="function"&&k!==void 0?_=k:y&&(_=y.nextSibling),p.__u&=-7);return n.__e=S,_}function Et(e,t,n,o,a){var i,l,u,_,c,f=n.length,r=f,d=0;for(e.__k=new Array(a),i=0;i<a;i++)(l=t[i])!=null&&typeof l!="boolean"&&typeof l!="function"?(_=i+d,(l=e.__k[i]=typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?R(null,l,null,null,null):V(l)?R(N,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?R(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l).__=e,l.__b=e.__b+1,u=null,(c=l.__i=Mt(l,n,_,r))!==-1&&(r--,(u=n[c])&&(u.__u|=2)),u==null||u.__v===null?(c==-1&&(a>f?d--:a<f&&d++),typeof l.type!="function"&&(l.__u|=4)):c!=_&&(c==_-1?d--:c==_+1?d++:(c>_?d--:d++,l.__u|=4))):e.__k[i]=null;if(r)for(i=0;i<f;i++)(u=n[i])!=null&&(2&u.__u)==0&&(u.__e==o&&(o=F(u)),Fe(u,u));return o}function je(e,t,n){var o,a;if(typeof e.type=="function"){for(o=e.__k,a=0;o&&a<o.length;a++)o[a]&&(o[a].__=e,t=je(o[a],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=F(e)),n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Mt(e,t,n,o){var a,i,l=e.key,u=e.type,_=t[n];if(_===null&&e.key==null||_&&l==_.key&&u===_.type&&(2&_.__u)==0)return n;if(o>(_!=null&&(2&_.__u)==0?1:0))for(a=n-1,i=n+1;a>=0||i<t.length;){if(a>=0){if((_=t[a])&&(2&_.__u)==0&&l==_.key&&u===_.type)return a;a--}if(i<t.length){if((_=t[i])&&(2&_.__u)==0&&l==_.key&&u===_.type)return i;i++}}return-1}function be(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||jt.test(t)?n:n+"px"}function U(e,t,n,o,a){var i;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||be(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||be(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")i=t!=(t=t.replace(Ce,"$1")),t=t.toLowerCase()in e||t=="onFocusOut"||t=="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?o?n.t=o.t:(n.t=ee,e.addEventListener(t,i?X:Q,i)):e.removeEventListener(t,i?X:Q,i);else{if(a=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function ve(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.u==null)t.u=ee++;else if(t.u<n.t)return;return n(m.event?m.event(t):t)}}}function ne(e,t,n,o,a,i,l,u,_,c){var f,r,d,p,y,S,k,g,x,P,T,B,I,me,O,D,Z,C=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(_=!!(32&n.__u),i=[u=t.__e=n.__e]),(f=m.__b)&&f(t);e:if(typeof C=="function")try{if(g=t.props,x="prototype"in C&&C.prototype.render,P=(f=C.contextType)&&o[f.__c],T=f?P?P.props.value:f.__:o,n.__c?k=(r=t.__c=n.__c).__=r.__E:(x?t.__c=r=new C(g,T):(t.__c=r=new W(g,T),r.constructor=C,r.render=$t),P&&P.sub(r),r.props=g,r.state||(r.state={}),r.context=T,r.__n=o,d=r.__d=!0,r.__h=[],r._sb=[]),x&&r.__s==null&&(r.__s=r.state),x&&C.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=w({},r.__s)),w(r.__s,C.getDerivedStateFromProps(g,r.__s))),p=r.props,y=r.state,r.__v=t,d)x&&C.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),x&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(x&&C.getDerivedStateFromProps==null&&g!==p&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(g,T),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(g,r.__s,T)===!1||t.__v==n.__v)){for(t.__v!=n.__v&&(r.props=g,r.state=r.__s,r.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(z){z&&(z.__=t)}),B=0;B<r._sb.length;B++)r.__h.push(r._sb[B]);r._sb=[],r.__h.length&&l.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(g,r.__s,T),x&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(p,y,S)})}if(r.context=T,r.props=g,r.__P=e,r.__e=!1,I=m.__r,me=0,x){for(r.state=r.__s,r.__d=!1,I&&I(t),f=r.render(r.props,r.state,r.context),O=0;O<r._sb.length;O++)r.__h.push(r._sb[O]);r._sb=[]}else do r.__d=!1,I&&I(t),f=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++me<25);r.state=r.__s,r.getChildContext!=null&&(o=w(w({},o),r.getChildContext())),x&&!d&&r.getSnapshotBeforeUpdate!=null&&(S=r.getSnapshotBeforeUpdate(p,y)),D=f,f!=null&&f.type===N&&f.key==null&&(D=Me(f.props.children)),u=Ne(e,V(D)?D:[D],t,n,o,a,i,l,u,_,c),r.base=t.__e,t.__u&=-161,r.__h.length&&l.push(r),k&&(r.__E=r.__=null)}catch(z){if(t.__v=null,_||i!=null)if(z.then){for(t.__u|=_?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;i[i.indexOf(u)]=null,t.__e=u}else for(Z=i.length;Z--;)te(i[Z]);else t.__e=n.__e,t.__k=n.__k;m.__e(z,t,n)}else i==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):u=t.__e=Ft(n.__e,t,n,o,a,i,l,_,c);return(f=m.diffed)&&f(t),128&t.__u?void 0:u}function Ee(e,t,n){for(var o=0;o<n.length;o++)oe(n[o],n[++o],n[++o]);m.__c&&m.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(i){i.call(a)})}catch(i){m.__e(i,a.__v)}})}function Me(e){return typeof e!="object"||e==null?e:V(e)?e.map(Me):w({},e)}function Ft(e,t,n,o,a,i,l,u,_){var c,f,r,d,p,y,S,k=n.props,g=t.props,x=t.type;if(x=="svg"?a="http://www.w3.org/2000/svg":x=="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),i!=null){for(c=0;c<i.length;c++)if((p=i[c])&&"setAttribute"in p==!!x&&(x?p.localName==x:p.nodeType==3)){e=p,i[c]=null;break}}if(e==null){if(x==null)return document.createTextNode(g);e=document.createElementNS(a,x,g.is&&g),u&&(m.__m&&m.__m(t,i),u=!1),i=null}if(x===null)k===g||u&&e.data===g||(e.data=g);else{if(i=i&&q.call(e.childNodes),k=n.props||L,!u&&i!=null)for(k={},c=0;c<e.attributes.length;c++)k[(p=e.attributes[c]).name]=p.value;for(c in k)if(p=k[c],c!="children"){if(c=="dangerouslySetInnerHTML")r=p;else if(!(c in g)){if(c=="value"&&"defaultValue"in g||c=="checked"&&"defaultChecked"in g)continue;U(e,c,null,p,a)}}for(c in g)p=g[c],c=="children"?d=p:c=="dangerouslySetInnerHTML"?f=p:c=="value"?y=p:c=="checked"?S=p:u&&typeof p!="function"||k[c]===p||U(e,c,p,k[c],a);if(f)u||r&&(f.__html===r.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(r&&(e.innerHTML=""),Ne(t.type==="template"?e.content:e,V(d)?d:[d],t,n,o,x=="foreignObject"?"http://www.w3.org/1999/xhtml":a,i,l,i?i[0]:n.__k&&F(n,0),u,_),i!=null)for(c=i.length;c--;)te(i[c]);u||(c="value",x=="progress"&&y==null?e.removeAttribute("value"):y!==void 0&&(y!==e[c]||x=="progress"&&!y||x=="option"&&y!==k[c])&&U(e,c,y,k[c],a),c="checked",S!==void 0&&S!==e[c]&&U(e,c,S,k[c],a))}return e}function oe(e,t,n){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(a){m.__e(a,n)}}function Fe(e,t,n){var o,a;if(m.unmount&&m.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||oe(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){m.__e(i,t)}o.base=o.__P=null}if(o=e.__k)for(a=0;a<o.length;a++)o[a]&&Fe(o[a],t,n||typeof e.type!="function");n||te(e.__e),e.__c=e.__=e.__e=void 0}function $t(e,t,n){return this.constructor(e,n)}function re(e,t,n){var o,a,i,l;t==document&&(t=document.documentElement),m.__&&m.__(e,t),a=(o=typeof n=="function")?null:n&&n.__k||t.__k,i=[],l=[],ne(t,e=(!o&&n||t).__k=$(N,null,[e]),a||L,L,t.namespaceURI,!o&&n?[n]:a?null:t.firstChild?q.call(t.childNodes):null,i,!o&&n?n:a?a.__e:t.firstChild,o,l),Ee(i,e,l)}q=we.slice,m={__e:function(e,t,n,o){for(var a,i,l;t=t.__;)if((a=t.__c)&&!a.__)try{if((i=a.constructor)&&i.getDerivedStateFromError!=null&&(a.setState(i.getDerivedStateFromError(e)),l=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,o||{}),l=a.__d),l)return a.__E=a}catch(u){e=u}throw e}},ye=0,Tt=function(e){return e!=null&&e.constructor==null},W.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof e=="function"&&(e=e(w({},n),this.props)),e&&w(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),xe(this))},W.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),xe(this))},W.prototype.render=N,M=[],ke=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Se=function(e,t){return e.__v.__b-t.__v.__b},G.__r=0,Ce=/(PointerCapture)$|Capture$/i,ee=0,Q=ve(!1),X=ve(!0),Nt=0;var Ht=0,Xt=Array.isArray;function s(e,t,n,o,a,i){t||(t={});var l,u,_=t;if("ref"in _)for(u in _={},t)u=="ref"?l=t[u]:_[u]=t[u];var c={type:e,props:_,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Ht,__i:-1,__u:0,__source:a,__self:i};if(typeof e=="function"&&(l=e.defaultProps))for(u in l)_[u]===void 0&&(_[u]=l[u]);return m.vnode&&m.vnode(c),c}var At=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],$e=new Set(At);function Pt(e){let t={};for(let n in e){let o=n.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`);t[o]=e[n]}return t}var ie=class{uid=0;constructor(t){t&&(this.uid=t)}next(){return++this.uid}},It=new ie;function K(){return`styled-component-${It.next()}`}function He(e){let t=document.styleSheets;for(let n of t)for(let o of n.cssRules)if(o.cssText.includes(`.${e} `))return!0;return!1}function ae(e,t){if(!He(e)){let n=document.createElement("style");n.innerHTML=`.${e} { ${t} }`,document.head.appendChild(n)}}function Dt(e,t){if(!He(e)){let n=document.createElement("style");n.innerHTML=`.${e} ${t}`,document.head.appendChild(n)}}function zt(e,t){let n=JSON.stringify(Pt(t),null,2);n=n.replaceAll(",",";"),n=n.replaceAll('"',"");let o=K(),a=Object.assign(i=>{let{children:l,...u}=i;Dt(o,n);let c={className:i.className||o,...u};return a.className=o,$(e,c,l)},{className:void 0});return a}function Lt(e,t,...n){let o=K(),a=Object.assign(i=>{let{children:l,...u}=i,_="",c=n.length;t.forEach((d,p)=>{p<c?_+=d+n[p]:_+=d}),ae(o,_);let r={className:i.className||o,...u};return a.className=o,$(e,r,l)},{className:void 0});return a}function Bt(e){return e.length==0?!0:typeof e[0]!="function"}function Ot(e,t,...n){if(Bt(n))return Lt(e,t,...n);let o=Object.assign(a=>{let i="",l=n.length;t.forEach((r,d)=>{d<l?i+=r+n[d](a):i+=r});let{children:u,..._}=a,c=o.mappedId.get(a);c||(c=K(),ae(c,i),o.mappedId.set(a,c));let f={className:a.className||c,..._};return $(e,f,u)},{mappedId:new Map});return o}function Ut(e){return(t,...n)=>{let o="",a=n.length;t.forEach((l,u)=>{u<a?o+=l+n[u]:o+=l});let i=Object.assign(l=>{let{children:u,..._}=l,c=K();console.log("aaa"),ae(c,o),e.className&&(c=`${e.className} ${c}`);let f=l.className||c;i.className=f;let r={className:f,..._};return $(e,r,u)},{className:void 0});return i}}var Ae=Ut;$e.forEach(e=>{Ae[e]=function(t,...n){return Array.isArray(t)&&"raw"in t?Ot(e,t,...n):zt(e,t)}});var Pe=Ae;var h=Pe;var Rt=h.nav`
  backdrop-filter: blur(10px);
  overflow: hidden;
  background-color: ${({isdark:e})=>e?"#111111":"#33333067"};
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 3;
  visibility: visible;
  & a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  & a.right {
    float: right;
  }
  & a:hover {
    background-color: #ddd;
    color: black;
  }

  @media screen and (max-width: 900px) {
    visibility: ${({autohide:e})=>e?"hidden":"visible"};
  }
`,Ie=Rt;function De({children:e}){return s(Ie,{autohide:!0,children:e})}var Wt=h.section`
  display: grid;
  grid-template-columns: 50% 50%;
  @media screen and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
  }

  background-color: black;
  width: 100%;

  & h1 {
    color: white;
  }
  & p {
    color: white;
  }
`,ze=h.div`
  margin-top: 300px;
  margin-bottom: 300px;
  @media screen and (max-width: 1300px) {
    margin-bottom: 10px;
    margin-top: 30px;
  }
  height: 60%;
`,Le=h.video`
  margin-top: 300px;
  margin-bottom: 300px;
  @media screen and (max-width: 1300px) {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  width: 100%;
`,Be=h.h1`
  text-align: center;
  font-size: 3em;
  font-weight: 500;
`,Oe=h.p`
  margin-left: 60px;
  margin-right: 60px;
  font-size: 32px;
  margin-top: 1px;
  & span {
    font-size: 32px;
  }
  @media screen and (max-width: 700px) {
    font-size: 22px;
    & span {
      font-size: 22px;
    }
  }
`,Ue=Wt;function se({children:e}){return s(Ue,{id:"main",children:e})}function Re({children:e}){return s(ze,{children:e})}function We({children:e}){return s(Be,{children:e})}function Ge({children:e}){return s(Oe,{children:e})}var Gt=h.section`
  display: flex;
  flex-direction: column;

  background-color: #0c2e4d;
  width: 100%;

  & h1 {
    color: white;
  }
  & p {
    color: white;
  }
`,qe=Gt,Ve=h.h1`
  text-align: center;
  font-size: 3em;
  font-weight: 500;
`,Ke=h.h1`
  text-align: center;
  font-size: 2em;
  font-weight: 100;
`,Je=h.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22em, 1fr));
  width: 100%;
  margin: 0.5rem;
  justify-items: stretch;
  overflow-y: auto;
  max-height: 100%;
  margin-bottom: 20px;
`,Ye=h.div`
  display: flex;
  flex-direction: column;
  background-color: #0d2e5f;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 30px;
`,Ze=h.p`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 25px;
  margin-top: 1px;
`;function le({children:e}){return s(qe,{id:"feature",children:e})}function Qe({children:e}){return s(Ve,{children:e})}function Xe({children:e}){return s(Je,{children:e})}function qt({children:e}){return s(Ke,{children:e})}function j({title:e,children:t}){return s(Ye,{children:[s(qt,{children:e}),t]})}function E({children:e}){return s(Ze,{children:e})}var et=h.span`
  position: relative;
  display: inline-block;
  & .tooltiptext {
    visibility: hidden;
    background-color: #222222;
    font-size: 20px;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 5px;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  &:hover .tooltiptext {
    visibility: visible;
  }
`;function H({tips:e,link:t,children:n}){return s(et,{children:[s("a",{href:t,children:n}),s("span",{class:"tooltiptext",children:e})]})}var tt=h.section`
  display: flex;
  flex-direction: column;

  background-color: #071521ff;
  width: 100%;

  & h1 {
    color: white;
  }
  & p {
    color: white;
  }
`,nt=h.h1`
  text-align: center;
  font-size: 3em;
  font-weight: 500;
`,ot=h.div`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 32px;
  margin-bottom: 300px;
  & span {
    font-size: 32px;
  }
  @media screen and (max-width: 700px) {
    font-size: 22px;
    & span {
      font-size: 22px;
    }
  }
`,rt=h.div`
  position: relative;
  color: #99c7ed;
  font-size: 26px;
  margin-right: 50px;
  margin-left: 50px;
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
  & pre {
    padding: 10px;
    background-color: #0c3e4d;
    border-radius: 5px;
    overflow-x: auto;
  }
  & button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;var ue,b,ce,it,_e=0,ft=[],v=m,at=v.__b,st=v.__r,lt=v.diffed,ct=v.__c,ut=v.unmount,_t=v.__;function Vt(e,t){v.__h&&v.__h(b,e,_e||t),_e=0;var n=b.__H||(b.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Y(e){return _e=1,Kt(dt,e)}function Kt(e,t,n){var o=Vt(ue++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):dt(void 0,t),function(u){var _=o.__N?o.__N[0]:o.__[0],c=o.t(_,u);_!==c&&(o.__N=[c,o.__[1]],o.__c.setState({}))}],o.__c=b,!b.__f)){var a=function(u,_,c){if(!o.__c.__H)return!0;var f=o.__c.__H.__.filter(function(d){return!!d.__c});if(f.every(function(d){return!d.__N}))return!i||i.call(this,u,_,c);var r=o.__c.props!==u;return f.forEach(function(d){if(d.__N){var p=d.__[0];d.__=d.__N,d.__N=void 0,p!==d.__[0]&&(r=!0)}}),i&&i.call(this,u,_,c)||r};b.__f=!0;var i=b.shouldComponentUpdate,l=b.componentWillUpdate;b.componentWillUpdate=function(u,_,c){if(this.__e){var f=i;i=void 0,a(u,_,c),i=f}l&&l.call(this,u,_,c)},b.shouldComponentUpdate=a}return o.__N||o.__}function Jt(){for(var e;e=ft.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(J),e.__H.__h.forEach(pe),e.__H.__h=[]}catch(t){e.__H.__h=[],v.__e(t,e.__v)}}v.__b=function(e){b=null,at&&at(e)},v.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),_t&&_t(e,t)},v.__r=function(e){st&&st(e),ue=0;var t=(b=e.__c).__H;t&&(ce===b?(t.__h=[],b.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(J),t.__h.forEach(pe),t.__h=[],ue=0)),ce=b},v.diffed=function(e){lt&&lt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ft.push(t)!==1&&it===v.requestAnimationFrame||((it=v.requestAnimationFrame)||Yt)(Jt)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),ce=b=null},v.__c=function(e,t){t.some(function(n){try{n.__h.forEach(J),n.__h=n.__h.filter(function(o){return!o.__||pe(o)})}catch(o){t.some(function(a){a.__h&&(a.__h=[])}),t=[],v.__e(o,n.__v)}}),ct&&ct(e,t)},v.unmount=function(e){ut&&ut(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{J(o)}catch(a){t=a}}),n.__H=void 0,t&&v.__e(t,n.__v))};var pt=typeof requestAnimationFrame=="function";function Yt(e){var t,n=function(){clearTimeout(o),pt&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);pt&&(t=requestAnimationFrame(n))}function J(e){var t=b,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),b=t}function pe(e){var t=b;e.__c=e.__(),b=t}function dt(e,t){return typeof t=="function"?t(e):t}function fe({children:e}){return s(tt,{id:"install",children:e})}function ht({children:e}){return s(nt,{children:e})}function mt({children:e}){return s(ot,{children:e})}function de({code:e}){let[t,n]=Y(!1);return s(rt,{children:[s("pre",{children:s("code",{children:e})}),s("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),2e3)},children:t?"Copied!":"Copy"})]})}var gt=h.section`
  display: flex;
  flex-direction: column;

  background-color: white;
  width: 100%;
`,xt=h.h1`
  text-align: center;
  font-size: 1em;
  font-weight: 500;
`;function he({children:e}){return s(gt,{id:"contribute",children:e})}function bt({children:e}){return s(xt,{children:e})}var vt=h.li`
  backdrop-filter: blur(10px);
  width: ${({width:e})=>e||180}px;
  height: 100%;
  background-color: #333330aa;
  position: fixed;
  top: ${({top:e})=>e||0}px;
  z-index: ${({zIndex:e})=>e||3};
  visibility: ${({autohide:e})=>e?"hidden":"visible"};
  list-style-type: none;
  display: flex;
  /* move flex-items in column */
  flex-direction: column;

  left: ${({isOpen:e})=>e?"0":"-200px"};
  transition: left 0.3s ease-in-out;

  @media screen and (max-width: 900px) {
    visibility: visible;
  }
  & button {
    background-color: transparent;
    border-width: 0;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  & button:hover {
    background-color: #ddd;
    color: black;
  }
`,A=h.a`
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  margin-top: ${({isBottom:e})=>e?"auto":"0"};
  &:hover {
    background-color: #ddd;
    color: black;
  }
`,yt=h.button`
  position: fixed;
  top: ${({top:e})=>e||20}px;
  left: ${({isOpen:e,left:t})=>e?t||210:20}px;
  background-color: white;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  visibility: ${({alwaysShown:e})=>e?"visible":"hidden"};
  background-image: url("static/menu.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  transition: left 0.3s ease-in-out;

  & hover {
    background-color: #0056b3;
  }

  @media screen and (max-width: 900px) {
    visibility: visible;
  }
`,Vn=h.button`
  position: fixed;
  bottom: ${({bottom:e})=>e||20}px;
  left: ${({isOpen:e,left:t})=>e?t||210:20}px;
  background-color: white;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  visibility: ${({alwaysShown:e})=>e?"visible":"hidden"};
  background-image: url("static/search_icon.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  transition: left 0.3s ease-in-out;

  & hover {
    background-color: #0056b3;
  }

  @media screen and (max-width: 900px) {
    visibility: visible;
  }
`;function kt(){return s(De,{children:[s("a",{href:"#main",children:"Neocmakelsp"}),s("a",{href:"#feature",children:"Features"}),s("a",{href:"#install",children:"Install"}),s("a",{href:"https://github.com/neocmakelsp/neocmakelsp/docs",children:"Document"}),s("a",{class:"right",href:"https://github.com/neocmakelsp/neocmakelsp",children:"Github"})]})}function St(){let[e,t]=Y(!1),n=()=>{t(!e)};return s(N,{children:[s(yt,{isOpen:e,onClick:()=>n()}),s(vt,{isOpen:e,autohide:!0,children:[s(A,{href:"#main",children:"Neocmakelsp"}),s(A,{href:"#feature",children:"Features"}),s(A,{href:"#install",children:"Install"}),s(A,{href:"/doc",children:"Document"}),s(A,{isBottom:!0,href:"https://github.com/neocmakelsp/neocmakelsp",children:"Github"}),s("button",{type:"button",class:"bottom",onClick:()=>n(),children:"<<"})]}),s(se,{children:[s(Re,{children:[s(We,{children:"neocmakelsp"}),s(Ge,{children:["Another lsp for cmake made with rust powered by tower-lsp with lots of"," ",s(H,{link:"#feature",tips:"features",children:"features"}),". Neocmakelsp use the"," ",s(H,{link:"https://microsoft.github.io/language-server-protocol/",tips:"microsoft.github.io",children:"Language Server Protocol"})," ","to provide various features for cmake, make it easier for developing cpp program."]})]}),s(Le,{autoplay:!0,loop:!0,muted:!0,children:s("source",{src:"/static/neocmakelsp.mp4",type:"video/mp4"})})]}),s(le,{children:[s(Qe,{children:"Features"}),s(Xe,{children:[s(j,{title:"Completion Support",children:s(E,{children:"Support complete base cmake commands, cmake package name and pkgconfig package name. It can even complete function in packages."})}),s(j,{title:"Hover Support",children:s(E,{children:"Support show the document of base commands. Support show where base information about where the function is from. Support show the information about the package."})})," ",s(j,{title:"Jump Support",children:s(E,{children:"Support jump between the cmake files. Support jump to the definition of the function in cmake packages."})}),s(j,{title:"Format support",children:s(E,{children:"NeoCMakeLsp has already support for builtin format, with the power of tree-sitter."})}),s(j,{title:"Semaction Highlight",children:s(E,{children:"Yes, it support lsp highlight. So now your cmake files in vscode will become light can colorful!!"})}),s(j,{title:"Lint and gammar check",children:s(E,{children:"NeoCMakeLsp support lint check and base gammar check. Lint check is under the support of cmake-lint, and gammar check is by tree-sitter."})}),s(j,{title:"Document symbol",children:s(E,{children:"Support lsp document_symbol, which provide folder support in vscode and outline support."})})]})]}),s(fe,{children:[s(ht,{children:"How to Install"}),s(mt,{children:[s("p",{children:["The lsp itself can be installed either from"," ",s(H,{link:"https://crates.io/crates/neocmakelsp",tips:"need to install rust",children:"crates.io"})," ","or from"," ",s(H,{link:"https://github.com/neocmakelsp/neocmakelsp/releases",tips:"Github",children:"latest release"})," ","from github."]}),s("p",{children:["For vscode user, you can use plugin"," ",s(H,{link:"https://github.com/neocmakelsp/neocmakelsp-vscode",tips:"can be installed from vscode / codeoss market",children:"neocmakelsp-vscode"}),", for neovim or emacs user, you should read our README.md."]}),s("p",{children:"To install the target, run follow command:"}),s(de,{code:"cargo install neocmakelsp"}),s("p",{children:"To install vscode plugin on vscode, run:"}),s(de,{code:"ext install Decodetalkers.neocmakelsp-vscode"})]})]}),s(he,{children:s(bt,{children:"You can help and make contributions for us on the Github."})})]})}var Ct=document.getElementById("mount");Ct&&re(s(St,{}),Ct);var wt=document.getElementById("header");wt&&re(s(kt,{}),wt);
