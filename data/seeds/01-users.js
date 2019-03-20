exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          user_id: 1,
          first_name: "Josh",
          last_name: "Armantrout",
          email: "josh@josh.com",
          password: "joshpassword",
          username: "josharmantrout"
        }
      ]);
    });
};
