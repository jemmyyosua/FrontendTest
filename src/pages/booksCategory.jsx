import { Icon } from '@iconify/react';
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Pagination from '../components/pagination';
import Navigation from '../components/navbar';
import SearchBar from '../components/searchBar';
 
export default function Books() {
  const [books, setBooks] = useState([])
  const {id, name} = useParams()
  const [page, setPage] = useState(0)
  const booksPage = 12;
  const pagesVisited = page * booksPage;

  document.title = "Category - " + name

  const displayBooks = books.slice(pagesVisited, pagesVisited + booksPage)

  const getBooks = async () => {
    try {
        const res = await axios.get(`/fee-assessment-books?categoryId=${id}`)
        setBooks(res.data)

    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getBooks()
  }, [])


  return (
    <div className="App">
        <Navigation/>

        <section>
          <Container>
              <SearchBar home="home" books={books} />
          </Container>
        </section>

        <section className="mt-5">
          <Container>
            <div>
              <h2>List Book - {name}</h2>
              <div className="row mt-3 mb-3">
              {displayBooks?.map((item, index) => (
                  <div className="col-lg-2" key={index}>
                        <Link to={`/book/${id}/${item.title}`}><img src={item.cover_url} style={{maxWidth : "100%"}} alt={item.cover_url}/></Link>
                        <h6 className="fw-bold mt-2">{item.title}</h6>
                        <p className="p1">{item.authors}</p>  
                        </div>
                ))}
                </div>
                <Pagination books={books} page={booksPage} number={setPage} />
            </div>
          </Container>
        </section>
    </div>

  );
}

