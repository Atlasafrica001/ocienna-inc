import { Helmet } from 'react-helmet-async'

interface SeoProps {
  title: string
  description: string
}

function Seo({ title, description }: SeoProps) {
  return (
    <Helmet>
      <title>{`${title} | Ocienna Inc.`}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | Ocienna Inc.`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}

export default Seo
