import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../common/context';
import News from '../components/News';

function Home() {
    const [news, setNews] = useState([]);
    const {country, setCountry} = useContext(AppContext);
    
    var url = "https://newsapi.org/v2/top-headlines?country="+country+"&"+'apiKey=ba67e752068d4339bfb8b4697b85bb5e';
          
   useEffect(() => {
      fetch(url)
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setNews(data.articles);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, [country]);

    return (
        <div className='home'>
            {news.map(news => {
                return <>
                    <News key={news.title} news={news}/>
                </>
            })}
        </div>
    )
}

export default Home