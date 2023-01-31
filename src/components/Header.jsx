import React, {useContext} from 'react'
import { AppContext } from '../common/context';
import Button from './Button'

export default function Header() {
  const {country, setCountry} = useContext(AppContext);

  console.log(">>>>."+country)
  
  return (
    <div className="header">
        <div><a href='/'> Top News</a> </div>
        <div><a href='/categories'>Categories</a></div>
        <div><a href='/search'>Search</a></div>

        <div className='rightNav'>
            <Button text="GB" action={() => setCountry('gb')} style={`${country==='gb' ? 'active' : 'button'}`}/>
            <Button text="US" action={() => setCountry('us')} style={`${country==='us' ? 'active' : 'button'}`}/>
        </div>
    </div>
  )
}
