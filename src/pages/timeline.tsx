import initHome from '../assets/5_19.jpg'
import initgames from '../assets/5_19_games.jpg'
import tools from '../assets/5_20_tools.jpg'

export const TimeLine = () => {
    return (
      <>
        <h1>This page acts as a timeline to tract my progress!</h1>
        <p>5/18: Created the app using vite, bun and react. Bought the domain on CloudFlare and hooked up the github integration with it.</p>
        <p>5/19: Updated app to have multiple pages, a working (albeit ugly) navigation bar and this timeline page. </p>
        <img src={initHome} width={250} height={50}></img> <img src={initgames} width={250} height={50}></img>
        <p>5/20: Added tools page and the first tools factor finder. <img src={tools} width={500} height={200}></img></p>
        <p>5/21: Likely not much time so might work on making timeline look better? We'll see</p>
      </>
    );
  };
  