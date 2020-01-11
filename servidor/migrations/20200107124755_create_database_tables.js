exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("tipo_persona", function(table) {
      table.increments("id");
      table.string("tipo_persona_nombre").unique();
      table.string("tipo_persona_descripcion");
    })

    .createTable("cartilla", function(table) {
      table.increments("id");
      table.string("cartilla_codigo").unique();
      table.string("cartilla_numeros");
    })

    .createTable("persona", function(table) {
      table.increments("id");
      table
        .integer("tipo_persona_id")
        .references("id")
        .inTable("tipo_persona");
      table
        .integer("cartilla_id")
        .references("id")
        .inTable("cartilla");
      table.string("persona_nombre");
      table.string("persona_email");
      table.string("persona_clave");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("persona")
    .dropTableIfExists("cartilla")
    .dropTableIfExists("tipo_persona");
};
