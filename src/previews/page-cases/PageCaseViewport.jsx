function PageCaseViewport({ children }) {
  return (
    <div className="page-case-viewport">
      <div className="page-case-viewport__scroll">{children}</div>
    </div>
  )
}

export default PageCaseViewport
