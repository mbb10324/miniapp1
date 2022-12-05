/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('movies_table', table => {
        table.increments()
        table.string('movie_title', 100)
        table.float('rating')
        table.text('image', 100)
        table.boolean('watched')
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movies_table')
};
