// app/cars/[[...tool]]/page.tsx
import StudioPage from '../../../studio/studioPage'

export const dynamic = 'force-static'

export { metadata} from 'next-sanity/studio'

export default StudioPage
