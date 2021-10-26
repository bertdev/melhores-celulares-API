const db = require('../database');

class PhonesRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT model, price, brand, TO_CHAR(startdate, 'dd/mm/yyyy') AS "startDate", TO_CHAR(enddate, 'dd/mm/yyyy') AS "endDate", color, code
      FROM phones;
    `);

    return rows;
  }

  async findByCode(code) {
    const [row] = await db.query(`
      SELECT model, price, brand, TO_CHAR(startdate, 'dd/mm/yyyy') AS "startDate", TO_CHAR(enddate, 'dd/mm/yyyy') AS "endDate", color, code
      FROM phones
      WHERE code = $1;
    `, [code]);

    return row;
  }

  async create({
    model, price, brand, startDate, endDate, color, code
  }) {
    const [row] = await db.query(`
      INSERT INTO phones(model, price, brand, startdate, enddate, color, code)
      VALUES($1, $2, $3, $4, $5, $6, $7)
      RETURNING model, price, brand, TO_CHAR(startdate, 'dd/mm/yyyy') AS "startDate", TO_CHAR(enddate, 'dd/mm/yyyy') AS "endDate", color, code
    `, [model, price, brand, startDate, endDate, color, code]);

    return row;
  }

  async update({
    model, price, brand, startDate, endDate, color, code
  }) {
    const [row] = await db.query(`
      UPDATE phones
      SET model = $1, price = $2, brand = $3, startdate = $4, enddate = $5, color = $6
      WHERE code = $7
      RETURNING model, price, brand, TO_CHAR(startdate, 'dd/mm/yyyy') AS "startDate", TO_CHAR(enddate, 'dd/mm/yyyy') AS "endDate", color, code
    `, [model, price, brand, startDate, endDate, color, code]);

    return row;
  }

  async delete(code) {
    const deleteop = await db.query('DELETE FROM phones WHERE code = $1', [code]);
    return deleteop;
  }
};

module.exports = new PhonesRepository();
