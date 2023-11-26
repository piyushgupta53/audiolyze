"use client";

import { getRecentlyPlayed } from "@/lib/Spotify";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const RecentlyPlayed = () => {
  const { data: session } = useSession();
  const [recentSongs, setRecentSongs] = useState([]);

  useEffect(() => {
    const fetchRecentSongs = async () => {
      const songs = await getRecentlyPlayed(session?.accessToken);
      setRecentSongs(songs.items);
    };
    if (session?.accessToken) {
      fetchRecentSongs();
    }
  }, [session]);

  return (
    <div className="bg-white shadow border border-gray-300 rounded-lg flex flex-col mt-8">
      <h1 className="p-4 ml-2 text-2xl font-mono">Recent 5 Tracks</h1>
      <hr />
      {recentSongs.map((songs, index) => (
        <div key={songs.track.id} className="flex items-center gap-4">
          <h2 className="ml-2 font-mono p-4 text-purple-500 text-xl">
            {index + 1}.
          </h2>
          <div className="p-2">
            <h3 className="text-purple-500 text-xl font-mono">
              {songs.track.name}
            </h3>
            {songs.track.artists.map((artistName) => (
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

export default RecentlyPlayed;
