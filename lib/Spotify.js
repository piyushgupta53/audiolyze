import axios from "axios";

const createSpotifyApiRequest = async (url, token) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Spotify API:", error);
    throw error;
  }
};

export const getTopTracks = (token) => {
  return createSpotifyApiRequest(
    "https://api.spotify.com/v1/me/top/tracks?limit=5",
    token
  );
};

export const getTopArtists = (token) => {
  return createSpotifyApiRequest(
    "https://api.spotify.com/v1/me/top/artists?limit=5",
    token
  );
};

export const getRecentlyPlayed = (token) => {
  return createSpotifyApiRequest(
    "https://api.spotify.com/v1/me/player/recently-played?limit=5",
    token
  );
};
