import React , {useState} from 'react';
import Footer from '../../components/footer';
import Header from '../../components/nav';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {
    const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь вы можете обработать отправку сообщения или сделать другую логику для формы
    // Например, можно отправить данные на сервер или показать сообщение об успешной отправке
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Message:', message);
    // Сбросим значения полей после отправки
    setName('');
    setPhone('');
    setMessage('');
  };
    return (
        <>
            <Header/>
            <div className='container mt-5'>
      <div className='row'>
        <div className='col-lg-6'>
          <h1>Contact Us</h1>
          <p>
            Have any questions or feedback? We'd love to hear from you! Please fill out the form below to get in touch
            with our team.
          </p>
        </div>
        <div className='col-lg-6'>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formName'>
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formPhone'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type='tel'
                placeholder='Enter your phone number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formMessage'>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                rows={4}
                placeholder='Enter your message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>

            <div className='text-center'>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>   <Footer/>
        </>
    );
};

export default Contact;