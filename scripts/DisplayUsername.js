if ((window.location.href).indexOf('?') != -1) {
    var queryString = (window.location.href).substr((window.location.href).indexOf('?') + 1);
    var value = (queryString.split('='))[1];
    value = decodeURIComponent(value);
    var space = ' ';
    var arr = value.split(space);
    var href1 = document.getElementById("signinRef");
    href1.innerHTML = arr;
    href1.setAttribute("href", "developerSuggestionsPage.html" + "?" + queryString);
    var href2 = document.getElementById("signupRef");
    href2.innerHTML = "Sign Out";
    href2.setAttribute("href", "signIn.html");
}
else {
    var href1 = document.getElementById("signinRef");
    href1.innerHTML ="Sign up";
    href1.setAttribute("href", "signUp.html");
    var href2 = document.getElementById("signupRef");
    href2.innerHTML = "Sign in";
    href1.setAttribute("href", "signUp.html");
}

console.log(document.getElementById("signinRef"));