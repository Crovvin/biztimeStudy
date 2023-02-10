/** Database setup for BizTime. */

const { Client } = require("pg");
const newClient = new Client({connectionString: "postgresql:///biztime"});
newClient.connect();
module.exports = newClient;