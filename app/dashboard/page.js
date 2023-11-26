"use client";

import TopTracks from "../components/TopTracks";
import TopArtists from "../components/TopArtists";
import RecentlyPlayed from "../components/RecentlyPlayed";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full w-full bg-gradient-radial from-fuchsia-300 to-lime-300">
      <div className="p-24 h-full">
        <TopTracks />
        <TopArtists />
        <RecentlyPlayed />
      </div>
    </div>
  );
};

export default Dashboard;
