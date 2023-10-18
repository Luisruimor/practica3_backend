import { discosCollection } from "../db/mongo.ts";
import express from "npm:express@4.18.2";
import {DiscoSchema} from "../db/schema.ts";

export const allDiscos = async (req:Request,res:Response) => {
    const all_discos:DiscoSchema[] = await discosCollection.find({ _id: { $ne: null } }).toArray();
    all_discos ? res.send(all_discos) : res.send("Error al obtener discos");
}

export const findDiscoId = async (req:Request,res:Response) => {
    const disco = await discosCollection.findOne({ id: req.params.id });
    disco ? res.send(disco):res.send("Error al obtener discos")
}

export const findDiscoName = (req,res) => {
    //code
}

export const findDiscoFormato = (req,res) => {
    //code
}

export const findDiscoPais = (req,res) => {
    //code
}