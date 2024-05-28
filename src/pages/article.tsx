import { Link } from "react-router-dom";
import './articles.css'

export const ArticlePage = () => {
    return (
      <>
        <h2>This page has grown into a collection of links for interesting websites, articles, videos.</h2>
        
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
        <Link className="article" to="https://www.youtube.com/@AndrejKarpathy">
            One of the best channel for learning and getting hands on about Gen AI. 
        </Link>
        <Link className="article" to="https://www.bigocheatsheet.com/">
            All of bigO in one link 
        </Link>
        <Link className="article" to="https://xkcd.com/">
            XKCD
        </Link>
        <Link className="article" to="https://research.swtch.com/xz-script">
            Breakdown of the script for the infamous xz attack.
        </Link>
      </>
    );
  };
  