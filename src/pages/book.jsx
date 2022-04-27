import { Icon } from '@iconify/react';
import { Container, Stack, Button } from 'react-bootstrap'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navigation from '../components/navbar';
 
export default function Book() {
  const [books, setBooks] = useState([])
  const {title , id} = useParams()

  document.title = title

  const detail = books.find((book) => book.title === title)

  const getBook = async () => {
    try {
        const res = await axios.get(`/fee-assessment-books?categoryId=${id}`)
        setBooks(res.data)

    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getBook()
  }, [])

  return (
    <div className="App">
        <Navigation/>

        <section className="mt-5">
          <Container>
              <div className="row">
                  <div className="col-lg-3">
                      <img src={detail?.cover_url} style={{maxWidth : "100%"}} alt={detail?.cover_url}/> 
                  </div>
                  <div className="mt-2 col-lg-9">
                      <h2 className="fw-bolder mt-2">Title : {detail?.title}</h2>
                      <h4 className="fw-bold text-muted mt-4">Author : {detail?.authors}</h4>  
                      <h4 className="fw-bold text-muted mt-4">Audio Book : {detail?.audio_length} menit</h4>  
                      <h5 className="fw-bold text-muted mt-4">Description : {detail?.description}</h5> 
                  </div>
                  </div>
                  <div className="mt-5">
                      {detail?.sections.map((item, index) =>(
                        <div key={index}>
                            <h4>{item.title}</h4> 
                            <p>{item.content}</p> 
                        </div>
                      ))}
                  </div>

                  <Stack direction="horizontal" gap={2} className="mb-3" style={{alignItems : "flex-end" }}>
                    <div className="ms-auto">
                        <Button className="px-2 me-2" variant="danger" size="sm">
                            Add Bookmark <Icon className="ms-1" icon="bi:bookmark" color="white" width="16" height="17" />
                        </Button>
                    </div>
                </Stack>   

          </Container>
        </section>
    </div>

  );
}

