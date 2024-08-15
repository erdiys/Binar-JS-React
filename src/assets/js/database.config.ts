export default {
  user: "sa",
  password: "toyotaerdi",
  database: "CAR_RENTAL",
  server: "N201002809949",
  port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    trustServerCertificate: true,
    encrypt: false,
  },
};
