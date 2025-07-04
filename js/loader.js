// Loader overlay logic
window.addEventListener('DOMContentLoaded', function() {
  // Create loader overlay
  var loaderOverlay = document.createElement('div');
  loaderOverlay.className = 'loader-overlay';
  loaderOverlay.innerHTML = '<div class="loader"></div>';
  document.body.appendChild(loaderOverlay);

  var minTime = 1200; // Minimum loader time in ms (increased)
  var start = Date.now();

  // Hide loader when page is fully loaded and min time has passed
  window.addEventListener('load', function() {
    var elapsed = Date.now() - start;
    var delay = Math.max(0, minTime - elapsed);
    setTimeout(function() {
      loaderOverlay.style.opacity = '0';
      setTimeout(function() {
        loaderOverlay.remove();
      }, 350);
    }, delay);
  });
});

// FAQ accordion logic
window.addEventListener('DOMContentLoaded', function() {
  var faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.closest('.faq-item');
      var isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('active'); });
      if (!isActive) item.classList.add('active');
    });
  });
});
