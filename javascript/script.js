// alert("Belajar JavaScript");

function kirim(){
// ambil value nama
let nama = document.getElementById('nama').value;
console.log("Nama : "+ nama);
let saran = document.getElementById('saran').value;
let kritik = document.getElementById('kritik').value;

// // tampilkan nama ke ui id=list-pesan
// document.getElementById('list-pesan').innerHTML = "<li>"+ nama +"</li>";

document.getElementById('list-pesan').innerHTML += 
`<tr>
    <td>${nama}</td>
    <td>${saran}</td>
    <td>${kritik}</td>
</tr>`;
}

