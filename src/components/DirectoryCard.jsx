function DirectoryCard({ title, summary }) {
  return (
    <article className="directory-card">
      <p className="directory-title">{title}</p>
      <p>{summary}</p>
    </article>
  )
}

export default DirectoryCard
