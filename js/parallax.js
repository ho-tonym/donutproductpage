const parallax = document.getElementById("s1");

window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  let scrollAmt = 0.6;
  console.log(offset);
  parallax.style.backgroundPositionY = offset * scrollAmt + "px";
})
