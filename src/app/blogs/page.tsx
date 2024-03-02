import React from 'react'
export interface Blog{
    title:string,
    image:string,
    author:string,
    date:string,
    description:string,
    id:string,
    pl:string, // programming language
}
export default function Blogs() {
  return (
    <div>Blogs</div>
  )
}
