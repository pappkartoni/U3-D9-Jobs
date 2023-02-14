import { useEffect } from 'react'
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import { getJobsActionAsync } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const CompanySearchResults = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state.jobs.jobsList)
  const isLoading = useSelector((state) => state.jobs.isLoading)
  const errorText = useSelector((state) => state.jobs.errorText)

  useEffect(() => {
    dispatch(getJobsActionAsync(params.companyName, "company"))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row>
        <Col>
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

export default CompanySearchResults