const code=`.container[data-v-2010212f] {
  padding: 30px;
  padding-top: 0;
}

.figure[data-v-2010212f] {
  width: 160px;
  height: 160px;
  margin-bottom: 18px;
}

.small-card .link-wrapper[data-v-2010212f] {
  padding-top: 30px;
}

.small-card .figure[data-v-2010212f] {
  width: 80px;
  height: 80px;
}

.small-card .desc[data-v-2010212f] {
  display: none;
}

.small-card .link-wrapper[data-v-2010212f] {
  -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
}

.small-card .text-container[data-v-2010212f] {
  -ms-flex-align: start;
      align-items: flex-start;
  width: 94px;
}

.name[data-v-2010212f] {
  margin-bottom: 2px;
}

.price[data-v-2010212f] {
  margin-bottom: 14px;
}

.desc[data-v-2010212f] {
  margin-bottom: 10px;
}`,styleEl=document.createElement("style"),codeEl=document.createTextNode(code);styleEl.type="text/css",styleEl.appendChild(codeEl),document.head.appendChild(styleEl);
