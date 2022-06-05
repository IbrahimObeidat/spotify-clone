import React, { useEffect, useState } from "react";
import { getCurrentUserPlaylists } from "../api";
import { PlaylistsGrid, SectionWrapper } from "../components";
import { catchErrors } from "../utils";

const Playlists = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userPlaylists = await getCurrentUserPlaylists();
      setPlaylists(userPlaylists.data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <main>
      <SectionWrapper title="Playlists" breadcrumb="true">
        {playlists && playlists.items && (
          <PlaylistsGrid playlists={playlists.items} />
        )}
      </SectionWrapper>
    </main>
  );
};

export default Playlists;
