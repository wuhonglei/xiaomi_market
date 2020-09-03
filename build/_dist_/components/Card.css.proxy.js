const code=`
  .container[data-v-7b279f70] > p {
    color: red;
  }`,styleEl=document.createElement("style"),codeEl=document.createTextNode(code);styleEl.type="text/css",styleEl.appendChild(codeEl),document.head.appendChild(styleEl);
