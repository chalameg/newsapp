import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../common/context';
import News from '../components/News';

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [news, setNews] = useState([]);
  const {country, setCountry} = useContext(AppContext);

  var url = "https://newsapi.org/v2/top-headlines?country="+country+"&"+'apiKey=ba67e752068d4339bfb8b4697b85bb5e';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);

    e.target.value === "" ? setIsSearchVisible(false) : setIsSearchVisible(true);
  }

  const filteredNews = news.filter(singleNews => {
    return singleNews.title?.toLowerCase().includes(searchQuery?.toLowerCase()) || 
            singleNews.description?.toLowerCase().includes(searchQuery?.toLowerCase())
  });

  return (
    <div className='search'>
      <p className='searchTitle'>Search Top News:</p>

      <form>
        <input onChange={handleChange} value={searchQuery} />
      </form>

      <div className='flex'>
        {isSearchVisible && filteredNews?.map(news => {
          return <>
            <News key={news.title} news={news} />
          </>
        })}
      </div>
    </div>
  )
}

export default Search