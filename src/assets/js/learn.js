// Variable
// 1. var = Old School
var x = 0;
x = 15;
// console.log(x);

// Variable Modern
// 1. let
let z = 10;
z = 5;
// console.log(z);

// 2. const
const y = 5;
// y = 7;
// console.log(y);

// Tipe Data
// primitif
let text = "lorem ipsum"; // string
let number = 0; // number
let kosong = null;
let undef; // undefined
let undef2 = undefined;
let isMorning = true; // boolean
let isEvening = false;

// non primitif
// 1. object
const zenix = {
  brand: "Toyota",
  mesin: "Hybrid",
  warna: "Black",
  specs: {
    mesin: "2.0l",
    rangka: "TNGA",
  },
};
// console.log(zenix);
// console.log(zenix.specs.mesin);

zenix.specs.mesin = "2.5l";
// console.log(zenix.specs.mesin);

// 2. array
const mobilToyota = ["GR Yaris", "Reborn", "Supra"];
// console.log(mobilToyota[1]);
mobilToyota[1] = "Innova Reborn";
// console.log(mobilToyota[1]);

const mobil = [
  {
    nama: "GR Yaris Cross",
    mesin: "Hybrid",
    warna: "Black",
    specs: {
      mesin: "1.5l",
      rangka: "TNGA",
    },
  },
  {
    nama: "Innova Reborn",
    mesin: "Diesel",
    warna: "Black",
    specs: {
      mesin: "2.5l",
      rangka: "TNGA",
    },
  },
  {
    nama: "Supra",
    mesin: "Bensin",
    warna: "Red",
    specs: {
      mesin: "3.5l",
      rangka: "TNGA",
    },
  },
];
// console.log(mobil[2].specs);

// Operator
// 1. Aritmatika
const tambah = 1 + 1;
const kali = 2 * 2;
const hasilBagi = 2 % 2;
const pangkat = 2 ** 2;

// 2. Concatenation // menggabungkan 2 string
const a = "a";
const b = "b";
const newText = a + b;
// console.log(newText);
// console.log('10' + mobilToyota);

// 3. Assignment
let seribu = 1000;
seribu = seribu + 500;
seribu += 500;
// console.log(seribu);

// 4. Logical <,>,<=,>=,=,==,===,!=,!==,
const x1 = 1;
const x2 = 2;
const result = x2 > x1;
// console.log(result);

// sama dengan / equality
// console.log(1 === 1);   // true
// console.log('1' == 1);  // true
// console.log('1' === 1); // false

// // tidak sama dengan / not equal
// console.log(2 !== 2);
// console.log(2 != 2);

import sql from "mssql";

const testRun = async () => {
  let data;
  let pool = sql.connect(
    {
      server: "localhost",
      database: "CAR_RENTAL",
      user: "sa",
      password: "toyotaerdi",
      // options: {
      //   trustServerCertificate: true,
      //   encrypt: true,
      // },
      // beforeConnect: (conn) => {
      //   conn.once("connect", (err) => {
      //     err ? console.error(err) : console.log("mssql connected");
      //   });
      //   conn.once("end", (err) => {
      //     err ? console.error(err) : console.log("mssql disconnected");
      //   });
      // },
    },
    (err) => console.log(err)
  );

  // const pool = new sql.ConnectionPool(`Server=localhost,1433;Database=CAR_RENTAL;User Id=sa;Password=toyotaerdi;Encrypt=true`);
  // pool.connect((err) => console.log(err.code));
  let num = 0;
  while (pool._connecting) {
    num += 1;
    if (num % 100000000 == 0) {
      console.log(num / 100000000, pool._connected);
    }
  }

  if (await pool.connected) {
    const request = new sql.Request();
    const readableStream = request.toReadableStream({ highWaterMark: 100 });
    pipeline(readableStream, transformStream, writableStream);
    await request.query("select * from TB_M_CARS");
    request.on("done", (result) => (data = result.recordset));
    console.log("if", data);
  }
  console.log("out", pool);
};

testRun();
