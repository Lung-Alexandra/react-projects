import { Client, ID, Query, TablesDB } from "appwrite";

const client = new Client()
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);

const DATABASE_ID = process.env.REACT_APP_APPWRITE_DATABASE_ID;
const TABLE_ID = process.env.REACT_APP_APPWRITE_TABLE_ID;
const tablesDB = new TablesDB(client);

export { DATABASE_ID, ID, Query, TABLE_ID, tablesDB };
