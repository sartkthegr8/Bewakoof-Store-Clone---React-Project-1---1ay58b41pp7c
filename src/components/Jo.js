import React, { useEffect, useState } from 'react';

function Jo() {
  // State to store the fetched data
//   const [albumData, setAlbumData] = useState(null);
const [joke, setJoke] = useState(null);

  useEffect(() => {
   
        fetch('https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories', {
          method: 'GET',
          headers: {
            'projectId': 'f104bi07c490'
            // 'Content-Type': 'application/json',
          },
        })
        .then((response) => response.json())
        .then((data) => {
            setJoke(data.joke);
            console.log(data);
          })
        .catch((error) => console.log(error));
        }, []);


  return (
    <div>
      <h1 className="text-3xl font-bold underline">Sarthak_boy</h1>
      {joke && <p>{joke}</p>}
    </div>
  );
}

export default Jo;
