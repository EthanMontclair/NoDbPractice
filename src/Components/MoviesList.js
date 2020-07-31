import React, {Component} from 'react'
import axios from 'axios'
import Movie from './Movie'


class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        axios.get('/api/movies')
        .then((results) => {
            this.setState({movies: results.data})
        })
        .catch((err) => console.log(err))
    }

    render() {
        return(
            <div>
                    {this.state.movies.map((element, index) => {
                       return <Movie 
                        movie={element} 
                        key={index}  />
                    })}
            </div>

        )
    }
}

export default MoviesList