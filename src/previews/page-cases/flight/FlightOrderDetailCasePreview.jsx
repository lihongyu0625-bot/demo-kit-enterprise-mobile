import FlightOrderDetailPreviewPage from '../../../pages/FlightOrderDetailPreviewPage'
import PageCaseViewport from '../PageCaseViewport'

function FlightOrderDetailCasePreview() {
  return (
    <section className="case-preview">
      <div className="case-preview__surface">
        <PageCaseViewport>
          <FlightOrderDetailPreviewPage />
        </PageCaseViewport>
      </div>
    </section>
  )
}

export default FlightOrderDetailCasePreview
