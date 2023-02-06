function valida() {

    email = email.value;
    

    if(email == "") {
        window.alert("Campo EMAIL não preenchido");
        email.focus();
    }

    return false;
}
