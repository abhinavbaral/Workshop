import React, { useEffect } from 'react';
import axios from 'axios';

const Post = () => {
  useEffect(() => {
    const fn = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/posts');
        console.log(res.data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };

    fn(); // call the function
  }, []);

  return (
    <div className='py-3.5'>
      {/* Render something here if needed */}
    </div>
  );
};

export default Post;
