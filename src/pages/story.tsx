import { Link } from "react-router-dom";
import './articles.css'
export const StoryPage = () => {
    return (
      <>
        <h2>This page is a combination of stories and books I recommend. </h2>
        <p className="article">Stories</p>
        <Link className="article" to="https://scp-wiki.wikidot.com/scp-5000">
            One of my favorite fictional stories, require some knowledge to the SCP universe. 
        </Link>
        <p className="article">Books </p>
        <Link className="article" to="https://davidgoggins.com/book/">
            David Goggins books are highly inspirational.  
        </Link>

      </>
    );
  };
  