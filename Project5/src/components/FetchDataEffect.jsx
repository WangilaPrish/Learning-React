import React from 'react'
import { useEffect, useState } from 'react'

const FetchDataEffect = () => {

    const [title, setTitle] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setTitle(data[0].title);
        }
      })
      .catch((err) => console.error('Error fetching posts:', err));
  }, [title]);

  return (
    <div>
      <h2>First Post Title:</h2>
      <p>{title || 'Loading...'}</p>
    </div>
  );
};

export default FetchDataEffect;
