import { Country } from "./types"
const data = require("./data.json") as { [code: string]: Country }

export const findCountryByCode = (code: string): Country | undefined => data[code];
