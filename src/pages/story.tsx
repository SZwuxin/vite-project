import { Link } from "react-router-dom";
import './articles.css'
export const StoryPage = () => {
    return (
      <>
        <h2>This page is a combination of stories and books I recommend and wrote. </h2>
        <p className="article">Stories</p>
        <Link className="article" to="https://scp-wiki.wikidot.com/scp-5000">
            One of my favorite fictional stories, require some knowledge to the SCP universe. 
        </Link>
        <Link className="article" to="/stories/onOptimism">
            My thought on optimism. 
        </Link>
        <p className="article">Books </p>
        <Link className="article" to="https://davidgoggins.com/book/">
            David Goggins books are highly inspirational.  
        </Link>
        <Link className="article" to="https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296">
            Great book by Peter Thiel about investment and the future. 
        </Link>
        
      </>
    );
  };
  