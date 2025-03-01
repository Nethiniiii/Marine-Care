var p = document.getElementById("loginButton");
var q = document.getElementById("registerButton");
var r = document.querySelector(".login-box");
var s = document.querySelector(".register-box");

function login() {
    r.style.left = "4px";
    s.style.right = "-520px";
    p.classList.add("white-btn");
    q.classList.remove("white-btn");
    r.style.opacity = 1;
    s.style.opacity = 0;
}

function register() {
    r.style.left = "-510px";
    s.style.right = "5px";
    p.classList.remove("white-btn");
    q.classList.add("white-btn");
    r.style.opacity = 0;
    s.style.opacity = 1;
}
