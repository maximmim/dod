import axios from 'axios';
import { useState,useEffect } from 'react';
const [items, setItems] = useState([]);
export default function getdate() {
    axios.get('https://63ff8f4f63e89b09139eef52.mockapi.io/item')
     .then(response => {
       // Handle the response data
       setItems(response.data);
     })
     .catch(error => {
       // Handle any errors
       console.error(error);
     });
}
