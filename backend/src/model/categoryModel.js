const con = require("../config/conn");



const CategoryModel = {
  create: async (name, slug) => {
    const query = `
      INSERT INTO categories (name, slug)
      VALUES (?, ?)
    `;
    const [result] = await con.execute(query, [name, slug]);
    return result;
  },

  findAll: async () => {
    const query = `SELECT * FROM categories ORDER BY id DESC`;
    const [rows] = await con.execute(query);
    return rows;
  },

  update: async (id, name, slug) => {
    const query = `
      UPDATE categories
      SET name = ?, slug = ?
      WHERE id = ?
    `;
    const [result] = await con.execute(query, [name, slug, id]);
    return result;
  },

  delete: async (id) => {
    const query = `DELETE FROM categories WHERE id = ?`;
    const [result] = await con.execute(query, [id]);
    return result;
  },
};

module.exports = CategoryModel;