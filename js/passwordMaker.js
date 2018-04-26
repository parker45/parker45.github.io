function passwordMaker(num){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_!"
    var password = "";
    for(var i = 0; i < num; i++){
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}


$(function(){

});