import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../../Redux/auth/actions';

function SignUp(props) {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
          firstName: '',
          email: '',
          mobile:'',
          password:''
        },
        // validationSchema: Yup.object({
        //     firstName: Yup.string()
        //  .max(15, 'Must be 15 characters or less')
        //  .required('Required'),
        //  email: Yup.string().email('Invalid email address').required('Required'),
        //  mobile: Yup.string()
        //  .max(15, 'Must be 15 characters or less')
        //  .required('Required'),
        //  password: Yup.string()
        //  .max(15, 'Must be 15 characters or less')
        //  .required('Required'),
        // }),
        onSubmit: (values) => {
            const data = {
                firstName: values.firstName,
                email: values.email,
                mobile: values.mobile,
                password: values.password
            };
              dispatch(signUpAction(data))
              props.hide(false)
              formik.resetForm();
        }
       
        

    });
  

  return (
    <div>
      <Modal show={props.show} onHide={props.hide}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Title className='mx-auto'>Sign up</Modal.Title>

        <Modal.Body>
        <Form noValidate onSubmit={formik.handleSubmit}>
        <FormikProvider value={formik}>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"
         placeholder="Enter your name"
         name="firstName"
         onChange={formik.handleChange}
         values={formik.values.firstName}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email"
        name='email'
        onChange={formik.handleChange}
        values={formik.values.email}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter email"
        name="mobile"
        onChange={formik.handleChange}
        values={formik.values.mobile} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
         type="password"
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}
          values={formik.values.password} />
      </Form.Group>
      
      <Button onClick={formik.handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
      </FormikProvider>
    </Form>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default SignUp
