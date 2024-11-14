import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

/*
title
director (subtitle)
description
rating 

*/

/// {movie}
// props
export const MovieCard = ({movie, deleteMovie}) => {
    const deletemovie = () => {
        let id = movie.id
        deleteMovie(id)
    }
    return (
        <Card className='mb-3'>
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{movie.author}</Card.Subtitle>
            <Card.Text>
              {movie.description}
              <br />
              Rating : {movie.rating}
            </Card.Text>
            <Button onClick={deletemovie}>Delete Movie </Button>
          </Card.Body>
        </Card>
      );
}