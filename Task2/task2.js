let emailEmpty = true;
let passwordEmpty = true;
function chekEmail() {
    const email = document.getElementById("email");
    const filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
        document.getElementById("alrtEmail").innerHTML = "E-mail is incorect.";
        document.getElementById("email").style.border = "1px solid rgb(231, 71, 71)";
        if (!email.value) {
            document.getElementById("alrtEmail").innerHTML = "Enter e-mail, please.";
        }
        emailEmpty = true;
    } else {
        document.getElementById("alrtEmail").innerHTML = "";
        document.getElementById("email").style.border = "";
        emailEmpty = false;
    }
}

function Submit() {
    document.getElementById("alrtSubmit").innerHTML = "";
    event.preventDefault();
    chekEmail();
    validPass();
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    if (!email || email.value == null || email.value == '' || emailEmpty || !password || password.value == null || password.value == '' || passwordEmpty || emailEmpty) {
        if (!email || email.value == null || email.value == '' || emailEmpty) {
            document.getElementById("alrtSubmit").innerHTML += "*You don't enter an email or it is wrong<br>";
        }
        if (!password || password.value == null || password.value == '') {
            document.getElementById("alrtSubmit").innerHTML += "*You don't enter an password or it is wrong<br>";
        }

    } else {
        console.log(document.getElementById("email").value);
        console.log(document.getElementById("password").value);
    }

}

function validPass() {
    const password = document.getElementById("password");
    document.getElementById("alrtPassword").innerHTML = "";
    password.style.border = "";
    passwordEmpty = false;
    if (password.value.match(/[A-Z]/g)) {
    } else {
        document.getElementById("alrtPassword").innerHTML += "password must contain at least one uppercase latin letter <br>";
        password.style.border = "1px solid rgb(231, 71, 71)";
        passwordEmpty = true;
    }
    if (password.value.match(/[a-z]/g)) {
    } else {
        document.getElementById("alrtPassword").innerHTML += "password must contain at least one lowercase latin letter <br>";
        password.style.border = "1px solid rgb(231, 71, 71)";
        passwordEmpty = true;
    }
    if (password.value.match(/[0-9]/g)) {
    } else {
        document.getElementById("alrtPassword").innerHTML += "password must contain at least one figure <br>";
        password.style.border = "1px solid rgb(231, 71, 71)";
        passwordEmpty = true;
    }
    if (password.value.match(/[^a-zA-Z\d]/g)) {
    } else {
        document.getElementById("alrtPassword").innerHTML += "password must contain at least one symbol <br>";
        password.style.border = "1px solid rgb(231, 71, 71)";
        passwordEmpty = true;
    }

    if (password.value.length >= 8) {
    } else {
        document.getElementById("alrtPassword").innerHTML += "Password must be at least 8 characters long <br>";
        password.style.border = "1px solid rgb(231, 71, 71)";
        passwordEmpty = true;
    }

}

const form = p("form", { id: "login", onsubmit: "Submit()" });
const image = p("img", { src: "log.png", alt: "Тут мало би бути зображення, але щось явно пішло не так", class: "img", width: "180px" });
const divEm = p("div", "-");
const divPas = p("div", "-");
const divSubmit = p("div", "-");
const inptEm = p("input", { type: "email", id: "email", placeholder: "Enter e-mail", onchange: "chekEmail()" });
const inptPas = p("input", { type: "password", id: "password", placeholder: "Enter password", onchange: "validPass()" });
const divAlrtEmail = p("div", { id: "alrtEmail", class: "alrt" });
const divAlrtPassword = p("div", { id: "alrtPassword", class: "alrt" });
const divAlrtSubmit = p("div", { id: "alrtSubmit", class: "alrt" });
const inptSubmit = p("input", { type: "submit", id: "butn", value: "Submit" });


divEm.appendChild(inptEm);



divPas.appendChild(inptPas);

divSubmit.appendChild(inptSubmit);

form.appendChild(image);
form.appendChild(divEm);
form.appendChild(divAlrtEmail);
form.appendChild(divPas);
form.appendChild(divAlrtPassword);
form.appendChild(divSubmit);
form.appendChild(divAlrtSubmit);

document.body.appendChild(form);

function p(elem, atribute) {
    let e = document.createElement(elem);
    if (atribute == "-") {
    } else {
        if (atribute.id) e.setAttribute("id", atribute.id);
        if (atribute.class) e.setAttribute("class", atribute.class);
        if (atribute.onsubmit) e.setAttribute("onsubmit", atribute.onsubmit);
        if (atribute.src) e.setAttribute("src", atribute.src);
        if (atribute.alt) e.setAttribute("alt", atribute.alt);
        if (atribute.width) e.setAttribute("width", atribute.width);
        if (atribute.type) e.setAttribute("type", atribute.type);
        if (atribute.placeholder) e.setAttribute("placeholder", atribute.placeholder);
        if (atribute.onchange) e.setAttribute("onchange", atribute.onchange);
        if (atribute.value) e.setAttribute("value", atribute.value);
    }

    return e;
}