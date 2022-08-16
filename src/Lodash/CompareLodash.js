import React from 'react'
import _ from 'lodash'
export default function CompareLodash() {

    //Compare array && object
    const arr1 = [1,2];
    const arr2 = [2,1];
    const result = _.isEqual(arr1.sort(), arr2.sort());
    console.log(result);

    //Compare array object

    const arrObj1 = [{id:1,name:'Tin'},{id:2,name:'Ronaldo'},{id:3,name:'Benzema'}];
    const arrObj2 = [{id:1,name:'Pepe'}]
    const arrObj3 = [{id:1,name:'Pepe'}]
     const result1 = _.differenceWith(arrObj2, arrObj3,_.isEqual);
    console.log(result1);
  return (
    <div>CompareLodash</div>
  )
}
