import React from 'react';

import PostForm from '../../components/Forum/PostForm';
import Post from '../../components/Forum/Post';

const Forum = () => {
  return (
    <div className="p-4 bg-amber-200 min-h-screen">
      <PostForm/>
      <div className='my-4 text-center'>
        <h2 className="text-center text-3xl font-bold underline mb-4">Posts</h2>
        <p className="font-medium">No hay Posts</p>
        <Post/>
      </div>
    </div>
  );
};

export default Forum;
