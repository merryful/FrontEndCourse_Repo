
const navbar = document.getElementById("navbar");

const body = document.body;
var sticky = navbar.offsetTop;

window.addEventListener('scroll', function(e) {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= sticky) {
		body.classList.add("hide");
        navbar.classList.remove("sticky");
	}

    if (currentScroll >= sticky) {
        navbar.classList.add("sticky");
        body.classList.remove("hide");
    }

})

