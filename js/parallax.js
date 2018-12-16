const parallax = document.getElementById("s1");

window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  let scrollAmt = 0.1;
  parallax.style.backgroundPositionY = offset * scrollAmt + "px";
})
