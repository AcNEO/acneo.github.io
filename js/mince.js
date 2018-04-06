
let count = 2;

function validate() {
    let un = document.login.username.value;
    let pw = document.login.password.value;
    let hs = Sha1.hash(pw);
    let uhs = Sha1.hash(un);
    let valid = false;

    let unArray = ["645395a7c66b6064c08ddc3e8259ee8ccfefe973", "df40d05534d0435bb45a1222d4901a0e7a980d27"];
    let pwArray = ["03d67c263c27a453ef65b29e30334727333ccbcd", "b7a875fc1ea228b9061041b7cec4bd3c52ab3ce3"];

    for (let i = 0; i <= unArray.length; i++) {
        if ((uhs == unArray[i]) && (hs == pwArray[i])) {
            valid = true;
            break;
        }
    }
    let code = "notpass";
    if (valid) { //QdEYHAS34UpXBCAI // secret code
        let sc = prompt ("[BOT] Login was successful. Please Enter Secret Code.");
        let scha = Sha1.hash(sc);
        // 0701535023773452 // 3060134476148582 // 2614075706790787
        let sch = ["68114dc97f17b82adc3a0c6a2769afa159a8cd1c", "78b818740c45c921387910eeee3fe0d205742fe2", "4a1ced6851a89c12c719be1d57d0cecfd8faeaa3"];
        for(let ii = 0; ii <= sch.length; ii++) {
            if(scha == sch[ii]){
                code = "pass";
                break;
            }
        }
        if(code == "pass") {
            for(x = 5; x >= 1; x--) {
                let pp = prompt("Secret Code is accepted. Please click for: " + x + " times.", '');
                if(x == 3) { // v1OA62azVboLp3&X
                    let dmp = pp + "+20c6c315246a1df098c4ae6043cae47ebc5d5560";
                    let pph = Sha1.hash(dmp);
                    if(pph == "353383c60088519624a5bcc38a73ca8bfa8760e9") {
                        alert("[BOT] You\'re in a secret realm....")
                        window.location = "/" + pwArray[0] + ".htm";
                        return false;
                    }
                }
                if(x == 1) {
                    alert("[BOT] Welcome to this website.")
                    let ss = "53a5687cb26dc41f2ab4033e97e13adefd3740d6";
                    window.location = "/" + ss + ".htm";
                    return false;
                }
            }
        }else{
            window.location.reload(true);
            return false;
        }

    }

    let t = " tries";
    if (count == 1) {
        t = " try"
    }
    if (count >= 1) {
        alert ("[BOT] Invalid username and/or password.  You have " + count + t + " left.");
        document.login.username.value = "";
        document.login.password.value = "";
        setTimeout("document.login.username.focus()", 25);
        setTimeout("document.login.username.select()", 25);
        count--;
    }else{
        alert ("[BOT] Still incorrect! You have no more tries left!");
        document.login.username.value = "No more tries allowed!";
        document.login.password.value = "";
        document.login.username.disabled = true;
        document.login.password.disabled = true;
        return false;
    }
}