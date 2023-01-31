import React from 'react'
import { Link } from 'react-router-dom'

function News({news}) {
  return (
    <div className='newsCard'>
        <Link to={news?.title}>
            <img className='newsImage' src={news?.urlToImage} width="80%"/>
            <p className='newsTitle'>{news?.title}</p>
            <p className='newsDescription'>{news?.description?.substring(0, 100)+"..."}</p>
        </Link>
    </div>
  )
}

export default News