const con = require("../config/conn");

const CategoryModel = {
  create: async (name, slug, id) => {
    const query = `
      INSERT INTO categories (name, slug, user_id)
      VALUES (?, ?, ?)
    `;
    const [result] = await con.execute(query, [name, slug, id]);
    console.log("Category created with ID:", result.insertId);
    return result;
  },

  findAll: async () => {
    const query = `SELECT * FROM categories ORDER BY id DESC`;
    const [rows] = await con.execute(query);
    return rows;
  },

  update: async (categoryId, name, slug) => {
    const query = `
      UPDATE categories
      SET name = ?, slug = ?
      WHERE id = ?
    `;
    const [result] = await con.execute(query, [name, slug, categoryId]);
    return result;
  },

  delete: async (categoryId) => {
    const query = `DELETE FROM categories WHERE id = ?`;
    const [result] = await con.execute(query, [categoryId]);
    return result;
  },
  countCategories : async () => {
  const [rows] = await con.query("SELECT COUNT(*) AS count FROM categories");
  return rows[0].count;
},
};



module.exports = CategoryModel ;
