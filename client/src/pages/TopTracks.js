import React, { useEffect, useState } from "react";
import { catchErrors } from "../utils";
import { getTopTracks } from "../api";
import {
  SectionWrapper,
  TrackList,
  TimeRangeButtons,
  Loader,
} from "../components";

const TopTracks = ({ playingTrack, setPlayingTrack, isPlaying }) => {
  const [topTracks, setTopTracks] = useState(null);
  const [activeRange, setActiveRange] = useState("long");

  useEffect(() => {
    const fetchData = async () => {
      const userTopTracks = await getTopTracks(`${activeRange}_term`);
      setTopTracks(userTopTracks.data);
    };

    catchErrors(fetchData());
  }, [activeRange]);
  return (
    <>
      <main>
        {topTracks ? (
          <SectionWrapper title="Top Tracks" breadcrumb="true">
            <TimeRangeButtons
              activeRange={activeRange}
              setActiveRange={setActiveRange}
            />
            <TrackList
              tracks={topTracks.items}
              playingTrack={playingTrack}
              setPlayingTrack={setPlayingTrack}
              isPlaying={isPlaying}
            />
          </SectionWrapper>
        ) : (
          <Loader />
        )}
      </main>
    </>
  );
};

export default TopTracks;
