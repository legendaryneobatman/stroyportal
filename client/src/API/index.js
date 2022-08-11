const API_URL = 'http://localhost:9090?'

export const getSearchFields = async (params) => await fetch(API_URL + params, { method: 'GET' })
