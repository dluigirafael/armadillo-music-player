function LibrarySong({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  songs,
}) {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    const newSongs = songs.map((songmap) => {
      if (songmap.id === song.id) {
        return { ...songmap, active: true };
      } else {
        return { ...songmap, active: false };
      }
    });
    setSongs(newSongs);
    if (isPlaying) {
      audioRef.current.play();
    }
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt="song cover" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
