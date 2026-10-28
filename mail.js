/* Shows "Made by" with a mail link. The address is stored reversed so simple email crawlers do not find it in the page. */
(function () {
  var u = '45feetalijnutalo', d = 'moc.liamg';
  function flip(s) { return s.split('').reverse().join(''); }
  var addr = flip(u) + '@' + flip(d);
  var spots = document.querySelectorAll('[data-mail]');
  for (var i = 0; i < spots.length; i++) {
    var a = document.createElement('a');
    a.className = 'mail-link';
    a.href = 'mailto:' + addr + '?subject=' + encodeURIComponent('Einvoice');
    a.textContent = addr;
    spots[i].parentNode.replaceChild(a, spots[i]);
  }
})();
