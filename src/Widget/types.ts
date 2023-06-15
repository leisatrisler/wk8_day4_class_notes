export type GridUnit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 


export interface Containerable {
    attributes:Partial<Containerable>;
    backgroundColor:string,
    borderColor:string,
    borderRadius:string,
    borderWidth:string,
    borderStyle:string,
    zIndex:number
}

export interface State {
    [key:string]:any
}
