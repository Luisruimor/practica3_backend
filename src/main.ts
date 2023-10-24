import express from "express"
import {allDiscos, findDiscoFormato, findDiscoId, findDiscoName, findDiscoPais} from "./resolvers/get.ts";
import {postAddDisco} from "./resolvers/post.ts";
import {deleteDisco} from "./resolvers/delete.ts";
import {putDisco} from "./resolvers/put.ts";
import {marked} from "marked";

const app = express();

app.use(express.json());

app
    .get("", (req:Request, res:Response) =>{
        const decoder = new TextDecoder("utf-8");
        const markdown = Deno.readTextFileSync('src/onlyDocu.md');
        const html = marked(markdown);
        res.send(html);
    })
    .get("/disco", allDiscos)
    .get("/disco/:_id",findDiscoId)
    .get("/disco/nombre/:nombre",findDiscoName)
    .get("/disco/formato/:formato",findDiscoFormato)
    .get("/disco/pais/:pais",findDiscoPais)
    .post("/addDisco",postAddDisco)
    .put("/updateDisco/:_id",putDisco)
    .delete("/deleteDisco/:_id",deleteDisco)

app.listen(3000);