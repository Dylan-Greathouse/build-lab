const pool = require('../utils/pool');

module.exports = class Quote {
  quote;

  constructor(row) {
    this.quote = row.quote;  
  }

  static async insert({quote}) {
    const { rows } = await pool.query(
        'SELECT * FROM quotes'
      );
    return new Quote(rows);
  }

  static async select() {
   const { rows } = await pool.query(
     'SELECT * FROM quotes'
   );
   return rows.map((row) => new Quote(row));
  }

  static async selectId() {
    
  }
};
