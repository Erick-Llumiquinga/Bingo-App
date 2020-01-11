exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tipo_persona")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tipo_persona").insert([
        { id: 1, tipo_persona_nombre: "Administrador" },
        { id: 2, tipo_persona_nombre: "Jugador" }
      ]);
    });
};
