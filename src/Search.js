import React, { useState } from 'react';
import data from './data';

const Search = () => {
  const [filter, setFilter] = useState('');

  const searchText = (event) => {
    setFilter(event.target.value);
  }
  let dataSearch = data.cardData.filter(myheroacademia => {
    return Object.keys(myheroacademia).some(key =>
        myheroacademia[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )
  })

  return (
    <section className='py-4 container'>
      <div className='row justify-content-center'>

      <div className='col-12 mb-5'>
        <div className='mb-3 col-4 mx-auto text-center'>
          <label className='form-label h4 text-info'>Search</label>
            <input 
              type="text"
              className='form-control'
              value={filter} 
              onChange={searchText.bind(this)}
            />
        </div>
      </div>

        {dataSearch.map((myheroacademia, index)=>{
          return (
            <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
              <div className='card p-0 overflow-hidden h-100 shadow' style={{borderColor:myheroacademia.color, backgroundColor:myheroacademia.color, color:'white', borderRadius:'25px'}}>
                <img src={myheroacademia.img} className='card-img-top' alt='' />
                <div className='card-body'>
                  <h5 className='card-tite'>{myheroacademia.title}</h5>
                  <p className='card-text'>Quirk: {myheroacademia.quirk}</p>
                </div>
              </div>
            </div>
          )
        })}
        

      </div>

    </section>
  )
};

export default Search;
