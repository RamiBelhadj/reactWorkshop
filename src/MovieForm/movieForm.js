import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid';

export const MovieForm  = ({addMovie}) =>{
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState('')
    const addmovie = () => {
        let newMovie = {
            id : uuidv4(),
            title,
            author,
            description,
            rating
        }
        addMovie(newMovie)
        setTitle('')
        setAuthor('')
        setDescription('')
        setRating('')
    }
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Movie Title</Form.Label>
                <Form.Control type="text" placeholder="movie title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="movie author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Movie description</Form.Label>
                <Form.Control type="text" placeholder="movie description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Movie Rating</Form.Label>
                <Form.Control type="text" placeholder="movie rating" value={rating} onChange={(e) => setRating(e.target.value)}/>
            </Form.Group>
            <Button onClick={addmovie}>
                Add Movie
            </Button>
        </Form>
    )
}