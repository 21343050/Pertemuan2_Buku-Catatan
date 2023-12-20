// const chalk = require("chalk");
const yargs = require("yargs");
const catatan = require("./catatan.js");
// kustomisasi versi yargs
yargs.version("10.1.0");

// membuat perintah command 'tambah'
yargs.command({
  command: "tambah",
  describe: "tambah sebuah catatan baru",
  handler: function () {
    console.log("sebuah catatan baru ditambahkan!");
  },
});

// perintah hapus
yargs.command({
  command: "hapus",
  describe: "hapus catatan",
  builder: {
    judul: {
      describe: "Judul catatan",
      demandOption: true,
      type: "string",
    },
  },
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
    catatan.hapusCatatan(argv.judul);
  },
});
//letakan bagian ini pada baris terkahir
// console.log(yargs.argv);
yargs.parse();
