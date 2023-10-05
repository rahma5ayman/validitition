var Eror =document.getElementById("Eror")
var form =document.getElementById("form")
var Username =document.getElementById("Username")
var Email =document.getElementById("Email")
var Password =document.getElementById("Password")
var submit =document.getElementById("submit")



form.addEventListener("submit",function (event) {
    let Error =[];
    if (Username.value.length<5|| Username == null) {
        Error.push("please Enter Valed Username")
    }
    if (Email.value ==="" ||Email == null) {
        Error.push("please Enter Valed Email")
    }
    if (Password.value =="" || Password == null) {
        Error.push("please Enter Valed Password")
    }

    if (Error.length>0) {
        event.preventDefault();
        Eror.innerHTML=Error.join("<br>")
 }
})































