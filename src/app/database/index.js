// const { Client } = require('pg');

// const client = new Client({
//   host: process.env.PGPHOST,
//   port: process.env.PGPORT,
//   user: process.env.PGUSER,
//   password: process.env.PGPASSWORD,
//   database: process.env.PGDATABASE
// });

// client.connect();

// exports.query = async (query, values) => {
//   const { rows } = await client.query(query, values);
//   return rows;
// }
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});


exports.query = async (query, values) => {
  const { rows } = await pool.query(query, values);
  return rows;
}
