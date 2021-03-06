const code=`.grid-container[data-v-28bd9c45] {
  --width: 234px;
  --small-height: 143px;
  --normal-height: 300px;
  --big-height: 614px;
  --column-gap: 14px;
  --row-gap: 14px;
  grid-template-columns: repeat(5, var(--width));
  grid-template-rows: repeat(1, var(--normal-height));
  grid-auto-rows: var(--normal-height);
  grid-column-gap: var(--column-gap);
  grid-row-gap: var(--row-gap);
}

.poster-wrapper[data-v-28bd9c45] {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
      flex-direction: column;
  -ms-flex-pack: justify;
      justify-content: space-between;
}

.single-poster[data-v-28bd9c45] {
  grid-area: 1/1 / 2/2;
}

.double-poster[data-v-28bd9c45] {
  grid-area: 1/1 / 3/2;
}`,styleEl=document.createElement("style"),codeEl=document.createTextNode(code);styleEl.type="text/css",styleEl.appendChild(codeEl),document.head.appendChild(styleEl);
