"use client";

import { getTopTracks } from "@/lib/Spotify";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const TopTracks = () => {
  const { data: session } = useSession();
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const tracks = await getTopTracks(session?.accessToken);
        setTopTracks(tracks.items);
      } catch (error) {
        console.log(error.response || error);
        throw error;
      }
    };
    if (session?.accessToken) {
      fetchTopTracks();
    }
  }, [session]);

  return (
    <div className="bg-white shadow border border-gray-300 rounded-lg flex flex-col">
      <h1 className="p-4 ml-2 text-2xl font-mono">Top 5 Tracks</h1>
      <hr />
      {topTracks.map((artists, index) => (
        <div key={artists.id} className="flex items-center gap-4">
          <h2 className="ml-2 font-mono p-4 text-purple-500 text-xl">
            {index + 1}.
          </h2>
          <div className="p-2">
            <h3 className="text-purple-500 text-xl font-mono">
              {artists.name}
            </h3>
            {artists.artists.map((artistName) => (
              <span
                key={artistName.id}
                className=" text-lg text-gray-500 font-mono"
              >
                {artistName.name}{" "}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopTracks;
