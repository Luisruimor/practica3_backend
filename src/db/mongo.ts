import { MongoClient, Database } from "mongo";
import { DiscoSchema } from "./schema.ts";
import "https://deno.land/std@0.204.0/dotenv/load.ts";


const connectMongoDB = async (): Promise<Database> => {
    const mongo_usr:string|undefined = Deno.env.get("DB_USER")
    const mongo_pwd:string|undefined = Deno.env.get("DB_PASS")
    const db_name :string|undefined = Deno.env.get("DB_NAME")
    const mongo_url :string= `mongodb+srv://${mongo_usr}:${mongo_pwd}@practica3.mtgoibu.mongodb.net/${db_name}?authMechanism=SCRAM-SHA-1`;

    const client:MongoClient= new MongoClient();
    await client.connect(mongo_url);
    const db:Database = client.database(db_name);
    return db;
};

const db:Database = await connectMongoDB();
console.info(`MongoDB ${db.name} connected`);

export const discosCollection = db.collection<DiscoSchema>("discos");