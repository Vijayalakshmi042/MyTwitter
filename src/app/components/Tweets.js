"use client";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Tweets() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function fetchTweets() {
      const res = await fetch("/api/tweets");
      const data = await res.json();
      setTweets(data);
    }
    fetchTweets();
  }, []);

  return (
    <div>
      {tweets.map((tweet) => (
        <div key={tweet.id} className="flex flex-column m-3.5">
          <FaRegUserCircle className="mr-3 size-8"/>  
          <div>
            <p className="text-xl"><strong>{tweet.user}</strong></p>
            <p className="text-xm"> {tweet.content}</p>
            <div className="flex flex-column">
                <FaRegComment className="mr-4 mt-3 size-5"/>
                <FaRegCommentAlt className="mr-4 mt-3 size-5"/>
                <FaRegStar className="mr-4 mt-3 size-5"/>
            </div>
          </div>
        </div>
     ))}
    </div>
  );
}
