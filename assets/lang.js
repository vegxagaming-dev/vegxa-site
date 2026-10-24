// Sayfa dili: önce kullanıcının seçimi, yoksa tarayıcı dili (Türkçe ise tr, değilse en)
(function () {
  var root = document.documentElement, saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var lang = saved || ((navigator.language || "").toLowerCase().indexOf("tr") === 0 ? "tr" : "en");
  root.setAttribute("data-lang", lang);
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-set]");
    if (!b) return;
    root.setAttribute("data-lang", b.getAttribute("data-set"));
    try { localStorage.setItem("lang", b.getAttribute("data-set")); } catch (e2) {}
  });
})();
