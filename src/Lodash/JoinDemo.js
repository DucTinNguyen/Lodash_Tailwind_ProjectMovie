import React from 'react'
import _ from 'lodash'
export default function JoinDemo() {

    const arr = ['Tin','Ronaldo','Benzema'];

    //es6
    const result = arr.join('-');
    //lodash
    const resultLodash = _.join(arr,'*')

    const people = [
        {id:1,name:'Tin',age:20},
        {id:2,name:'Benzema',age:20},
        {id:3,name:'Ronaldo',age:20},
    ]

    const person = _.find(people,item => item.id === 2);


  return (
    <div>
        <p>Result ES6: {result}</p>
        <p>Result Lodash: {resultLodash}</p>
        <p>Name: {person.name}</p>
    </div>
  )
}
