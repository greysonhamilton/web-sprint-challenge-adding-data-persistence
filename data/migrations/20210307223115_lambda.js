exports.up = function(knex) {

    return knex.schema.createTable("projects", tbl => {
        tbl.increments("project_id")
        tbl.text("project_name").notNullable()
        tbl.text("project_description")
        tbl.boolean("project_completed")

    })

    .createTable("resources", tbl => {

      tbl.increments("resource_id")
      tbl.text("resource_name").unique().notNullable()
      tbl.text("resource_description")  

    })

    .createTable("tasks", tbl => {

        tbl.increments("task_id")
        tbl.text("task_description").notNullable()
        tbl.text("task_notes")
        tbl.boolean("task_completed")
        tbl.integer("project_id").unsigned().references("project_id").inTable("Project")

    })

    .createTable("project_recources", tbl => {
        tbl.increments("project_rocources_id")
        tbl.integer("recource_id").unsigned().notNullable().references("recource_id").inTable("Recource")
        tbl.integer("task_id").unsigned().notNullable().references("task_id").inTable("task")
        tbl.boolean("resource_viewed").defaultTo(true)
    })

  };
  
  exports.down = function(knex) {

    return knex.schema
        .dropTableIfExists("project_recources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("projects")

  };