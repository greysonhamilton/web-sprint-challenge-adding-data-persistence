// build your `Resource` model here
const db = require("../../data/dbConfig");

function getResources() {

    return db("*")
        .from("resources")
        .orderBy("resource_id")
}

async function addResource(resource) {

    const [resource_id] = await db("resources")
        .insert(resource)

    return db("*")
        .from("resources")
        .where(resource_id)
}

module.exports = {

    getResources,
    addResource

};