export type Disco = {
    nombre:string,
    autor:string,
    formato:Formato,
    matriz:boolean,
    pais:string,
}

enum Formato {
    CD = "CD",
    DVD = "DVD",
    BlueRay = "BlueRay",
    Vinilo = "Vinilo"
}