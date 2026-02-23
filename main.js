var G,h,ve,wt,F,ge,ke,Se,Ce,ee,Z,Q,Tt,U={},R=[],Nt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q=Array.isArray;function w(e,t){for(var n in t)e[n]=t[n];return e}function te(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function H(e,t,n){var r,l,o,c={};for(o in t)o=="key"?r=t[o]:o=="ref"?l=t[o]:c[o]=t[o];if(arguments.length>2&&(c.children=arguments.length>3?G.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)c[o]===void 0&&(c[o]=e.defaultProps[o]);return B(e,c,r,l,null)}function B(e,t,n,r,l){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:l??++ve,__i:-1,__u:0};return l==null&&h.vnode!=null&&h.vnode(o),o}function N(e){return e.children}function O(e,t){this.props=e,this.context=t}function A(e,t){if(t==null)return e.__?A(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?A(e):null}function Mt(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],l=[],o=w({},t);o.__v=t.__v+1,h.vnode&&h.vnode(o),ne(e.__P,o,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??A(t),!!(32&t.__u),l),o.__v=t.__v,o.__.__k[o.__i]=o,Me(r,o,l),t.__e=t.__=null,o.__e!=n&&we(o)}}function we(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),we(e)}function xe(e){(!e.__d&&(e.__d=!0)&&F.push(e)&&!W.__r++||ge!=h.debounceRendering)&&((ge=h.debounceRendering)||ke)(W)}function W(){for(var e,t=1;F.length;)F.length>t&&F.sort(Se),e=F.shift(),t=F.length,Mt(e);W.__r=0}function Te(e,t,n,r,l,o,c,_,u,a,d){var i,f,p,v,S,k,x,g=r&&r.__k||R,T=t.length;for(u=jt(n,t,g,u,T),i=0;i<T;i++)(p=n.__k[i])!=null&&(f=p.__i!=-1&&g[p.__i]||U,p.__i=i,k=ne(e,p,f,l,o,c,_,u,a,d),v=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&oe(f.ref,null,p),d.push(p.ref,p.__c||v,p)),S==null&&v!=null&&(S=v),(x=!!(4&p.__u))||f.__k===p.__k?u=Ne(p,u,e,x):typeof p.type=="function"&&k!==void 0?u=k:v&&(u=v.nextSibling),p.__u&=-7);return n.__e=S,u}function jt(e,t,n,r,l){var o,c,_,u,a,d=n.length,i=d,f=0;for(e.__k=new Array(l),o=0;o<l;o++)(c=t[o])!=null&&typeof c!="boolean"&&typeof c!="function"?(typeof c=="string"||typeof c=="number"||typeof c=="bigint"||c.constructor==String?c=e.__k[o]=B(null,c,null,null,null):q(c)?c=e.__k[o]=B(N,{children:c},null,null,null):c.constructor===void 0&&c.__b>0?c=e.__k[o]=B(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):e.__k[o]=c,u=o+f,c.__=e,c.__b=e.__b+1,_=null,(a=c.__i=Et(c,n,u,i))!=-1&&(i--,(_=n[a])&&(_.__u|=2)),_==null||_.__v==null?(a==-1&&(l>d?f--:l<d&&f++),typeof c.type!="function"&&(c.__u|=4)):a!=u&&(a==u-1?f--:a==u+1?f++:(a>u?f--:f++,c.__u|=4))):e.__k[o]=null;if(i)for(o=0;o<d;o++)(_=n[o])!=null&&(2&_.__u)==0&&(_.__e==r&&(r=A(_)),Ee(_,_));return r}function Ne(e,t,n,r){var l,o;if(typeof e.type=="function"){for(l=e.__k,o=0;l&&o<l.length;o++)l[o]&&(l[o].__=e,t=Ne(l[o],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=A(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Et(e,t,n,r){var l,o,c,_=e.key,u=e.type,a=t[n],d=a!=null&&(2&a.__u)==0;if(a===null&&_==null||d&&_==a.key&&u==a.type)return n;if(r>(d?1:0)){for(l=n-1,o=n+1;l>=0||o<t.length;)if((a=t[c=l>=0?l--:o++])!=null&&(2&a.__u)==0&&_==a.key&&u==a.type)return c}return-1}function be(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Nt.test(t)?n:n+"px"}function z(e,t,n,r,l){var o,c;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||be(e.style,t,"");if(n)for(t in n)r&&n[t]==r[t]||be(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Ce,"$1")),c=t.toLowerCase(),t=c in e||t=="onFocusOut"||t=="onFocusIn"?c.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n.u=r.u:(n.u=ee,e.addEventListener(t,o?Q:Z,o)):e.removeEventListener(t,o?Q:Z,o);else{if(l=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function ye(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ee++;else if(t.t<n.u)return;return n(h.event?h.event(t):t)}}}function ne(e,t,n,r,l,o,c,_,u,a){var d,i,f,p,v,S,k,x,g,T,E,D,he,L,Y,C=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),o=[_=t.__e=n.__e]),(d=h.__b)&&d(t);e:if(typeof C=="function")try{if(x=t.props,g="prototype"in C&&C.prototype.render,T=(d=C.contextType)&&r[d.__c],E=d?T?T.props.value:d.__:r,n.__c?k=(i=t.__c=n.__c).__=i.__E:(g?t.__c=i=new C(x,E):(t.__c=i=new O(x,E),i.constructor=C,i.render=$t),T&&T.sub(i),i.state||(i.state={}),i.__n=r,f=i.__d=!0,i.__h=[],i._sb=[]),g&&i.__s==null&&(i.__s=i.state),g&&C.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=w({},i.__s)),w(i.__s,C.getDerivedStateFromProps(x,i.__s))),p=i.props,v=i.state,i.__v=t,f)g&&C.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),g&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(g&&C.getDerivedStateFromProps==null&&x!==p&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(x,E),t.__v==n.__v||!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(x,i.__s,E)===!1){t.__v!=n.__v&&(i.props=x,i.state=i.__s,i.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function($){$&&($.__=t)}),R.push.apply(i.__h,i._sb),i._sb=[],i.__h.length&&c.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(x,i.__s,E),g&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(p,v,S)})}if(i.context=E,i.props=x,i.__P=e,i.__e=!1,D=h.__r,he=0,g)i.state=i.__s,i.__d=!1,D&&D(t),d=i.render(i.props,i.state,i.context),R.push.apply(i.__h,i._sb),i._sb=[];else do i.__d=!1,D&&D(t),d=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++he<25);i.state=i.__s,i.getChildContext!=null&&(r=w(w({},r),i.getChildContext())),g&&!f&&i.getSnapshotBeforeUpdate!=null&&(S=i.getSnapshotBeforeUpdate(p,v)),L=d!=null&&d.type===N&&d.key==null?je(d.props.children):d,_=Te(e,q(L)?L:[L],t,n,r,l,o,c,_,u,a),i.base=t.__e,t.__u&=-161,i.__h.length&&c.push(i),k&&(i.__E=i.__=null)}catch($){if(t.__v=null,u||o!=null)if($.then){for(t.__u|=u?160:128;_&&_.nodeType==8&&_.nextSibling;)_=_.nextSibling;o[o.indexOf(_)]=null,t.__e=_}else{for(Y=o.length;Y--;)te(o[Y]);X(t)}else t.__e=n.__e,t.__k=n.__k,$.then||X(t);h.__e($,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):_=t.__e=Ft(n.__e,t,n,r,l,o,c,u,a);return(d=h.diffed)&&d(t),128&t.__u?void 0:_}function X(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(X))}function Me(e,t,n){for(var r=0;r<n.length;r++)oe(n[r],n[++r],n[++r]);h.__c&&h.__c(t,e),e.some(function(l){try{e=l.__h,l.__h=[],e.some(function(o){o.call(l)})}catch(o){h.__e(o,l.__v)}})}function je(e){return typeof e!="object"||e==null||e.__b>0?e:q(e)?e.map(je):w({},e)}function Ft(e,t,n,r,l,o,c,_,u){var a,d,i,f,p,v,S,k=n.props||U,x=t.props,g=t.type;if(g=="svg"?l="http://www.w3.org/2000/svg":g=="math"?l="http://www.w3.org/1998/Math/MathML":l||(l="http://www.w3.org/1999/xhtml"),o!=null){for(a=0;a<o.length;a++)if((p=o[a])&&"setAttribute"in p==!!g&&(g?p.localName==g:p.nodeType==3)){e=p,o[a]=null;break}}if(e==null){if(g==null)return document.createTextNode(x);e=document.createElementNS(l,g,x.is&&x),_&&(h.__m&&h.__m(t,o),_=!1),o=null}if(g==null)k===x||_&&e.data==x||(e.data=x);else{if(o=o&&G.call(e.childNodes),!_&&o!=null)for(k={},a=0;a<e.attributes.length;a++)k[(p=e.attributes[a]).name]=p.value;for(a in k)p=k[a],a=="dangerouslySetInnerHTML"?i=p:a=="children"||a in x||a=="value"&&"defaultValue"in x||a=="checked"&&"defaultChecked"in x||z(e,a,null,p,l);for(a in x)p=x[a],a=="children"?f=p:a=="dangerouslySetInnerHTML"?d=p:a=="value"?v=p:a=="checked"?S=p:_&&typeof p!="function"||k[a]===p||z(e,a,p,k[a],l);if(d)_||i&&(d.__html==i.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(i&&(e.innerHTML=""),Te(t.type=="template"?e.content:e,q(f)?f:[f],t,n,r,g=="foreignObject"?"http://www.w3.org/1999/xhtml":l,o,c,o?o[0]:n.__k&&A(n,0),_,u),o!=null)for(a=o.length;a--;)te(o[a]);_||(a="value",g=="progress"&&v==null?e.removeAttribute("value"):v!=null&&(v!==e[a]||g=="progress"&&!v||g=="option"&&v!=k[a])&&z(e,a,v,k[a],l),a="checked",S!=null&&S!=e[a]&&z(e,a,S,k[a],l))}return e}function oe(e,t,n){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(l){h.__e(l,n)}}function Ee(e,t,n){var r,l;if(h.unmount&&h.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||oe(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){h.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&Ee(r[l],t,n||typeof e.type!="function");n||te(e.__e),e.__c=e.__=e.__e=void 0}function $t(e,t,n){return this.constructor(e,n)}function re(e,t,n){var r,l,o,c;t==document&&(t=document.documentElement),h.__&&h.__(e,t),l=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],c=[],ne(t,e=(!r&&n||t).__k=H(N,null,[e]),l||U,U,t.namespaceURI,!r&&n?[n]:l?null:t.firstChild?G.call(t.childNodes):null,o,!r&&n?n:l?l.__e:t.firstChild,r,c),Me(o,e,c)}G=R.slice,h={__e:function(e,t,n,r){for(var l,o,c;t=t.__;)if((l=t.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(e)),c=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,r||{}),c=l.__d),c)return l.__E=l}catch(_){e=_}throw e}},ve=0,wt=function(e){return e!=null&&e.constructor===void 0},O.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=w({},this.state),typeof e=="function"&&(e=e(w({},n),this.props)),e&&w(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),xe(this))},O.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),xe(this))},O.prototype.render=N,F=[],ke=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Se=function(e,t){return e.__v.__b-t.__v.__b},W.__r=0,Ce=/(PointerCapture)$|Capture$/i,ee=0,Z=ye(!1),Q=ye(!0),Tt=0;var At=0,Xt=Array.isArray;function s(e,t,n,r,l,o){t||(t={});var c,_,u=t;if("ref"in u)for(_ in u={},t)_=="ref"?c=t[_]:u[_]=t[_];var a={type:e,props:u,key:n,ref:c,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--At,__i:-1,__u:0,__source:l,__self:o};if(typeof e=="function"&&(c=e.defaultProps))for(_ in c)u[_]===void 0&&(u[_]=c[_]);return h.vnode&&h.vnode(a),a}var Ht=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Fe=new Set(Ht);function It(e){let t={};for(let n in e){let r=n.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`);t[r]=e[n]}return t}var ie=class{uid=0;constructor(t){t&&(this.uid=t)}next(){return++this.uid}},Pt=new ie;function V(){return`styled-component-${Pt.next()}`}function $e(e){let t=document.styleSheets;for(let n of t)for(let r of n.cssRules)if(r.cssText.includes(`.${e} `))return!0;return!1}function le(e,t){if(!$e(e)){let n=document.createElement("style");n.innerHTML=`.${e} { ${t} }`,document.head.appendChild(n)}}function Dt(e,t){if(!$e(e)){let n=document.createElement("style");n.innerHTML=`.${e} ${t}`,document.head.appendChild(n)}}function Lt(e,t){let n=JSON.stringify(It(t),null,2);n=n.replaceAll(",",";"),n=n.replaceAll('"',"");let r=V(),l=Object.assign(o=>{let{children:c,..._}=o;Dt(r,n);let a={className:o.className||r,..._};return l.className=r,H(e,a,c)},{className:void 0});return l}function zt(e,t,...n){let r=V(),l=Object.assign(o=>{let{children:c,..._}=o,u="",a=n.length;t.forEach((f,p)=>{p<a?u+=f+n[p]:u+=f}),le(r,u);let i={className:o.className||r,..._};return l.className=r,H(e,i,c)},{className:void 0});return l}function Bt(e){return e.length==0?!0:typeof e[0]!="function"}function Ot(e,t,...n){if(Bt(n))return zt(e,t,...n);let r=Object.assign(l=>{let o="",c=n.length;t.forEach((i,f)=>{f<c?o+=i+n[f](l):o+=i});let{children:_,...u}=l,a=r.mappedId.get(l);a||(a=V(),le(a,o),r.mappedId.set(l,a));let d={className:l.className||a,...u};return H(e,d,_)},{mappedId:new Map});return r}function Ut(e){return(t,...n)=>{let r="",l=n.length;t.forEach((c,_)=>{_<l?r+=c+n[_]:r+=c});let o=Object.assign(c=>{let{children:_,...u}=c,a=V();console.log("aaa"),le(a,r),e.className&&(a=`${e.className} ${a}`);let d=c.className||a;o.className=d;let i={className:d,...u};return H(e,i,_)},{className:void 0});return o}}var Ae=Ut;Fe.forEach(e=>{Ae[e]=function(t,...n){return Array.isArray(t)&&"raw"in t?Ot(e,t,...n):Lt(e,t)}});var He=Ae;var m=He;var Rt=m.nav`
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
`,Ie=Rt;function Pe({children:e}){return s(Ie,{autohide:!0,children:e})}var Wt=m.section`
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
`,De=m.div`
  margin-top: 300px;
  margin-bottom: 300px;
  @media screen and (max-width: 1300px) {
    margin-bottom: 10px;
    margin-top: 30px;
  }
  height: 60%;
`,Le=m.video`
  margin-top: 300px;
  margin-bottom: 300px;
  @media screen and (max-width: 1300px) {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  width: 100%;
`,ze=m.h1`
  text-align: center;
  font-size: 3em;
  font-weight: 500;
`,Be=m.p`
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
`,Oe=Wt;function se({children:e}){return s(Oe,{id:"main",children:e})}function Ue({children:e}){return s(De,{children:e})}function Re({children:e}){return s(ze,{children:e})}function We({children:e}){return s(Be,{children:e})}var Gt=m.section`
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
`,Ge=Gt,qe=m.h1`
  text-align: center;
  font-size: 3em;
  font-weight: 500;
`,Ve=m.h1`
  text-align: center;
  font-size: 2em;
  font-weight: 100;
`,Ke=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22em, 1fr));
  width: 100%;
  margin: 0.5rem;
  justify-items: stretch;
  overflow-y: auto;
  max-height: 100%;
  margin-bottom: 20px;
`,Je=m.div`
  display: flex;
  flex-direction: column;
  background-color: #0d2e5f;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 30px;
`,Ye=m.p`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 25px;
  margin-top: 1px;
`;function ae({children:e}){return s(Ge,{id:"feature",children:e})}function Ze({children:e}){return s(qe,{children:e})}function Qe({children:e}){return s(Ke,{children:e})}function qt({children:e}){return s(Ve,{children:e})}function M({title:e,children:t}){return s(Je,{children:[s(qt,{children:e}),t]})}function j({children:e}){return s(Ye,{children:e})}var Xe=m.span`
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
`;function I({tips:e,link:t,children:n}){return s(Xe,{children:[s("a",{href:t,children:n}),s("span",{class:"tooltiptext",children:e})]})}var et=m.section`
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
`,tt=m.h1`
  text-align: center;
  font-size: 3em;
  font-weight: 500;
`,nt=m.div`
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
`,ot=m.div`
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
`;var _e,b,ce,rt,ue=0,pt=[],y=h,it=y.__b,lt=y.__r,st=y.diffed,at=y.__c,ct=y.unmount,_t=y.__;function Vt(e,t){y.__h&&y.__h(b,e,ue||t),ue=0;var n=b.__H||(b.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function J(e){return ue=1,Kt(dt,e)}function Kt(e,t,n){var r=Vt(_e++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):dt(void 0,t),function(_){var u=r.__N?r.__N[0]:r.__[0],a=r.t(u,_);u!==a&&(r.__N=[a,r.__[1]],r.__c.setState({}))}],r.__c=b,!b.__f)){var l=function(_,u,a){if(!r.__c.__H)return!0;var d=r.__c.__H.__.filter(function(f){return f.__c});if(d.every(function(f){return!f.__N}))return!o||o.call(this,_,u,a);var i=r.__c.props!==_;return d.some(function(f){if(f.__N){var p=f.__[0];f.__=f.__N,f.__N=void 0,p!==f.__[0]&&(i=!0)}}),o&&o.call(this,_,u,a)||i};b.__f=!0;var o=b.shouldComponentUpdate,c=b.componentWillUpdate;b.componentWillUpdate=function(_,u,a){if(this.__e){var d=o;o=void 0,l(_,u,a),o=d}c&&c.call(this,_,u,a)},b.shouldComponentUpdate=l}return r.__N||r.__}function Jt(){for(var e;e=pt.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(K),t.__h.some(pe),t.__h=[]}catch(n){t.__h=[],y.__e(n,e.__v)}}}y.__b=function(e){b=null,it&&it(e)},y.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),_t&&_t(e,t)},y.__r=function(e){lt&&lt(e),_e=0;var t=(b=e.__c).__H;t&&(ce===b?(t.__h=[],b.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(K),t.__h.some(pe),t.__h=[],_e=0)),ce=b},y.diffed=function(e){st&&st(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(pt.push(t)!==1&&rt===y.requestAnimationFrame||((rt=y.requestAnimationFrame)||Yt)(Jt)),t.__H.__.some(function(n){n.u&&(n.__H=n.u),n.u=void 0})),ce=b=null},y.__c=function(e,t){t.some(function(n){try{n.__h.some(K),n.__h=n.__h.filter(function(r){return!r.__||pe(r)})}catch(r){t.some(function(l){l.__h&&(l.__h=[])}),t=[],y.__e(r,n.__v)}}),at&&at(e,t)},y.unmount=function(e){ct&&ct(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(r){try{K(r)}catch(l){t=l}}),n.__H=void 0,t&&y.__e(t,n.__v))};var ut=typeof requestAnimationFrame=="function";function Yt(e){var t,n=function(){clearTimeout(r),ut&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);ut&&(t=requestAnimationFrame(n))}function K(e){var t=b,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),b=t}function pe(e){var t=b;e.__c=e.__(),b=t}function dt(e,t){return typeof t=="function"?t(e):t}function de({children:e}){return s(et,{id:"install",children:e})}function ft({children:e}){return s(tt,{children:e})}function mt({children:e}){return s(nt,{children:e})}function fe({code:e}){let[t,n]=J(!1);return s(ot,{children:[s("pre",{children:s("code",{children:e})}),s("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(e),n(!0),setTimeout(()=>n(!1),2e3)},children:t?"Copied!":"Copy"})]})}var ht=m.section`
  display: flex;
  flex-direction: column;

  background-color: white;
  width: 100%;
`,gt=m.h1`
  text-align: center;
  font-size: 1em;
  font-weight: 500;
`;function me({children:e}){return s(ht,{id:"contribute",children:e})}function xt({children:e}){return s(gt,{children:e})}var bt=m.li`
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
`,P=m.a`
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
`,yt=m.button`
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
`,Kn=m.button`
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
`;function vt(){return s(Pe,{children:[s("a",{href:"#main",children:"Neocmakelsp"}),s("a",{href:"#feature",children:"Features"}),s("a",{href:"#install",children:"Install"}),s("a",{href:"https://neocmakelsp.github.io/docs/",children:"Document"}),s("a",{class:"right",href:"https://github.com/neocmakelsp/neocmakelsp",children:"Github"})]})}function kt(){let[e,t]=J(!1),n=()=>{t(!e)};return s(N,{children:[s(yt,{isOpen:e,onClick:()=>n()}),s(bt,{isOpen:e,autohide:!0,children:[s(P,{href:"#main",children:"Neocmakelsp"}),s(P,{href:"#feature",children:"Features"}),s(P,{href:"#install",children:"Install"}),s(P,{href:"/doc",children:"Document"}),s(P,{isBottom:!0,href:"https://github.com/neocmakelsp/neocmakelsp",children:"Github"}),s("button",{type:"button",class:"bottom",onClick:()=>n(),children:"<<"})]}),s(se,{children:[s(Ue,{children:[s(Re,{children:"neocmakelsp"}),s(We,{children:["Another lsp for cmake made with rust powered by tower-lsp with lots of"," ",s(I,{link:"#feature",tips:"features",children:"features"}),". Neocmakelsp use the"," ",s(I,{link:"https://microsoft.github.io/language-server-protocol/",tips:"microsoft.github.io",children:"Language Server Protocol"})," ","to provide various features for cmake, make it easier for developing cpp program."]})]}),s(Le,{autoplay:!0,loop:!0,muted:!0,children:s("source",{src:"/static/neocmakelsp.mp4",type:"video/mp4"})})]}),s(ae,{children:[s(Ze,{children:"Features"}),s(Qe,{children:[s(M,{title:"Completion Support",children:s(j,{children:"Support complete base cmake commands, cmake package name and pkgconfig package name. It can even complete function in packages."})}),s(M,{title:"Hover Support",children:s(j,{children:"Support show the document of base commands. Support show where base information about where the function is from. Support show the information about the package."})})," ",s(M,{title:"Jump Support",children:s(j,{children:"Support jump between the cmake files. Support jump to the definition of the function in cmake packages."})}),s(M,{title:"Format support",children:s(j,{children:"NeoCMakeLsp has already support for builtin format, with the power of tree-sitter."})}),s(M,{title:"Semaction Highlight",children:s(j,{children:"Yes, it support lsp highlight. So now your cmake files in vscode will become light can colorful!!"})}),s(M,{title:"Lint and gammar check",children:s(j,{children:"NeoCMakeLsp support lint check and base gammar check. Lint check is under the support of cmake-lint, and gammar check is by tree-sitter."})}),s(M,{title:"Document symbol",children:s(j,{children:"Support lsp document_symbol, which provide folder support in vscode and outline support."})})]})]}),s(de,{children:[s(ft,{children:"How to Install"}),s(mt,{children:[s("p",{children:["The lsp itself can be installed either from"," ",s(I,{link:"https://crates.io/crates/neocmakelsp",tips:"need to install rust",children:"crates.io"})," ","or from"," ",s(I,{link:"https://github.com/neocmakelsp/neocmakelsp/releases",tips:"Github",children:"latest release"})," ","from github."]}),s("p",{children:["For vscode user, you can use plugin"," ",s(I,{link:"https://github.com/neocmakelsp/neocmakelsp-vscode",tips:"can be installed from vscode / codeoss market",children:"neocmakelsp-vscode"}),", for neovim or emacs user, you should read our README.md."]}),s("p",{children:"To install the target, run follow command:"}),s(fe,{code:"cargo install neocmakelsp"}),s("p",{children:"To install vscode plugin on vscode, run:"}),s(fe,{code:"ext install Decodetalkers.neocmakelsp-vscode"})]})]}),s(me,{children:s(xt,{children:"You can help and make contributions for us on the Github."})})]})}var St=document.getElementById("mount");St&&re(s(kt,{}),St);var Ct=document.getElementById("header");Ct&&re(s(vt,{}),Ct);
