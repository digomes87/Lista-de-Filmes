import React, { Component } from 'react'
import api from './Api'

const statuses = {
  'watched': 'Assistido',
  'watching': 'Assistindo',
  'toWatch': 'Assistir'
}

class NovaSeries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      isLoanding: false
    }
  }

  componentDidMount() {
    this.setState({ isLoanding: true })
    api.loadGenres().then((res) => {
      this.setState({
        isLoanding: false,
        genres: res.data
      })
    })
  }
  render() {
    return (
      <section className="intro-section">
        <h1>Nova Séries</h1>
        <form>
          Nome da Serie : <input type="text" className="form-control" /><br />
          Comentários: <textarea className="form-control"></textarea><br />
          status:
            <select>
            {Object.keys(statuses).map(key => <option key={key} value={key}>{statuses[key]}</option>)}
          </select><br />

          Genero:
            <select>
            {this.state.genres.map(key => <option key={key} value={key}>{key}</option>)}
          </select><br />

        </form>
      </section>
    )
  }
}

export default NovaSeries