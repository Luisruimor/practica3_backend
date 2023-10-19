import express from "express"
import {allDiscos, findDiscoFormato, findDiscoId, findDiscoName, findDiscoPais} from "./resolvers/get.ts";
import {postAddDisco} from "./resolvers/post.ts";
import {deleteDisco} from "./resolvers/delete.ts";
import {putDisco} from "./resolvers/put.ts";

const app = express();

app
    .get("/discos", allDiscos)
    .get("/disco/:id",findDiscoId)
    .get("/discos/nombre/:nombre",findDiscoName)
    .get("/discos/formato/:formato",findDiscoFormato)
    .get("/discos/pais/:pais",findDiscoPais)
    .post("/addDisco/:nombre/:autor/:formato/:matriz/:pais",postAddDisco)
    .put("/updateDisco/:id/:nombre/:autor/:formato/:matriz/:pais",putDisco)
    .delete("/deleteDisco/:id",deleteDisco)

app.listen(3000);