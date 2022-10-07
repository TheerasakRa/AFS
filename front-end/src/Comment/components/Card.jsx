import React from "react";

import styles from "./App.module.css";
import Cardins from "./Cardins";
import posts from "../data/posts";
import Post from "../data/Post";
import axios from "axios"
import { useState, useEffect } from "react"

const apiURL = "http://localhost:8050/post"

function Card() {

  const [post, setPost] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setPost(response.data);
      console.log(response.data)
    });
  }, []);

  if (!post) return "no post";

  return (
    <main className={styles.section}>
      <section className={styles.containers}>
      <div className={styles.layout}>
        {post.filter((e) => {
          if (searchTerm == "") {
            return e
          } else if (e.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return e
          }
        }).map(e => {
          return <Cardins ID={e.ID} title={e.title} content={e.content} />

        })}
      </div>
      </section>
    </main>
  );
};

export default Card;