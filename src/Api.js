import axios from 'axios'

const api = axios.create({
  baseURL:'http://localhost:3001'
})

export const loadGenres = () => api.get('genres')
export const save = (novoRegistros) => api.post('series', novoRegistros)
export const loadSeries = (genre) => api.get('series?genre='+genre)

const apis = {
  loadGenres: loadGenres,
  save: save,
  loadSeries: loadSeries
}

export default apis