//simpan ke local storage
localStorage.setItem("npm", 123);

//baca data local storage
//tampil di console
console.log(localStorage.getItem("npm"))

//tampilkan di paragaraf id=npm
document.getElementById("npm").innerHTML = 
localStorage.getItem("npm");