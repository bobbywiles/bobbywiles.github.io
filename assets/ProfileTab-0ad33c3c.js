import{d as m,I as g,a as b,u as I,r as e,o as h,c as v,w as t,b as n,f as s,e as i,t as P}from"./index-f9704e7d.js";import{A as c}from"./AppFunctions-501e938d.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const B=m({name:"ProfileTab",components:{IonApp:g,IonRouterOutlet:b},setup(){return{ionRouter:I()}},methods:{signout(){c.signOut()}},watch:{},async mounted(){const o=await c.getAccountProfile();this.bio=o.UserBio;const a=await c.getProfileImage(o.ProfileImageId);this.profileImage=a},data(){let o;return{profileImage:o,bio:""}}});const $={class:"image-container"},y=["src"];function A(o,a,C,R,T,k){const l=e("ion-title"),r=e("ion-toolbar"),_=e("ion-header"),u=e("ion-label"),p=e("ion-button"),d=e("ion-content"),f=e("ion-page");return h(),v(f,null,{default:t(()=>[n(_,{translucent:!0},{default:t(()=>[n(r,null,{default:t(()=>[n(l,null,{default:t(()=>[s("Profile")]),_:1})]),_:1})]),_:1}),n(d,{fullscreen:!0},{default:t(()=>[i("div",$,[i("img",{class:"profile-image",src:o.profileImage},null,8,y)]),i("div",null,[n(u,null,{default:t(()=>[s("Bio: "+P(o.bio),1)]),_:1})]),n(p,{onClick:a[0]||(a[0]=x=>o.signout())},{default:t(()=>[s("Sign Out")]),_:1})]),_:1})]),_:1})}const D=w(B,[["render",A],["__scopeId","data-v-c5ecd6c6"]]);export{D as default};
