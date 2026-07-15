// Mobil menü aç/kapa
(function () {
  var btn = document.querySelector(".menu-btn");
  var menu = document.getElementById("menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", function () {
    var acik = menu.classList.toggle("acik");
    btn.setAttribute("aria-expanded", acik ? "true" : "false");
  });

  // Bir menü bağlantısına tıklanınca menüyü kapat (mobilde)
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") menu.classList.remove("acik");
  });
})();
