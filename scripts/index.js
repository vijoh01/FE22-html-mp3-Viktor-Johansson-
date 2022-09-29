
function pageLoad() {
    var loadingTitle = document.querySelector('.loading-title');
    var content = document.querySelector('.index-content');
    console.log(window.localStorage);
    document.querySelector(".menu-container").style.display = 'none';
    if (window.localStorage.getItem('loaded') === null) {

        setTimeout(function () {

            loadingTitle.style.display = 'none';
            content.style.display = 'block';
            window.localStorage.setItem('loaded', 'yes');
        }, 1990);
    } else {
        loadingTitle.style.display = 'none';
        content.style.display = 'block';
        setTimeout(function () {
        window.localStorage.clear();
        }, 40 * 1000);
    }
}

var div = document.querySelectorAll('.projects div');

for (i in div) {
    div[i].onmouseenter = div[i].onmouseleave = hover

}

function hover(event) {
    var h1 = document.querySelectorAll('.projects div');
    var tar = event.target;
    for (i in div) {
        if (event.type == 'mouseenter') {
            if (tar == h1[i]) {
                tar.firstElementChild.style.display = "flex";
            }
        } else if (event.type == 'mouseleave') {
            tar.firstElementChild.style.display = "none";
        }
    }
}

var button = document.getElementsByClassName("menu-icon");
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var menu = document.querySelector(".menu-container");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });
}
