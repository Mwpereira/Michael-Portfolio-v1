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
        this.scrollY > 200 ? nav.classList.add("is-solid") : nav.classList.remove("is-solid");
    });
};

const vmwArrow = () => {
    const button = document.querySelector("#vmwBtn");

    button.addEventListener("click", () => {
        if ($("#vmwBtn .material-icons").html() == "arrow_right") {
            $("#vmwBtn .material-icons").html("arrow_drop_down");
            $("#vmwBtn").css("background-color", "rgb(76, 18, 61)");
            document.getElementById("About-Nav").click();
        } else {
            $("#vmwBtn .material-icons").html("arrow_right");
			$("#vmwBtn").css("background-color", "transparent");
			document.getElementById("Home-Nav").click();
        }
    });
};

$(".nav-links li a").click(function () {
    const nav = document.querySelector(".nav-links");
    if (nav.classList.contains("nav-active")) {
        document.getElementsByClassName("burger")[0].click();
    }
});

navSlide();

navBackground();

vmwArrow();

/*********** Responsive Scroll ***********/

var pxH = window.innerHeight;

let box = document.querySelector("nav");
let navHeight = box.offsetHeight;

console.log(navHeight);
console.log(pxH);
$("h3").html(navHeight);
$("h1").html(pxH);

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
            scrollTop: $("#About").offset().top + navHeight - pxH * 0.24,
        },
        1000
    );
    return false;
});

$("#Skills-Nav").click(function () {
    $(" html,body").animate(
        {
            scrollTop: $("#Skills").offset().top + navHeight - pxH * 0.24,
        },
        1000
    );
    return false;
});

$("#Portfolio-Nav").click(function () {
    $(this).addClass("active");
    $("html,body ").animate(
        {
            scrollTop: $("#Portfolio").offset().top + navHeight - pxH * 0.24,
        },
        1000
    );
    return false;
});

$("#Contact-Nav").click(function () {
    $(this).addClass("active");
    $("html,body ").animate(
        {
            scrollTop: $("#Contact").offset().top + navHeight - pxH * 0.24,
        },
        1000
    );
    return false;
});