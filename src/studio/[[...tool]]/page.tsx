// app/studio/[[...tool]]/page.tsx
import StudioPage from '../studioPage'

export const dynamic = 'force-static'

export { metadata } from 'next-sanity/studio'

export default StudioPage
