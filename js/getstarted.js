//

function getstartup() {
    var x;
    var p = window.location.protocol;
    var l = window.location.port;
    var a = window.location.host;
    var b = window.location.hostname;
    var c = window.location.href;
    var name = prompt("[BOT] Hello, what is your name ?", '');
    if(name !== "") {
        if(name !== null){
            var msgc = 5;
            for(x = 0; x <= msgc; x++) {
                if(x = 1){
                    alert("[BOT] Welcome to AcNEO\'s website, @ " + name);
                }
                if(x = 2) {
                    alert("[BOT] This website doesn't accept any registeration.\n" + "Only for does that have capability or have a password, can they access to my site.");
                }
                if(x = 3) {
                    alert("[BOT] Dear, " + name + "\nPlease read our license, code of conduct, contributing, etc before interact with me/us.");
                }
                if(x = 4) {
                    alert("[BOT] \nWebsite Protocol:  [  " + p + "  ]\n" + "Website Port:  [  " + l + "  ]\n" + "Website Host : " + a + "\nWebsite Host Name: " + b + "\nWebsite Href: " + c + "\n");
                }
                if(x = 5) {
                    alert("[BOT] That\'s all... Thank you xP");
                    window.location.reload(true);
                    return false;
                }
            }
        }else{
            window.location.reload(true);
        }
    }else{
        window.location.reload(true);
    }
}

