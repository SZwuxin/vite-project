import { Link } from "react-router-dom";
import './articles.css'
export const StoryPage = () => {
    return (
      <>
        <h2>This page is a combination of interesting stories I have found and stories I have written myself. </h2>
        <p className="article">External stories</p>
        <Link className="article" to="https://scp-wiki.wikidot.com/scp-5000">
            One of my favorite fictional stories, require some knowledge to the SCP universe. 
        </Link>
        <p className="article" > My stories</p>
      </>
    );
  };
  