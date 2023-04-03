import axios from 'axios';
import { useState } from 'react';
import { faker } from '@faker-js/faker';

function Fakerjson() {
  const [result, setResult] = useState('');
  const data = [];
 


  for (let i = 0; i < 500; i++) {
    const values = {
      Firstname: faker.name.firstName(),
      Lastname:faker.name.lastName(),
      Gender:faker.name.gender(),
      Email: faker.internet.email(),
      Phone: faker.phone.number(),
      Address: faker.address.streetAddress(),
      Country:faker.address.country()
    };
    data.push(values);
    
  }
  const jsondatas=JSON.stringify(data)
  const AddData = {
    fakerdatas:jsondatas
  };
   


  
const adddatatotable=()=>{
    axios.post(`https://localhost:7098/api/FakerData`,AddData,{
        headers: {
            'Content-Type': 'application/json'
          }
    })
   
  
    .then(response=>{
        setResult(response.data)
        console.log(response)
        alert("Data added Successfully")
     })
}
  return (
    <div>
      <button onClick={adddatatotable}>Submit</button>
    
    </div>
  );
}
export default Fakerjson