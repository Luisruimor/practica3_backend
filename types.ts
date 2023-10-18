export type Disco = {
    nombre:string,
    autor:string,
    formato:Formato,
    matriz:boolean,
    pais:string,
    id:number
}

enum Formato {
    CD = "CD",
    DVD = "DVD",
    BlueRay = "BlueRay",
    Vinilo = "Vinilo"
}