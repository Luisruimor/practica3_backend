import {discosCollection} from "../db/mongo.ts";

export const deleteDisco = async (req:Request, res:Response) => {
    const deleteDisco = await discosCollection.deleteOne({ _id: req.params._id } );
    deleteDisco>0? res.send("Se ha borrado correctamente"): res.send("No se ha encontrado ningún valor con ese id")
}