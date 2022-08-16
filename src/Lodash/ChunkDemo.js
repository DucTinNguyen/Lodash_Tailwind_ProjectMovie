import React from 'react'
import _ from 'lodash'
export default function ChunkDemo() {


    const arr = ['a', 'b', 'c', 'd'];
    let result = _.chunk(arr,3)
    console.log(result)

  return (
    <div>ChunkDemo</div>
  )
}
