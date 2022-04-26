import { ListGroup } from "react-bootstrap"
import { Icon } from '@iconify/react';
import { useState } from 'react'

export default function SearchBar({home, books}){

  const [search, setSearch] = useState("")
  const [output, setOutput] = useState([])

  const handleSearch = (e) => {
    const searchWord = e.target.value;
    setSearch(searchWord);
    const newFilterTitle = books.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setOutput([]);
    } else {
      setOutput(newFilterTitle);
    }
  };

  const setEmpty = () => {
    setOutput([]);
    setSearch("");
  };


    return (
        <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-lg-8">
                      <div className="mt-5 search">
                          <Icon width={20} className="fa-search" icon="charm:search" /> 
                          <input type="text" name="search" value={search} onChange={handleSearch}  className="form-control" placeholder="Search Book"/>
                          {!search ? <button className="btn btn-primary">Search</button> : <button className="btn btn-primary" onClick={setEmpty}>Search</button>}</div>
                      <div className='flex flex-wrap justify-evenly'>
                       
                        {home === "home" && ( 
                        output.map((item) => (
                          <div className="col-lg-4 mt-3">
                          <ListGroup.Item action variant="light">
                              <img src={item.cover_url} style={{maxWidth : "100%"}} alt={item.cover_url}/>
                              <h6 className="fw-bold mt-2">{item.title}</h6>
                              <p className="p1">{item.authors}</p>  
                          </ListGroup.Item>
                          </div>
                        )))}
                      </div>
                  </div>
            </div>
    )
}