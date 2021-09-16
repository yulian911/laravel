import axios from "axios";
import React, { useContext, useEffect } from "react";
import Header from "../../modules/Navigation/Header";
import Navbar from "../../modules/Navigation/Navbar";
import classes from "./../../style.module.scss";
import ContextData from "./../../contex/Data/ContextData";
import styled from "styled-components";
import NewItems from "./NewItems";
import Office from "../../layauts/office/Office";
import { API_URL } from "../../baseUrl";

const News = () => {
  const { stateData, dispatchData } = useContext(ContextData);
  const news = stateData.news;
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${API_URL}/news`);

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
    <Office>
      {news.map((el, index) => {
        return (
          <NewItems
            key={index}
            category={el.category}
            subject={el.subject}
            content={el.content}
            image={el.img}
          />
        );
      })}
    </Office>
  );
};

export default News;
