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

$("#Home-Nav").addClass("active");

$("#Home-Nav").click(function () {
	$("html, body").animate(
		{
			scrollTop: $("#Home").offset().top - 66,
		},
		1000
	);
	return false;
});

$("#About-Nav").click(function () {
	$("html, body").animate(
		{
			scrollTop: $("#About").offset().top - 112,
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
			scrollTop: $("#Portfolio").offset().top - 112,
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
