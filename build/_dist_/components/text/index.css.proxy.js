const code=`.base[data-v-59ebc2f0] {
  line-height: 1.5;
  font-weight: 400;
  color: #333;
  font-size: 14px;
}

.category[data-v-59ebc2f0] {
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
}

.desc[data-v-59ebc2f0],
.origin-price[data-v-59ebc2f0] {
  color: #b0b0b0;
}

.desc[data-v-59ebc2f0] {
  font-size: 12px;
}

.price[data-v-59ebc2f0] {
  color: #ff6700;
}

.origin-price[data-v-59ebc2f0] {
  /* 删除线 */
  text-decoration: line-through;
}`,styleEl=document.createElement("style"),codeEl=document.createTextNode(code);styleEl.type="text/css",styleEl.appendChild(codeEl),document.head.appendChild(styleEl);
