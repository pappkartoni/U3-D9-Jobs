import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { BsStar, BsStarFill } from "react-icons/bs"

const Job = ({ data }) => {
  const dispatch = useDispatch()
  const favs = useSelector((state) => state.favs)

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1}>
          {favs.includes(data.company_name)
          ? <BsStarFill style={{color: "gold"}} onClick={() => {dispatch({type: "REMOVE_FAVOURITE", payload: data.company_name})}}/>
          : <BsStar style={{color: "gold"}} onClick={() => {dispatch({type: "SET_FAVOURITE", payload: data.company_name})}}/>}
      </Col>
    </Row>
  )
}
/* dispatch({type: "SET_FAVOURITE", payload: data}) */
export default Job
