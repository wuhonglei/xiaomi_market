import"./extend.css.proxy.js";import"../../../web_modules/vue.js";import g from"./index.js";import f from"../card/goods.js";import E from"../card/poster.js";import C from"../card/more_goods.js";import{get as L}from"../../../web_modules/lodash-es.js";const r={SINGLE:"single",DOUBLE:"double"},i={name:"DoubleleCard",components:{CardLayout:g,GoodsCard:f,PosterCard:E,MoreGoods:C},props:{mode:{type:String,default:r.SINGLE,validator(o){return Object.values(r).includes(o)}},data:{type:Object,default(){return{poster:{},goods:[]}}},showMore:{type:Boolean,default:!1}},computed:{availableCardNum(){let o={[r.SINGLE]:5,[r.DOUBLE]:10},e={big:2,normal:1},l=L(this.data,"posters.length",0)*e[this.posterSize]??0;return o[this.mode]-l},posterSize(){return this.data.posters?.length?this.mode===r.SINGLE||this.data.posters.length===2?"normal":"big":0},goodsLen(){return this.data.goods.length},hasMoreData(){return this.goodsLen>this.availableCardNum},firstMoreData(){let o=this.goodsList.length;return this.data.goods[o]},goodsList(){let o=this.availableCardNum;return this.hasMoreData&&(o-=this.showMore?1:0),this.data.goods.slice(0,o)}}};import{renderList as m,Fragment as p,openBlock as s,createBlock as a,resolveComponent as d,mergeProps as S,createVNode as N,createCommentVNode as b,createSlots as M,withScopeId as w}from"../../../web_modules/vue.js";const n=w("data-v-58571637");export const render=n(function(e,l){const u=d("poster-card"),c=d("goods-card"),h=d("more-goods"),_=d("card-layout");return s(),a(_,{mode:e.mode},M({default:n(()=>[(s(!0),a(p,null,m(e.goodsList,t=>(s(),a(c,{key:t.name,data:t},null,8,["data"]))),128)),e.showMore&&e.hasMoreData?N(h,{key:0,data:e.firstMoreData},null,8,["data"]):b("",!0)]),_:2},[e.posterSize?{name:"poster",fn:n(()=>[(s(!0),a(p,null,m(e.data.posters,t=>(s(),a(u,S({key:t.src,size:e.posterSize},t),null,16,["size"]))),128))])}:void 0]),1032,["mode"])});i.render=render;export default i;
