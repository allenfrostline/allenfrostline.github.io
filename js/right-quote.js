(function() {
  var quotes = document.getElementsByTagName('blockquote'), i, quote;
  for (i = 0; i < quotes.length; i++) {
    quote = quotes[i];
    var n = quote.children.length;
    if (n === 0) continue;
    var el = quote.children[n - 1];
    if (!el || el.nodeName !== 'P') continue;
    // right-align a quote footer if it starts with --
    var patt = new RegExp('---*')
    if (patt.test(el.textContent)) {
      el.textContent = el.textContent.replace('--', '——');
      el.style.textAlign = 'right';
    }
  }
})();
