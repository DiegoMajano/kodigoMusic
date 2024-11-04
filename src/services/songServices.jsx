import axios from 'axios';

const topArtists = [
  "Doja Cat",
  "Eminen",
  "Danny Ocean",
  "Anitta",
  "Coldplay",
  "Ariana Grande",
  "Ed Sheeran",
  "Rihanna",
  "J Balvin",
  "Beyoncé",
  "Harry Styles",
  "Kanye West",
  "Taylor Swift",
  "Justin Bieber",
  "Dua Lipa",
  "Shakira",
  "Lil Nas X",
  "Lady Gaga",
  "Kendrick Lamar",
  "Bruno Mars",
  "Rosalía",
  "Billie Eilish",
  "The Chainsmokers",
  "Adele",
  "Travis Scott"
];

const getSearch = async (song, type = 'multi') => {

    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/search/',
        params: {
          q: song,
          type: type,
          offset: '0',
          limit: '1',
          numberOfTopResults: '5'
        },
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_APIKEY,
            'x-rapidapi-host': import.meta.env.VITE_X_RAPIDAPI_HOST
        }
      };
    
      try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
    
}
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getPlaylist = async () => {
  try {
    const playlists = [];
    
    for (const artist of topArtists) {
      const playlist = await getSearch(artist, 'playlists');
      if (playlist) playlists.push(playlist);
      await delay(1000);
    }
    console.log(playlists)
    return playlists;
  } catch (error) {
    console.error("Error con la playlist:", error);
  }
}

export { getSearch, getPlaylist }
