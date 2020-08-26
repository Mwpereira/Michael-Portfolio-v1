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

const vmwArrow = () => {
	const button = document.querySelector("#vmwBtn");

	button.addEventListener("click", () => {

		if($("#vmwBtn .material-icons").html() == "arrow_right"){
			$("#vmwBtn .material-icons").html("arrow_drop_down");
			$("#vmwBtn").css("background-color", "rgb(76, 18, 61)");
			document.getElementById('About-Nav').click();
		}
		else{
			$("#vmwBtn .material-icons").html("arrow_right");
			$("#vmwBtn").css("background-color", "transparent");
		}		

	});
};

navSlide();

navBackground();

vmwArrow();


// cache the navigation links 
var $navigationLinks = $('#navigation > ul > li > a');
// cache (in reversed order) the sections
var $sections = $($(".section").get().reverse());

// map each section id to their corresponding navigation link
var sectionIdTonavigationLink = {};
$sections.each(function() {
    var id = $(this).attr('id');
    sectionIdTonavigationLink[id] = $('#navigation > ul > li > a[href=\\#' + id + ']');
});

// throttle function, enforces a minimum time interval
function throttle(fn, interval) {
    var lastCall, timeoutId;
    return function () {
        var now = new Date().getTime();
        if (lastCall && now < (lastCall + interval) ) {
            // if we are inside the interval we wait
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                lastCall = now;
                fn.call();
            }, interval - (now - lastCall) );
        } else {
            // otherwise, we directly call the function 
            lastCall = now;
            fn.call();
        }
    };
}

function highlightNavigation() {
    // get the current vertical position of the scroll bar
    var scrollPosition = $(window).scrollTop();

    // iterate the sections
    $navbar.each(function() {
        var currentSection = $(this);
        // get the position of the section
        var sectionTop = currentSection.offset().top;

        // if the user has scrolled over the top of the section  
        if (scrollPosition >= sectionTop) {
            // get the section id
            var id = currentSection.attr('id');
            // get the corresponding navigation link
            var $navigationLink = sectionIdTonavigationLink[id];
            // if the link is not active
            if (!$navigationLink.hasClass('active')) {
                // remove .active class from all the links
                $navigationLinks.removeClass('active');
                // add .active class to the current link
                $navigationLink.addClass('active');
            }
            // we have found our section, so we return false to exit the each loop
            return false;
        }
    });
}

$(window).scroll( throttle(highlightNavigation,100) );

// if you don't want to throttle the function use this instead:
// $(window).scroll( highlightNavigation );


/*********** Responsive Scroll ***********/

var pxH = window.innerHeight;

let box = document.querySelector('nav');
let navHeight = box.offsetHeight;

$("#Home-Nav").addClass("active");

$("#Home-Nav").click(function () {
	$("html, body").animate(
		{
			scrollTop: $("#Home").offset().top,
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