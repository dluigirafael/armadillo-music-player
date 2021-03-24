import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

function Player({
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  songs,
  setCurrentSong,
  setSongs,
  songInfo,
  setSongInfo,
}) {
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((songmap) => {
      if (songmap.id === nextPrev.id) {
        return { ...songmap, active: true };
      } else {
        return { ...songmap, active: false };
      }
    });
    setSongs(newSongs);
  };
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    //animation
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
      } else {
        setCurrentSong(songs[currentIndex - 1]);
        activeLibraryHandler(songs[currentIndex - 1]);
      }
    }
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  ///style
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]} , ${currentSong.color[1]})`,
          }}
        >
          <input
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("back")}
          size="2x"
          icon={faAngleLeft}
          className="skip-back"
        />
        <FontAwesomeIcon
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          className="play"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("forward")}
          size="2x"
          icon={faAngleRight}
          className="skip-forward"
        />
      </div>
      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        onEnded={() => {
          skipTrackHandler("forward");
        }}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default Player;
