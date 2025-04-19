import { Pensamento } from "./pensamento"

export interface RetornoPaginado {
  totalRegistros: number
  pensamentos: Pensamento[]
}
