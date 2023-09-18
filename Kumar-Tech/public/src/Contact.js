import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
  return {
    ...preVal,
    [name]: value,
  };
});
};

const formSubmit = (e) => {
  e.preventDefault();
  alert(
    `My name is ${data.fullname}. My mobile number is ${data.phone}. Here is what I want to say ${data.msg}`)

 };
return (
  <>
    <div className="my-5">
      <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <Form onSubmit={formSubmit}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>FullName</Form.Label>
              <Form.Control type="name"
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="Your name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Phone</Form.Label>
              <Form.Control type="Phone number"
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                placeholder="Mobile number" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea"
                rows={3}
                name="msg"
                value={data.msg}
                onChange={InputEvent} />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </div>
      </div>
    </div>
  </>
);
}

export default Contact;
