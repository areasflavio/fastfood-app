module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'fastfood_app',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
