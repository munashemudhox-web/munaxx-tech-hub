const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const authBtn = document.getElementById("authBtn");

const auth = document.getElementById("auth");
const dashboard = document.getElementById("dashboard");

let isLogin = true;

// Tabs
loginTab.onclick = () => {
isLogin = true;
loginTab.classList.add("active");
signupTab.classList.remove("active");
authBtn.innerText = "Login";
};

signupTab.onclick = () => {
isLogin = false;
signupTab.classList.add("active");
loginTab.classList.remove("active");
authBtn.innerText = "Create Account";
};

// Submit
document.getElementById("authForm").addEventListener("submit", (e)=>{
e.preventDefault();

auth.style.display = "none";
dashboard.style.display = "block";
});