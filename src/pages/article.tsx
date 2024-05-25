import { Link } from "react-router-dom";
import './articles.css'

export const ArticlePage = () => {
    return (
      <>
        <h2>This page is a collection of interesting articles I have found. To keep it simple I will include only the links.</h2>
        
        <Link className="article" to="https://leetcode.com/studyplan/top-interview-150/">
            One list for code interview prep.
        </Link>
        <Link className="article" to="https://arstechnica.com/science/2020/03/inside-elon-musks-plan-to-build-one-starship-a-week-and-settle-mars/">
            Four year old article about starship and it's still one of the best. 
        </Link>
        <Link className="article" to="https://news.ycombinator.com/item?id=40113013">
            Short and interesting game about space. 
        </Link>
        <Link className="article" to="https://github.com/kelseyhightower/kubernetes-the-hard-way">
            Great github link for learning kubernetes. 
        </Link>
      </>
    );
  };
  