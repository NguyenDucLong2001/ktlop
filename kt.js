function kt(b) {
    c = /^[C|A|P][0-9]{4}[G|H|I|K|L|M]$/g;
    if (c.test(b)){
        document.write("Hợp lệ");
    }
    else {
        document.write("Không hợp lệ");
    }
}
function bt() {
    var input = document.getElementById("input").value;
    var hihi = kt(input);
    document.getElementById("hihi").innerHTML = hihi;
}