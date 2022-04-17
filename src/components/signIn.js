import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'

export default function SignIn(props)
{
    const [loginForm,setLoginForm] = useState({
        email:"",
        password:"",
    });
    const [show,setShow] = useState(false);
    const [loginFormError,setLoginFormError] = useState({
        emailError:null,
        passwordError:null,
    });
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    const passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    useEffect(()=>{},[loginForm.email, loginForm.password])
    function submit(){
        if(!loginFormError.emailError && !loginFormError.passwordError)
        {
            setShow(true);
            setTimeout(()=>{setShow(false)},3000);
        }
    }
    const handlePasswordShow = (e)=>{
        let password = document.querySelector('input[name="password"]');
        if(e.target.checked)
        {
            password.type ="text";
        }
        else
            password.type = "password";
    };
    const handleFormChange = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.id] : e.target.value,
        });
        if(e.target.id === 'email')
        {
            setLoginFormError({
                ...loginFormError,
                emailError:  e.target.value.length === 0 ? "email field is required" :emailRegex.test(e.target.value) ? "" : "please enter a valid email",
            });
        }
        if (e.target.id === 'password'){
            setLoginFormError({
                ...loginFormError,
                passwordError: e.target.value.length ===0 ? "Password field is required" : !passRegex.test(e.target.value) ? "password should be at least 8 characters at least with special char and number and char" : "",
            });
        }
    }
    return(
       < >
            <div className="row p-3">
                <div className="col-5 mx-auto">
                    <Form>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" className={loginFormError.emailError ? "border-danger shadow shadow-danger": ""} value={loginForm.email} onChange={(e) => handleFormChange(e)} placeholder="Enter email" />
                            {
                            loginFormError.emailError &&
                            <Form.Text className="text-danger">
                                {loginFormError.emailError}
                            </Form.Text>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" className={loginFormError.passwordError ? "border-danger shadow shadow-danger": ""}  value={loginForm.password} onChange={(e) => handleFormChange(e)} placeholder="Password" />
                            <input type="checkbox"  onChange={(e)=>handlePasswordShow(e)}/> show Password
                            {
                                loginFormError.passwordError &&
                                <Form.Text className="text-danger d-block">
                                    {loginFormError.passwordError}
                                </Form.Text>}
                        </Form.Group>
                        
                        <Button variant="primary w-100"  onClick={(e)=> submit(e)}>
                            Login
                        </Button>
                    </Form>
                    {show &&
                    <ToastContainer position="top-end" className="p-3">
                        <Toast className="bg-success text-light">
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                            <strong className="me-auto">abdeladl</strong>
                            <small className="text-muted">just now</small>
                        </Toast.Header>
                        <Toast.Body>successfully to validate Data</Toast.Body>
                        </Toast>
                    </ToastContainer>}
                </div>
            </div>
       </>
    );
}