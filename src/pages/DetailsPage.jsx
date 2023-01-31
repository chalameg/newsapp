import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { AppContext } from '../common/context';

export default function DetailsPage() {
  const { newsId } = useParams();
  const [singleNews, setSingleNews] = useState();

  const {country, setCountry} = useContext(AppContext);

  var url = "https://newsapi.org/v2/top-headlines?country="+country+"&"+'apiKey=ba67e752068d4339bfb8b4697b85bb5e';

  useEffect(() => {
    fetch(url)
       .then((response) => response.json())
       .then((data) => {
        const filteredNews = data.articles.filter(singleNews => {
          return singleNews.title.toLowerCase().includes(newsId.toLowerCase())
        });

        setSingleNews(filteredNews[0]);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return (
    <div className='detailsPage'>
     
      {singleNews && <>
        <h6 className='newsTitle'>{singleNews.title}</h6>
        <img className='dpNewsImage' src={singleNews.urlToImage}/>
        <p className='newsDescription'>{singleNews.content}</p>
      </>}

      <Link to="/">Back To Home</Link>
    </div>
  )
}
