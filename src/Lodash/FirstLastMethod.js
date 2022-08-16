import React from 'react'
import _ from 'lodash'
export default function FirstLastMethod() {

    const people = [
        {id:1,name:'Tin',age:20},
        {id:2,name:'Benzema',age:20},
        {id:3,name:'Ronaldo',age:20},
    ]
    // show firt object 
    const {id,name} = _.first(people);

    //
    const arr = [['001','Tin'],['002','Ronado'],['003','Benzema']];

    const [id2,name2] = _.last(arr);
  return (  
    <div>
        <p>FirtItem: id:{id} - name:{name}</p>
        <p>LastItem: id:{id2} - name:{name2}</p>

    </div>
  )
}
