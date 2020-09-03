const code=`.App {
  text-align: center;
}

.App-header {
  background-color: #f9f6f6;
  color: #32485f;
  min-height: 100vh;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
      flex-direction: column;
  -ms-flex-align: center;
      align-items: center;
  -ms-flex-pack: center;
      justify-content: center;
  font-size: calc(10px + 2vmin);
}

.App-link {
  color: #00c185;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
  margin-bottom: 1rem;
  animation: App-logo-spin infinite 1.6s ease-in-out alternate;
}

@keyframes App-logo-spin {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.06);
  }
}`,styleEl=document.createElement("style"),codeEl=document.createTextNode(code);styleEl.type="text/css",styleEl.appendChild(codeEl),document.head.appendChild(styleEl);
