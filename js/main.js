// Copy-email button with a select-text fallback
document.getElementById("copy").addEventListener("click", function () {
  var b = this,
    t = document.getElementById("email").textContent;
  var done = function () {
    b.textContent = "Copied";
    setTimeout(function () {
      b.textContent = "Copy";
    }, 1600);
  };
  try {
    navigator.clipboard.writeText(t).then(done, function () {
      selectIt();
    });
  } catch (e) {
    selectIt();
  }
  function selectIt() {
    var r = document.createRange();
    r.selectNodeContents(document.getElementById("email"));
    var s = getSelection();
    s.removeAllRanges();
    s.addRange(r);
    b.textContent = "Selected";
    setTimeout(function () {
      b.textContent = "Copy";
    }, 1600);
  }
});
