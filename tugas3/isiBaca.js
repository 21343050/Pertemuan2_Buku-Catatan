const fs = require("fs");
// const buku = {
//   judul: "Pemrograman Jaringan",
//   penulis: "Randi Proska Sandra",
// };
// const bookJSON = JSON.stringify(book);
fs.writeFileSync("catatan.json", bookJSON);
