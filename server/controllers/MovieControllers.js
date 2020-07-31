let movies = [
    {title: "Signs", id: 1},
    {title: "The Man Who Planted Trees", id:2},
    {title: "Arrival", id: 3}
]

module.exports = {
    getMovies: (req, res) => {
        return res.status(200).send(movies)
    },

    addMovie: (req, res) => {},

    deleteMovie: (req, res) => {},

    editMovie: (req, res) => {}
}