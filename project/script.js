let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("bx-search" ,"bx-x");
    }else {
        searchBox.classList.replace("bx-x" ,"bx-search");
    }
});

let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
    navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
    navLinks.style.left = "-100%";
}


let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
    navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
    navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
    navLinks.classList.toggle("show3");
}

document.getElementById('file-upload').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var progressBar = document.getElementById('progress-bar');
    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/upload-endpoint', true);
    xhr.upload.onprogress = function(e) {
        if (e.lengthComputable) {
            progressBar.style.width = (e.loaded / e.total) * 100 + '%';
        }
    };

    xhr.onload = function() {
        if (this.status == 200) {
            console.log('Upload complete');
        }
    };

    xhr.send(file);
});