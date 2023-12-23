export interface IBranches {
  id:string,
  region: string,
  ciudad: string,
  comuna: string,
  tlf: string | null,
  email: string | null,
  showDetails: boolean
}
export interface IZones {
  zonaCentral: Array<IBranches>,
  zonaNorte:   Array<IBranches>,
  zonaSur:     Array<IBranches>
}

