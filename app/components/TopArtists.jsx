"use client";

import { getTopArtists } from "@/lib/Spotify";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const TopArtists = () => {
  const { data: session } = useSession();

  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    const fetchTopArtists = async () => {
      const artists = await getTopArtists(session?.accessToken);
      setTopArtists(artists.items);
    };
    if (session?.accessToken) {
      fetchTopArtists();
    }
  }, [session]);
  return (
    <div className="bg-white shadow border border-gray-300 rounded-lg flex flex-col mt-8">
      <h1 className="p-4 ml-2 text-2xl font-mono">Top 5 Artists</h1>
      <hr />
      {topArtists.map((artists, index) => (
        <div key={artists.id} className="flex items-center gap-4">
          <h2 className="ml-2 font-mono p-4 text-purple-500 text-xl">
            {index + 1}.
          </h2>
          <div className="p-2">
            <h3 className="text-purple-500 text-xl font-mono">
              {artists.name}
            </h3>
            <p className="text-lg text-gray-500 font-mono">
              {`Popularity Score: ${artists.popularity}`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopArtists;
