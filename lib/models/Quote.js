const pool = require('../utils/pool');

module.exports = class Quote {
    id;
    quote;

  constructor(row) {
    this.id = row.id;
    this.quote = row.quote;  
  }

  static async insert(quote) {
    const { rows } = await pool.query(
        'INSERT INTO quotes (quote) VALUES ($1) RETURNING *',
        [quote]
      );
    return new Quote(rows[0]);
  }

  static async select() {
   const { rows } = await pool.query(
     'SELECT * FROM quotes'
   );
   return rows.map((row) => new Quote(row));
  }

  static async selectNum() {
    
  }
};
