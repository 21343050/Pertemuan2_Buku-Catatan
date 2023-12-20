// const fs = require("fs");
// fs.writeFileSync("catatan.txt", "Nama Saya Randi Proska");
// fs.appendFileSync("catatan.txt", " Saya Tinggal DiPadang");

// const catatan = require("./catatan.js");
// const pesan = catatan();
// console.log(pesan);

const chalk = require("chalk");

const validator = require("validator");
const ambilCatatan = require("./catatan.js");

const command = process.argv[2];
console.log(process.argv);

if (command === "tambah") {
  console.log("Tambah Catatan");
} else if (command === "hapus") {
  console.log("Hapus Catatan");
}

const pesan = ambilCatatan();

console.log(chalk.blue(pesan));
console.log(validator.isURL("https://proska.com"));

const yargs = require("yargs");
const catatan = require("./catatan.js");
// kustomisasi versi yargs
yargs.version("10.1.0");

// membuat perintah command 'tambah'
yargs.command({
  command: "tambah",
  describe: "tambahn sebuah catatan baru",
  handler: function () {
    console.log("sebuah catatan baru ditambahkan!");
  },
});

// perintah hapus
yargs.command({
  command: "hapus",
  describe: "hapus catatan",
  handler: function () {
    console.log("Catatan berhasil dihapus");
  },
});

//instruksi no.4 letakan disini
yargs.command({
  command: "tambah",
  describe: "tambah sebuah catatan baru",
  builder: {
    judul: {
      describe: "Judul catatan",
      demandOption: true,
      type: "string",
    },
    isi: {
      describe: "Isi catatan",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Judul: " + argv.judul);
    console.log("Isi: " + argv.isi);
  },
});

//letakan bagian ini pada baris terkahir
yargs.parse();
