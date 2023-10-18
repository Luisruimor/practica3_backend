import express from "npm:express@4.18.2";
import {allDiscos, findDiscoFormato, findDiscoId, findDiscoName, findDiscoPais} from "./resolvers/get.ts";
import {postAddDisco} from "./resolvers/post.ts";
import {deleteDisco} from "./resolvers/delete.ts";
import {putDisco} from "./resolvers/put.ts";

const app = express();

app
    .get("/discos", allDiscos)
    .get("/disco/:id",findDiscoId)
    .get("/discos/:nombre",findDiscoName)
    .get("/discos/:formato",findDiscoFormato)
    .get("/discos/:pais",findDiscoPais)
    .post("/addDisco/:name/:autor/:formato/:matriz/:pais/:id",postAddDisco)
    .put("/updateDisco/:id/:param/:value",putDisco())
    .delete("/deleteDisco/:id",deleteDisco())

app.listen(3000);