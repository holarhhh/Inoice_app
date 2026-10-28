/* Shows "Made by" with a mail link. The address is stored reversed so simple email crawlers do not find it in the page. */
(function () {
  var u = '45feetalijnutalo', d = 'moc.liamg';
  function flip(s) { return s.split('').reverse().join(''); }
  var addr = flip(u) + '@' + flip(d);
  function makeCopier(text, btn) {
    return function () {
      function done(ok) {
        btn.textContent = ok ? 'Copied' : 'Press and hold the address to copy';
        setTimeout(function () { btn.textContent = 'Copy'; }, 2500);
      }
      function fallback() {
        var t = document.createElement('textarea');
        t.value = text; t.setAttribute('readonly', '');
        t.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
        document.body.appendChild(t); t.select();
        var ok = false;
        try { ok = document.execCommand('copy'); } catch (e) {}
        t.remove(); done(ok);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, fallback);
      } else { fallback(); }
    };
  }
  var spots = document.querySelectorAll('[data-mail]');
  for (var i = 0; i < spots.length; i++) {
    var a = document.createElement('a');
    a.className = 'mail-link';
    a.href = 'mailto:' + addr + '?subject=' + encodeURIComponent('Einvoice');
    a.textContent = addr;
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'copy-btn';
    b.textContent = 'Copy';
    b.setAttribute('aria-label', 'Copy email address');
    b.addEventListener('click', makeCopier(addr, b));
    var holder = spots[i].parentNode;
    holder.replaceChild(a, spots[i]);
    holder.insertBefore(b, a.nextSibling);
  }
})();
