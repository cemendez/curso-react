const SongLyric = ({ title, lyrics }) => {
  return (
    <section>
      <h3>{title}</h3>
      <blockquote>{lyrics}</blockquote>
    </section>
  );
};

export default SongLyric;
