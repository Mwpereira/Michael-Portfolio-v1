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

const navBackground = () => {
	const nav = document.getElementsByTagName("nav")[0];
  
	window.addEventListener("scroll", () => {
	  this.scrollY > 200
		? nav.classList.add("is-solid")
		: nav.classList.remove("is-solid");
	});
};

navSlide();

navBackground();


/*********** Responsive Scroll ***********/

var pxH = window.innerHeight;

let box = document.querySelector('nav');
let navHeight = box.offsetHeight;

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
			scrollTop: $("#About").offset().top + navHeight - pxH*.22,
		},
		1000
	);
	return false;
});

$("#Skills-Nav").click(function () {
	$(" html,body").animate(
		{
			scrollTop: $("#Skills").offset().top + navHeight - pxH*.22,
		},
		1000
	);
	return false;
});

$("#Portfolio-Nav").click(function () {
	$(this).addClass("active");
	$("html,body ").animate(
		{
			scrollTop: $("#Portfolio").offset().top + navHeight - pxH*.22,
		},
		1000
	);
	return false;
});

$("#Contact-Nav").click(function () {
	$(this).addClass("active");
	$("html,body ").animate(
		{
			scrollTop: $("#Contact").offset().top + navHeight - pxH*.22,
		},
		1000
	);
	return false;
});