import React, { useEffect, useState } from "react";
import { catchErrors } from "../utils";
import { getTopArtists } from "../api";
import { SectionWrapper, ArtistsGrid, TimeRangeButtons } from "../components";

const TopArtists = () => {
  const [topArtists, setTopArtists] = useState(null);
  const [activeRange, setActiveRange] = useState("short");

  useEffect(() => {
    const fetchData = async () => {
      const userTopArtists = await getTopArtists(`${activeRange}_term`);
      setTopArtists(userTopArtists.data);
    };

    catchErrors(fetchData());
  }, [activeRange]);
  return (
    <>
      <main>
        {topArtists && (
          <SectionWrapper title="Top artists" breadcrumb="true">
            <TimeRangeButtons
              activeRange={activeRange}
              setActiveRange={setActiveRange}
            />
            <ArtistsGrid artists={topArtists.items.slice(0, 10)} />
          </SectionWrapper>
        )}
      </main>
    </>
  );
};

export default TopArtists;
