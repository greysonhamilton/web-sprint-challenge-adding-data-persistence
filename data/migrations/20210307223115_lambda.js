exports.up = async function(knex) {

    await knex.schema.createTable("projects", tbl => {
        tbl.increments("project_id")
        tbl.text("project_name").notNullable()
        tbl.text("project_description")
        tbl.boolean("project_completed")

    })

    await knex.schema.createTable("resources", tbl => {

      tbl.increments("resource_id")
      tbl.text("resource_name").unique().notNullable()
      tbl.text("resource_description")  

    })

    await knex.schema.createTable("tasks", tbl => {

        tbl.increments("task_id")
        tbl.text("task_description").notNullable()
        tbl.text("task_notes")
        tbl.boolean("task_completed")
        tbl.integer("project_id").unsigned().references("project_id").inTable("Project")

    })

    await knex.schema.createTable("project_recources", tbl => {

        tbl.increments("project_resources_id")
        tbl.integer("resources_id").unsigned().notNullable().references("resources_id").inTable("resources")
        tbl.integer("task_id").unsigned().notNullable().references("task_id").inTable("task")
        tbl.boolean("resource_viewed").defaultTo(true)

    })

  };
  
  exports.down = async function(knex) {

    await knex.schema.dropTableIfExists("project_recources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")

  };