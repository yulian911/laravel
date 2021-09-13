import axios from "axios";
import React, { useContext, useEffect } from "react";
import Header from "../../modules/Navigation/Header";
import Navbar from "../../modules/Navigation/Navbar";
import classes from "./../../style.module.scss";
import ContextData from "./../../contex/Data/ContextData";
import styled from "styled-components";
import NewItems from "./NewItems";
const News = () => {
  const { stateData, dispatchData } = useContext(ContextData);
  const news = stateData.news;
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("http://localhost:3004/news");

        if (res.status == 200) {
          const result = res.data;

          dispatchData({ type: "FETCH_NEWS", payload: result });
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <div className={classes.main}>
        <div className={classes.main__navigation}>
          <Navbar />
        </div>
        <div className={classes.main__content}>
          <Header />
          {news.map((el, index) => {
            return (
              <NewItems
                key={index}
                category={el.category}
                subject={el.subject}
                content={el.content}
                image={el.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default News;
