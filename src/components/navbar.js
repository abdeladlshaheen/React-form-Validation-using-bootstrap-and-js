import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

export default function Navbar({changePage})
{
    const [pages,setPages] = useState(['signin','signup','todo']);   

    return(
       <>
            <div className="row">
                <Nav variant="pills justify-content-center bg-dark">
                    <Nav.Item>
                        <Nav.Link eventKey="signin" onClick={(e) =>{e.preventDefault();changePage(pages[0])}}>Sign in</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="signup" onClick={(e) =>{e.preventDefault();changePage(pages[1])}}>Sign Up</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="todo" onClick={(e) =>{e.preventDefault();changePage(pages[2])}}>Todo</Nav.Link>
                    </Nav.Item>  
                </Nav>
            </div>
       </>
    );
}