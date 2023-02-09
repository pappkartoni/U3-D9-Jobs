import { Container, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { BsTrash } from "react-icons/bs"

const Favourites = (props) => {
    const favs = useSelector((state) => state.favs)
    const dispatch = useDispatch()

    return (
        <Container>
        <Row>
          <Col xs={10} className="my-3">
          <h1>Favourites</h1>
          {favs.length
            ? favs.map((company) => (
                    <Row key={company} className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
                        <Col xs={9}>
                            <Link to={`/${company}`}>{company}</Link>
                        </Col>
                        <Col xs={3} className="text-right">
                            <BsTrash style={{color: "red"}} onClick={() => {dispatch({type: "REMOVE_FAVOURITE", payload: company})}}/>
                        </Col>
                    </Row>
            ))
            : <h2 className="text-center text-muted">No favourites yet :/</h2>}
          </Col>
        </Row>
      </Container>
    )
}

export default Favourites