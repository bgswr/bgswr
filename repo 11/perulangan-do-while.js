var ulangi = confirm("Apakah anda mau mengulang?");
var counter = 0;

do {
    counter++;
    ulangi = confirm("Apakah anda mau mengulang?");
} while(ulangi)
document.write("perulangan sudah dilakukan sebanyak "+ counter +" kali");