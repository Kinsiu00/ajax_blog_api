
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogposts', table => {
    table.increments();
    table.string('title');
    table.text('content');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogposts');
};
