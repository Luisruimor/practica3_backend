import { ObjectId } from "mongo";
import { Disco } from "../types.ts";

export type DiscoSchema = Omit<Disco, "id"> & {
    _id: ObjectId;
    nombre:string,
    autor:string,
    formato:string,
    matriz:boolean,
    pais:string,
};