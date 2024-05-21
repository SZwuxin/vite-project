import initHome from '../assets/5_19.jpg'
import initgames from '../assets/5_19_games.jpg'
import tools from '../assets/5_20_tools.jpg'
import main from '../assets/5_21_main.jpg'

export const TimeLine = () => {
    return (
      <>
        <h2>This page acts as a timeline to tract my progress!</h2>
        <p>5/18: Created the app using vite, bun and react. Bought the domain on CloudFlare and hooked up the github integration with it.</p>
        <p>5/19: Updated app to have multiple pages, a working (albeit ugly) navigation bar and this timeline page. </p>
        <img src={initHome} width={250} height={50}></img> <img src={initgames} width={250} height={50}></img>
        <p>5/20: Added tools page and the first tools factor finder. <img src={tools} width={500} height={200}></img></p>
        <p>5/21: Revamped the main page to actually show something and added two new page that I'll eventually get to. <img src={main} width={300} height={340}></img></p>
        <p>5/22: Desparately need to revamp the timeline page to look ok. </p>
      </>
    );
  };
  