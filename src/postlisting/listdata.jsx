// second part
import { useNavigate } from "react-router-dom";
export const Mydata = () => {
  const data = [
    {
      id: 1,
      title: "24th May 2015 Rob Simpson Seen",
      head: 'Faster font loading with font events',
      body: 'we font are great and make web the more beautiful space; loading them can be slow, which result is an unwanted side effect: FOIT (Flash of Invisible Text)'

    },
    {
      id: 2,
      head: "24th May 2015 Rob Simpson Seen",
      title: "Improving front-end performance",
      body: "Last year I wrote a post, Need for Speed, where I shared my workflows and teachniques along with the tools involved in the development of my site."
    },
    {
      id: 3,
      title: '23 3rd  May Kev Simpson',
      head: "Responsibe social share links",
      body: " social share script are convenient and easy to copy & paste but rely on Javascript and additional overhead to your site, which means more HTTPS requests and slower load items,"
    },
    {
      id: 4,
      title: '22 2nd  May Kev Simpson',
      head: "Responsive typography with Sass maps",
      body: 'Manging consistent, typographic rhythm isnt easy, but when the type is responsive, it makes things even more defficult.Fortunately Sass maps can helps make responsive typography much more mangeable',

    },
    {
      id: 5,
      title: "21st May 2015 Rob Simpson",
      haed: "Google's mobile-friendly search result udate",
      body: " back in february 2015, Google announced that starting April 21 it would be expanding it use of mobile-friendliness as aranking signal. Today is April 21  back in february 2015, Google announced that starting April 21 it would be expanding it use of mobile-friendliness as aranking signal. Today is April 21  google search on multiple data abou webites",
      


    }
  ]
  const name=['amber', 'maria']
  const navigate = useNavigate();

  const handleClick = ((data) => {
    if (data) {
      navigate(`/Datashow/${data.id}`, { state:{key:data, key2:name}});
    }
  })
  return (
    <>
      {data.map((row) => (
        <div className="container">
          <div >
          <p>{row.id} </p>
            <h1>{row.title}</h1>
           
           
          </div>

          {/* Use Link to navigate to BlogDetail */}
          <button onClick={() => handleClick(row)} >Read More</button>
        </div>


      ))}</>
  );
}

