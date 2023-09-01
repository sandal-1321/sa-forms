let btn = document.getElementById("butt")
let form = document.form2;
let { user, mail, pw, cpw } = form;
let ePtn = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


function err() {
    if (user.value.length == 0) {
        let uerr = document.getElementById('uerr')
        uerr.innerText = ""
    }
    else if (user.value.length <= 2) {

        uerr.innerText = "** More Than 3 Characters"
    }
    else {
        uerr.innerText = ""
    }




    if (mail.value.length == 0) {
        let eerr = document.getElementById('eerr')
        eerr.innerText = ""
    }
    else if (mail.value.match(ePtn)) {
        let eerr = document.getElementById('eerr')
        eerr.innerText = ""
    }
    else {
        eerr.innerText = "**Email Contain one @ & ."
    }


    if (pw.value.length == 0) {
        let perr = document.getElementById('perr')
        perr.innerText = ""
    }
    else if (pw.value.length <= 6) {
        perr.innerText = "**PassWord Need More Then 7"
    }
    else {
        perr.innerText = ""
    }

    if (cpw.value.length !== 0) {
        let perr = document.getElementById('perr')
        if (cpw.value == pw.value) {
            cperr.innerText = "";
        }
        else {
            cperr.innerText = "**PassWord Do Not Match";
        }
    }
    else {
        cperr.innerText = ""
    }


}


btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (user.value.length !== 0) {
    }
    else {
        uerr.innerText = "**Fill The User Name"
    }
    if (mail.value.length !== 0) {
    }
    else {
        eerr.innerText = "**Fill The Email "
    }
    if (pw.value.length !== 0) {
    }
    else {
        perr.innerText = "**Fill The PassWord"
    }
    if (cpw.value.length !== 0) {
    }
    else {
        cperr.innerText = "**Fill The Confirm PassWord"
    }
    if (user.value.length !== 0 && mail.value.length !== 0 && pw.value.length !== 0 && cpw.value.length !== 0) {
        alert("Submited")
        user.value = "";
         mail.value = "";
         pw.value = "";
         cpw.value = "";
    }
    
})
