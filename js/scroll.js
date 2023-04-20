document.getElementById("scroll-down-btn").addEventListener("click", function() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  });