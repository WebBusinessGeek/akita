export const PRODUCTION_ENV = "production"
export const DEVELOPMENT_ENV = "development"

export const CURR_ENV = DEVELOPMENT_ENV

export let getEnv = () => { return CURR_ENV }
export let isProductionEnv = () => { return getEnv() === PRODUCTION_ENV}