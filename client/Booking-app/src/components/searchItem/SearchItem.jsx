import React from 'react'
import '../searchItem/SearchItem.scss'
import { Link } from 'react-router-dom'
const SearchItem = ({item}) => {
  return (
    <div className='searchItem'>
        <img src={item.photos[0]} alt="No Img" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className='siDistance'>{item.distance}m form center</span>
            <span className='siTaxiOp'>Free airport taxi</span>
            <span className='siSubtitle'>
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">
            {item.desc}
            </span>
            <span className='siCancelOp'>Free cancellation</span>
            <span className='siCancelOpSubtitle'>
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
           {item.rating && <div className="siRating">
                <span>Excellent</span>
                <button>8{item.rating}</button>
            </div>}
            <div className="isDetailTexts">
                <span className="siPrice">${item.cheapestPrice}</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <Link to={`/hotels/${item._id}`} style={{textDecoration:"none"}}>
                <button className='siCheckButton'>see availability</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default SearchItem