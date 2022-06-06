import SpotifyPlayer from "react-spotify-web-playback";

const styles = {
  activeColor: "#fff",
  bgColor: "#181818",
  color: "#fff",
  loaderColor: "#fff",
  sliderColor: "#1cb954",
  sliderHandleColor: "#fff",
  trackArtistColor: "#ccc",
  trackNameColor: "#fff",
};

const Player = ({ token, playingTrack, isPlaying, setIsPlaying }) => {
  return (
    <SpotifyPlayer
      token={token}
      uris={playingTrack.uri ? [playingTrack.uri] : []}
      autoPlay={true}
      initialVolume={0.6}
      callback={(state) => {
        setIsPlaying(state.isPlaying);
      }}
      styles={styles}
    />
  );
};

export default Player;
