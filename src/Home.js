import React, { Component } from 'react'
import api from './Api'

class Home extends Component {

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

    // axios.get('http://localhost:3001/genres').then((res)=>console.log(res))
  }

  renderLink(genres) {
    return (
      <span><a href="{}">{genres}</a></span>
    )
  }

  render() {
    return (
      <div>
        <section id="intro" className="intro-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1><img src="images/logo.png" alt="Logo" /></h1>
                <p>Nunca mais esqueça uma série que você assistiu ou que alguém lhe indicou.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          {
            this.state.isLoanding &&
            <span>Aguarde carregando....</span>
          }

          {
            !this.state.isLoanding &&
            <span>Ver séries do genero{(this.state.genres.map(this.renderLink))}</span>
          }
        </section>
      </div>
    )
  }
}

export default Home