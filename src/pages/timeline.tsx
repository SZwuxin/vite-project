import {Collapsible} from '../components/collapsible'

export const TimeLine = () => {
    return (
      <>
        <h2>This page acts as a timeline to track my progress, click on the icon to expand and see progress made that day.</h2>
        <Collapsible date='5/18' word='Created the app using vite, bun and react. Bought the domain on CloudFlare and hooked up the github integration with it.' image={['',0,0]}/>
        <Collapsible date='5/19' word='Updated app to have multiple pages, a working (albeit ugly) navigation bar and this timeline page.' image={['/5_19.jpg', 800, 160]}/>
        <Collapsible date='5/20' word='Added tools page and the first tools factor finder.' image={['/5_20_tools.jpg', 800, 300]}/>
        <Collapsible date='5/21' word='Revamped the main page to actually show something and added two new page that I will eventually get to.' image={['/5_21_main.jpg', 800, 920]}/>
        <Collapsible date='5/22' word='Revamp timeline page to have a collapsible component.' image={['/5_22_timeline.jpg', 800, 800]}/>
        <Collapsible date='5/23' word='Add two more tools!' image={['/5_23_timeline.jpg', 800, 600]}/>
        <Collapsible date='5/24' word='Added the first game Bagel! More to come' image={['',0,0]}/>
        <Collapsible date='5/25' word='Tried to implement sqlite but running into build issues... So instead I added some links to stories and articles page.' image={['',0,0]}/>
        <Collapsible date='5/26' word='Added a new tool to calculate interest!' image={['',0,0]}/>
        <Collapsible date='5/27' word='Memorial day, likely no update' image={['',0,0]}/>

      </>
    );
  };
  