// build your `Project` model here
const db = require("../../data/dbConfig");

function getProjects() {

    return db("*")
        .from("projects")
        .orderBy("projects_id")
}

async function addProjects(project) {

    if(project.project_completed === 1) {
        project.project_completed = true
    } else if (project.project_completed === 0) {
        project.project_completed = false
    }

    const [project_id] = await db("projects").insert(project)
    return db("*")
        .from("projects")
        .where({project_id})
        .first()

}

module.exports = {

    getProjects,
    addProjects
};