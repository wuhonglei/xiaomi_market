import"./more.css.proxy.js";import _ from"./base.js";import i from"../text/index.js";const o={name:"ViewMore",components:{BaseCard:_,iText:i},props:{title:{type:String,default:"浏览更多"},type:{type:String,default:"热门"}}};import{toDisplayString as s,createVNode as e,resolveComponent as p,openBlock as c,createBlock as n,withScopeId as d,pushScopeId as l,popScopeId as m}from"../../../web_modules/vue.js";import f from"../../assets/more.jpg.proxy.js";const r=d("data-v-3e8e05e8");l("data-v-3e8e05e8");const h={class:"w-full h-full flex"},u={class:"more-container m-auto grid"},v={class:"title"},x={class:"type font-normal"},S=e("div",{class:"icon"},[e("img",{src:f,alt:"查看更多"})],-1);m();export const render=r(function(t,w){const a=p("base-card");return c(),n(a,{size:"small"},{default:r(()=>[e("div",h,[e("div",u,[e("div",v,s(t.title),1),e("div",x,s(t.type),1),S])])]),_:1})});o.render=render;export default o;
