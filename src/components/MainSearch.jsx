import { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Spinner, Alert } from 'react-bootstrap'
import Job from './Job'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getJobsActionAsync, flushJobsAction } from '../redux/actions'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.jobs.jobsList)
  const isLoading = useSelector((state) => state.jobs.isLoading)
  const errorText = useSelector((state) => state.jobs.errorText)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(getJobsActionAsync(query, "search"))
  }

  useEffect(() => {
    console.log("flushings jobsList...")
    dispatch(flushJobsAction())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3 d-flex">
          <h1>Remote Jobs Search</h1>
          <Link className='btn btn-primary ml-auto align-self-center' to="/favourites">Favourites</Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {isLoading ? <Spinner animation="grow" variant="info"/>
          : <>
            {errorText.length > 0 && <Alert variant="danger" className="mx-auto">{errorText}</Alert>}
            {jobs.length > 0 && jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}     
          </>}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
