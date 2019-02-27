const fetch = require("node-fetch")
const URL = "https://swapi.co/api/people/"

const getPlanetforFirstSpeciesInFirstMovieForPerson = (id) => {
    fetch(URL + id)
        .then(res => res.json())
        .then(person => {
            console.log("Name: ", person.name)
            fetch(person.films[0])
                .then(res => res.json())
                .then(film => {
                    console.log("First Film: ", film.title)
                    fetch(film.species[0])
                        .then(res => res.json())
                        .then(species => {
                            console.log("First Species: ", species.name)
                            fetch(species.homeworld)
                                .then(res => res.json())
                                .then(homeworld => {
                                    console.log("Homeworld of Specie: ", homeworld.name)
                                })
                        })
                })
        })
}

getPlanetforFirstSpeciesInFirstMovieForPerson(1)