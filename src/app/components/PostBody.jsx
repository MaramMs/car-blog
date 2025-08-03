// components/PostBody.js
import React from 'react'
import { PortableText } from '@portabletext/react'

const PostBody = ({ content }) => {
  return (
    <div className="prose max-w-none">
      <PortableText value={content} />
    </div>
  )
}

export default PostBody
