var print = function(msg) {
    document.getElementById("optput").innerHTML = "Length is : " + msg;
}
document.getElementById("btn").onclick = function(event) {
    print(document.getElementById('str').value.length);
}