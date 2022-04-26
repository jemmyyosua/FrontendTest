import book from '../book.svg'
import { Icon } from '@iconify/react';
import { Container, Badge } from 'react-bootstrap'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/navbar';
import SearchBar from '../components/searchBar';

export default function Home() {
  const [cat, setCat] = useState([])
  
  const getCat = async () => {
    try {
        const res = await axios.get('/fee-assessment-categories')
        setCat(res.data)

    } catch (error) {
        console.log(error)
    }
  }

  const [books, setBooks] = useState([])

  const getBooks = async () => {
    try {
        const res = await axios.get(`/fee-assessment-books?categoryId=1`)
        setBooks(res.data)

    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getBooks()
    getCat()
  }, [])
  return (
    <div className="App">
        <Navigation/>

        <section>
          <Container>
            <SearchBar home="home" books={books} />
              <div className="d-flex justify-content-center align-items-center">
                <div className="col-lg-6">
                    <img className="mt-5" src={book} alt={book} width="100%" />
                </div>
                <div className="col-lg-6">
                  <h4 className="mt-5">Mau membuat konten yang bisa menginspirasi?<br/><Icon width={35} color="#ffee05" icon="fluent:emoji-sad-slight-20-filled" /> Ini tips dan trik yang perlu kamu ketahui!</h4>
                  <button className="mt-5 button py-2 px-4">Baca Sekarang</button>
                </div>
              </div>
          </Container>
        </section>

        <section className="mt-5 mb-5">
          <Container>
            <div>
              <h2>List Book</h2>

              <div className="row">
              {cat.map((item, index) => (
                 <div className="fw-bold col-lg-4 mt-3" key={index}>
                   <Link to={`/books/${item.id}/${item.name}`}>
                    <Badge pill bg="primary">
                      <h3>{item.name}</h3>
                    </Badge>
                  </Link>
                </div>
               ))}
               </div>
            </div>
          </Container>
        </section>
    </div>

  );
}

