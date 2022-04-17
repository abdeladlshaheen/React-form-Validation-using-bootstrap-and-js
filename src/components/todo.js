import { useEffect, useState } from 'react';
export default function ToDo(props)
{
    const [task,setTask] = useState("");
    const handleChange = (e) => {
        setTask(e.target.value);
    };
    const addTask = () =>{
        let row = document.createElement('tr');
        let td = document.createElement('td');
        let button =document.createElement('button');
        if(task.length != 0 )
        {
            button.innerText = "undo";
            button.className ="btn btn-info";
            button.addEventListener('click',function() {
                console.log(this.innerText);
                if(this.innerText == "undo"){
                    this.parentNode.parentNode.children[2].style.cssText = "text-decoration: line-through";
                    this.innerText = "Redo";
                }
                else
                {
                    this.parentNode.parentNode.children[2].style.cssText = "text-decoration: none";
                    this.innerText = "undo";
                }
            });
            
            td.appendChild(button);
            row.appendChild(td);
            td = document.createElement('td');
            button =document.createElement('button');
            button.innerText = "Delete";
            button.className ="btn btn-danger";
            button.addEventListener('click',function() {
                console.log(this);
                this.parentNode.parentNode.remove();
            });
            td.appendChild(button);
            row.appendChild(td);
            
            td = document.createElement('td');
            td.innerText = task ;
            row.appendChild(td);
            document.querySelector('tbody').appendChild(row);
            console.log(row);
        }
    };
    return(
       <>
        <div className="row p-3">
                <div className="col-5 mx-auto">
                    <div className="bg-primary text-white p-3 rounded shadow shadow-secondary">
                        <h1>ToDo App !</h1>
                        <input type="text" name="task" value={task} className="form-control text-center" onChange={(e)=>{handleChange(e)}} placeholder="enter task name" />
                        <button className="btn btn-primary fw-bold border border-light rounded my-3" onClick={addTask} >Add</button>
                    </div>
                    <table className="table table-hover table-striped table-border ">
                        <thead>
                            <tr>
                                <td>Undo</td>
                                <td>Delete</td>
                                <td>Task Name</td>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
        </div>
       </>
    );
}