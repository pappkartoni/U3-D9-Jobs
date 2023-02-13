import { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getJobsActionAsync } from '../redux/actions'

const MainSearch = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.jobs.jobsList)
  console.log("jobs are", jobs)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(getJobsActionAsync(query))
  }

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
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
