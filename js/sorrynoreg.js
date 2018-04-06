//

function checkClick() {
    document.reg.username.value = "";
    document.reg.email.value = "";
    document.reg.password.value = "";
    document.reg.password2.value = "";


    let mx = 10;
    for(let x = 0; x <= mx; x++) {
        alert("[BOT] This website doesn\'t accept registeration.\n" + "Clicked [OK] : " + x + "/" + mx + ".");
        //return false;
        window.console.log("Registartion Disabled.");
        document.reg.username.value = "DISABLED";
        document.reg.submit.value = "DISABLED";
        document.reg.email.value = "DISABLED";
        document.reg.submit.disabled = true;
        document.reg.username.disabled = true;
        document.reg.email.disabled = true;
        document.reg.password.disabled = true;
        document.reg.password2.disabled = true;
    }
}