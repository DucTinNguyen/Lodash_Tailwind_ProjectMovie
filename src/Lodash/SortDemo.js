import React from 'react'
import _ from 'lodash'
export default function SortDemo() {

    //Sort Index: determine index which value should be inserted into arrays.
    // Example:
    const arrNumber = [10,30];
    let index = _.sortedIndex(arrNumber,40);
    console.log('Index sortedIndex',index)
    
  return (
    <div>SortDemo</div>
  )
}
