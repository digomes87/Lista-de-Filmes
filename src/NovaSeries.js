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
    this.save =this.save.bind(this)
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

  save(){
    const novoRegistros = {
      name: this.refs.name.value,
      comentario:this.refs.comentario.value,
      status:this.refs.status.value,
      genre:this.refs.genre.value
    }
    api.save(novoRegistros).then((res)=>console.log(res))
    console.log(novoRegistros)
  }
  render() {
    return (
      <section className="intro-section">
        <h1>Nova Séries</h1>
        <form>
          Nome da Serie : <input type="text" ref="name" className="form-control" /><br />
          Comentários: <textarea ref="comentario" className="form-control"></textarea><br />
          status:
            <select ref="status">
            {Object.keys(statuses).map(key => <option key={key} value={key}>{statuses[key]}</option>)}
          </select><br />

          Genero:
            <select ref="genre">
            {this.state.genres.map(key => <option key={key} value={key}>{key}</option>)}
          </select><br />

        <button type="button" className="btn btn-primary" onClick={this.save}>Salvar</button>
        </form>
      </section>
    )
  }
}

export default NovaSeries