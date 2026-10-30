import pageSpec from '../page-specs/personal-center.json'
import { PersonalCenterPreviewFrame } from '../components/personal-center/PersonalCenterComponents'

function PersonalCenterPreviewPage({ variant = 'staff' }) {
  return (
    <section aria-label={pageSpec.pageTitle} className="personal-center-preview">
      <PersonalCenterPreviewFrame variant={variant} />
    </section>
  )
}

export default PersonalCenterPreviewPage
