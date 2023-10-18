import { discosCollection } from "../db/mongo.ts";
import {DiscoSchema} from "../db/schema.ts";

export const allDiscos = async (req:Request, res:Response) => {
    const all_discos:DiscoSchema[] = await discosCollection.find({ _id: { $ne: null } }).toArray();
    all_discos ? res.send(all_discos) : res.send("Error al obtener discos");
}

export const findDiscoId = async (req:Request, res:Response) => {
    const discoId = await discosCollection.findOne({ id: req.params.id });
    discoId ? res.send(discoId):res.send("Error al obtener el disco")
}

export const findDiscoName = async (req: Request, res: Response) => {
    const discoName:DiscoSchema[] = await discosCollection.find({ nombre: { $eq: req.params.nombre } }).toArray();
    discoName ? res.send(discoName):res.send("Error al obtener discos")
}

export const findDiscoFormato = async (req:Request, res:Response) => {
    const discoFormato:DiscoSchema[] = await discosCollection.find({ formato: { $eq: req.params.formato } }).toArray();
    discoFormato ? res.send(discoFormato):res.send("Error al obtener discos")
}

export const findDiscoPais = async (req:Request, res:Response) => {
    const discoPais:DiscoSchema[] = await discosCollection.find({ pais: { $eq: req.params.pais } }).toArray();
    discoPais ? res.send(discoPais):res.send("Error al obtener discos")
}