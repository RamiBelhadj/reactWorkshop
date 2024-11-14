import { MovieCard } from "../MovieCard/movieCard"
import {Row, Col} from 'react-bootstrap'

export const MoviesList = ({movies, deleteMovie}) => {
    
    return (
        <Row>
            {movies.map((movie) => (
                <Col key = {movie.id} xs={12} sm={6} md={4} lg={3}>
                <MovieCard deleteMovie={deleteMovie} movie ={movie}></MovieCard>
                </Col>
                
            ))}
        </Row>
    )

}