import axios from "axios";

// Menggunakan import.meta.env untuk mengakses variabel lingkungan
const apiKey = import.meta.env.VITE_APIKEY;
const baseUrl = import.meta.env.VITE_BASEURL;

export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
    console.log({ movieList: movie });
    return movie.data.results;
};

export const searchMovie = async (q) => {
    // Memperbaiki URL dengan menggunakan karakter & yang benar
    const search = await axios.get(
        `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}` // Mengganti $ dengan &
    );
    return search.data;
};
