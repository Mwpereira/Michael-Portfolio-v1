const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navLinks = document.querySelectorAll(".nav-links li");

	burger.addEventListener("click", () => {
		nav.classList.toggle("nav-active");

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
			}
		});
		burger.classList.toggle("toggle");
	});
};

navSlide();

var pxH = window.innerHeight;

$("#Home-Nav").addClass("active");

$("#Home-Nav").click(function () {
	$("html, body").animate(
		{
			scrollTop: $("#Home").offset().top - pxH*0.01,
		},
		1000
	);
	return false;
});

$("#About-Nav").click(function () {
	$("html, body").animate(
		{
			scrollTop: $("#About").offset().top - pxH*.1,
		},
		1000
	);
	return false;
});

$("#Skills-Nav").click(function () {
	$(" html,body").animate(
		{
			scrollTop: $("#Skills").offset().top - 50,
		},
		1000
	);
	return false;
});

$("#Portfolio-Nav").click(function () {
	$(this).addClass("active");
	$("html,body ").animate(
		{
			scrollTop: $("#Portfolio").offset().top - pxH*.06,
		},
		1000
	);
	return false;
});

$("#Contact-Nav").click(function () {
	$(this).addClass("active");
	$("html,body ").animate(
		{
			scrollTop: $("#Contact").offset().top - 50,
		},
		1000
	);
	return false;
});

$(".nav-links a").click(function () {
	const nav = document.querySelector(".nav-links");
	nav.classList.toggle("nav-active");
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
	document.getElementById("navbar").style.transform = `translateY(0%)`;	
  } else {
    document.getElementById("navbar").style.transform = `translateY(-100%)`;
  }
  prevScrollpos = currentScrollPos;
}

