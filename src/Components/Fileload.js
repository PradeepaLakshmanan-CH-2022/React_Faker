import React from 'react'
import * as FileSaver from 'file-saver';
import { faker } from '@faker-js/faker';


function Fileload() {
    const data = [];

    for (let i = 0; i < 100; i++) {
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

  

      function WriteDatatoFile(jsonDataArray) {
        for (let i = 0; i < 10; i++) {
          const datas = JSON.stringify(jsonDataArray[i]);
          const blob = new Blob([datas], { type: 'text/plain;charset=utf-8' });
          FileSaver.saveAs(blob, `filename_${i}.txt`);
          console.log("Data added")
        }
      }
     
    const StoreData=async()=> {
        const jsonDataArray = data;
        WriteDatatoFile(jsonDataArray);
      
        console.log("Database successful")
        alert("Data added to file Successfully")
      }
      
      
       
    
     
                  
  return (
    <div>
         <button onClick={StoreData}>Store in File</button>
      
    </div>
  )
}

export default Fileload