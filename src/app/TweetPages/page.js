"use client";
import React, { useState } from 'react';
import { FaImage } from "react-icons/fa";
import { FaGrin } from "react-icons/fa";
import Navbar from '../components/Navbar';

export default function Tweet() {
  const [tweet, setTweet] = useState('');
  
  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };
  
  const handleTweetSubmit = () => {
    alert('Tweet Submitted: ' + tweet);
    setTweet('');
  };

  const handleTweetCancel = () => {
    alert('Tweet Cancelled: ' + tweet);
    setTweet('');
  };

  return (
    <div className=" bg-blue-300 p-10">
        <Navbar/>
        <div className="flex flex-col items-center mt-20">
          <h1 className="text-4xl font-bold">Tweet Something!</h1>
          <div className="border-2  bg-sky-200 rounded-md w-96 h-60 m-3">
            <textarea
              className="mt-4  p-3 border-none rounded-md w-84 h-40"
              value={tweet}
              onChange={handleTweetChange}
              placeholder="What's on your mind?"
            />
            <div className="flex flex-row">
              <FaImage className="size-8 m-1"/>
              <FaGrin className="size-7 m-1"/>
            </div>
          </div>  
          <div className="flex flex-row">
            <button
              className="mt-4 p-3 mr-3 bg-blue-600 text-white text-xl rounded-sm"
              onClick={handleTweetSubmit}
            >
              Tweet
            </button>
            <button
              className="mt-4 p-3 bg-red-500 text-white text-xl rounded-sm"
              onClick={handleTweetCancel}
            >
              Cancel
            </button>
          </div>  
        </div>
      </div>

  );
};

