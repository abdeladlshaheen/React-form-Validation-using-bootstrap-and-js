import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'
export default function SignUp(props)
{
    const [RegisterForm,setRegisterForm] = useState({
        name:"",
        email:"",
        userName:"",
        password:"",
        confirmPassword:"",
    });
    const [show,setShow] = useState(false);
    const [RegisterFormError,setRegisterFormError] = useState({
        nameError:null,
        emailError:null,
        userNameError:null,
        passwordError:null,
        confirmPasswordError:null,
    });
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    const passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const userNameRegex = new RegExp("^[a-zA-Z]{3,}$");
    function submit(){
        if(!RegisterFormError.emailError && !RegisterFormError.nameError && !RegisterFormError.userNameError && !RegisterFormError.passwordError && !RegisterFormError.confirmPasswordError)
        {
            setShow(true);
            setTimeout(()=>{setShow(false)},3000);
        }
    }
    const handleFormChange = (e) => {
        setRegisterForm({
            ...RegisterForm,
            [e.target.id] : e.target.value,
        });
        if(e.target.id === 'name')
        {
            setRegisterFormError({
                nameError : e.target.value.length === 0 ? "name field is required" : ""
            });
        }
        else if(e.target.id === 'email')
        {
            setRegisterFormError({
                ...RegisterFormError,
                emailError:  e.target.value.length === 0 ? "email field is required" :emailRegex.test(e.target.value) ? "" : "please enter a valid email",
            });
        }
        else if(e.target.id === 'userName')
        {
            setRegisterFormError({
                userNameError : e.target.value.length === 0 ? "user name field  required" : !userNameRegex.test(e.target.value) ? "please enter a valid user name at least  3 chars" : ""
            });
        }
        else if(e.target.id === 'password')
        {
            setRegisterFormError({
                ...RegisterFormError,
                passwordError: e.target.value.length === 0 ? "Password field is required" : !passRegex.test(e.target.value) ? "password should be at least 8 characters at least with special char and number and char" : "",
            });
        }
        else if(e.target.id === 'confirmPassword')
        {
            setRegisterFormError({
                confirmPasswordError : e.target.value.length === 0 ? "cofirm password field is required" : e.target.value === RegisterForm.password ? "": "confirm Password doesn't match password",
            });
        }
    }

    return(
       <>
            <div className="row p-3">
                <div className="col-5 mx-auto">
                <Form>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" className={RegisterFormError.nameError ? "border-danger shadow shadow-danger": ""} value={RegisterForm.name} onChange={(e) => handleFormChange(e)} placeholder="Enter your name" />
                            {
                            RegisterFormError.nameError &&
                            <Form.Text className="text-danger">
                                {RegisterFormError.nameError}
                            </Form.Text>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" className={RegisterFormError.emailError ? "border-danger shadow shadow-danger": ""} value={RegisterForm.email} onChange={(e) => handleFormChange(e)} placeholder="Enter email" />
                            {
                            RegisterFormError.emailError &&
                            <Form.Text className="text-danger">
                                {RegisterFormError.emailError}
                            </Form.Text>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="userName">
                            <Form.Label>user Name</Form.Label>
                            <Form.Control type="text" className={RegisterFormError.userNameError ? "border-danger shadow shadow-danger": ""} value={RegisterForm.userName} onChange={(e) => handleFormChange(e)} placeholder="Enter your user Name" />
                            {
                            RegisterFormError.userNameError &&
                            <Form.Text className="text-danger">
                                {RegisterFormError.userNameError}
                            </Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" className={RegisterFormError.passwordError ? "border-danger shadow shadow-danger": ""} name="password"  value={RegisterForm.password} onChange={(e) => handleFormChange(e)} placeholder="Password" />
                            {
                                RegisterFormError.passwordError &&
                                <Form.Text className="text-danger d-block">
                                    {RegisterFormError.passwordError}
                                </Form.Text>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" className={RegisterFormError.confirmPasswordError ? "border-danger shadow shadow-danger": ""} name="confirmPassword"  value={RegisterForm.confirmPassword} onChange={(e) => handleFormChange(e)} placeholder="confirm Password" />
                            {
                                RegisterFormError.confirmPasswordError &&
                                <Form.Text className="text-danger d-block">
                                    {RegisterFormError.confirmPasswordError}
                                </Form.Text>}
                        </Form.Group>
                        <Button variant="success w-25"  onClick={(e)=> submit(e)}>
                            Register
                        </Button>
                    </Form>
                    {show &&
                    <ToastContainer position="top-end" className="p-3">
                        <Toast className="bg-success text-light">
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">abdeladl</strong>
                            <small className="text-muted">2 seconds ago</small>
                        </Toast.Header>
                        <Toast.Body>successfully to validate Register Data</Toast.Body>
                        </Toast>
                    </ToastContainer>}
                </div>     
            </div>
       </>
    );
}