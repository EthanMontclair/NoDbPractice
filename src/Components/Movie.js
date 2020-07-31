import React, {Component} from 'react'

class Movie extends Component {
    constructor(props){
        super(props)
        this.state = {
            edit: false,
            title: " ",
        }
    }

    render(){
        const {movie} = this.props
        return(
            <div>
                <h1>{movie.title}</h1>
            </div>
        )
    }
}

export default Movie