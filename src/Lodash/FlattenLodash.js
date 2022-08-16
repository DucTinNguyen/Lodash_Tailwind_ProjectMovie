import React from 'react'
import _ from 'lodash'
export default function FlattenLodash() {

    const arr = [1, [2, [3, [4]], 5]]
    //Flatten: phan giai mot cap
    const resultFlatten = _.flatten(arr)
    //FlattenDeep: phan giai nhieu cap
    const resultFlattenDeep = _.flattenDeep(arr)

    console.log('resultFlatten',resultFlatten)
    console.log('resultFlattenDeep',resultFlattenDeep)
  return (
    <div>FlattenLodash</div>
  )
}
