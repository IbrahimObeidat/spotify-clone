import { useState } from "react";
import { formatDuration } from "../utils";
import { StyledTrackList } from "../styles";
import { FaPlay } from "react-icons/fa";
import { Bars } from "react-loading-icons";

const TrackList = ({ tracks, playingTrack, setPlayingTrack, isPlaying }) => {
  const [active, setActive] = useState("");

  return (
    <>
      {tracks && tracks.length ? (
        <StyledTrackList active={!!active} isPlaying={!!isPlaying}>
          {tracks.map((track, i) => (
            <li
              className={`track__item${
                track === playingTrack && active ? " active" : ""
              }`}
              key={i}
              onClick={() => {
                setPlayingTrack(track);
                setActive("active");
              }}
            >
              <div>
                <div className="track__item__num">{i + 1}</div>
                <div className="track__item__play">
                  <FaPlay></FaPlay>
                </div>

                {track === playingTrack && active && isPlaying && (
                  <div className="track__item__playing">
                    <Bars />
                  </div>
                )}
              </div>

              <div className="track__item__title-group">
                {track.album.images.length && track.album.images[2] && (
                  <div className="track__item__img">
                    <img src={track.album.images[2].url} alt={track.name} />
                  </div>
                )}
                <div className="track__item__name-artist">
                  <div className="track__item__name overflow-ellipsis">
                    {track.name}
                  </div>
                  <div className="track__item__artist overflow-ellipsis">
                    {track.artists.map((artist, i) => (
                      <span key={i}>
                        {artist.name}
                        {i !== track.artists.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="track__item__album overflow-ellipsis">
                {track.album.name}
              </div>
              <div className="track__item__duration">
                {formatDuration(track.duration_ms)}
              </div>
            </li>
          ))}
        </StyledTrackList>
      ) : (
        <p className="empty-notice">No tracks available</p>
      )}
    </>
  );
};

export default TrackList;
