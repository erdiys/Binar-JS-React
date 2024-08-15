import sql from "mssql";
import { pipeline } from "stream";
// import db from "./database.config";

// const sqlConfig = {
//   user: db.user,
//   password: db.password,
//   database: db.database,
//   server: db.server,
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000,
//   },
//   options: db.options,
// };

const sqlConfig = {
  user: "sa",
  password: "toyotaerdi",
  database: "CAR_RENTAL",
  server: "localhost",
  pool: {
    max: 30,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    trustServerCertificate: true,
    encrypt: true,
  },
};

// console.log(sqlConfig);

const testRun = async () => {
  let data;
  const pool = new sql.ConnectionPool(sqlConfig);
  pool.connect(err => console.log(err));
  
  if (pool.connected) {
    const request = new sql.Request();
    const readableStream = request.toReadableStream({ highWaterMark: 100 });
    pipeline(readableStream, transformStream, writableStream);
    await request.query("select * from TB_M_CARS");
    request.on('done', result => data = result.recordset);
  }

  // if (!pool.connected) {
  //   await pool.close();
  // }

  if (data !== undefined) {
    for (let dat in data) {
      console.log("DATA", dat);
    }
  }
};

const listCars = async (inputData) => {
  let data;
  try {
    let sqlConnected = await sql.connect(sqlConfig);
    console.log(sqlConnected.connected);
    const result = await sqlConnected.query("select * from TB_M_CARS");
    data = result.recordset;

    const filteredCars = data.filter((el) => {
      return inputData.capacity
        ? el.CAPACITY >= inputData.capacity
        : true &&
            el.TYPEDRIVER === inputData.typeDriver &&
            el.AVAILABLEAT >= new Date(inputData.tanggal) &&
            el.AVAILABLEAT.getHours() >= Number(inputData.waktu);
    });
    return filteredCars;
  } catch (err) {
    console.log(err.originalError);
    console.log("next");
    console.log(err.code);
  }
};

testRun();

export { listCars };
