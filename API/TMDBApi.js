const API_TOKEN = "b1cc9ce6efe539b03d290b0c2b74cd17";

export const getFilmsFromApiWithSearchedText = (text, page) => {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${text}&page=${page}`
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export const getImageFromApi = name => 'https://image.tmdb.org/t/p/w300' + name

export const getOneFilm = id => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=fr`
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
