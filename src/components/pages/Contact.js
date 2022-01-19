import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Contact() {
  return (
    <div style={{"background":"#FFF5E6"}}>
      <div className="container-fluid container-fluid-content pt-5 Contact_Content mb-5">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10 text-center">
            {/* <p className="mb-5">HOME · <b>CONTACT</b></p> */}
            <h1 className="mt-5 text-center">TASK BOARD</h1>
            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-1"></div>
        </div>
     
        <div>
          <header>
            {/* <h1>Drag & Drop<br/><span>Lean Kanban Board</span></h1> */}
          </header>
          <div class="add-task-container">
            <div class="row">
              <div class="col-1">
              </div>
              <div class="col-5">
              <input type="text" maxlength="12" id="taskText" placeholder="New Task..."
                  onkeydown="if (event.keyCode == 13)document.getElementById('add').click()" />
               </div>
              <div class="col-5" style={{"text-align": "right", "margin-left": "29px", "padding-bottom": "30px"}}>
              <button id="add" class="button add-button" onclick="addTask()">Add New Task</button>
              </div>
              <div class="col-1">
              </div>
             
            </div>

          </div>
         



          <div >
      <div className="container">
      <table class="table table-striped border">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Label</th>
      <th scope="col">Sort</th>
      <th scope="col">CreatedAt</th>
      <th scope="col">UpdatedAt</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td className='p-0'>
      <button id="add" class="button edit-button" onclick="editTask()">Edit</button>
      <button id="add" class="button dlt-button" onclick="deleteTask()">Delete</button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Otto</td>
      <td className='p-0'>
      <button id="add" class="button edit-button" onclick="editTask()">Edit</button>
      <button id="add" class="button dlt-button" onclick="deleteTask()">Delete</button>
      </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Otto</td>
      <td className='p-0'>
      <button id="add" class="button edit-button" onclick="editTask()">Edit</button>
      <button id="add" class="button dlt-button" onclick="deleteTask()">Delete</button>
      </td>
    </tr>
    
  </tbody>
</table>
</div>

      </div>

        </div>
      </div>
      <div class="main-container mt-5" style={{"background":"#FFF5E6"}}>
            <ul class="columns" style={{"padding-left": "0px"}}>
              <li class="column to-do-column">
                <div class="column-header">
                  <h4>To Do</h4>
                </div>
                <ul class="task-list" id="to-do">
                  <li class="task">
                    <p>Analysis</p>
                  </li>
                  <li class="task">
                    <p>Coding</p>
                  </li>
                  <li class="task">
                    <p>Card Sorting</p>
                  </li>
                  <li class="task">
                    <p>Measure</p>
                  </li>
                </ul>
              </li>
              <li class="column doing-column">
                <div class="column-header">
                  <h4>Doing</h4>
                </div>
                <ul class="task-list" id="doing">
                  <li class="task">
                    <p>Hypothesis</p>
                  </li>
                  <li class="task">
                    <p>User Testing</p>
                  </li>
                  <li class="task">
                    <p>Prototype</p>
                  </li>
                </ul>
              </li>
              <li class="column done-column">
                <div class="column-header">
                  <h4>Done</h4>
                </div>
                <ul class="task-list" id="done">
                  <li class="task">
                    <p>Ideation</p>
                  </li>
                  <li class="task">
                    <p>Sketches</p>
                  </li>
                </ul>
              </li>
              <li class="column trash-column">
                <div class="column-header">
                  <h4>Trash</h4>
                </div>
                <ul class="task-list" id="trash">
                  <li class="task">
                    <p>Interviews</p>
                  </li>
                  <li class="task">
                    <p>Research</p>
                  </li>
                </ul>
                <div class="column-button">
                  <button class="button delete-button" onclick="emptyTrash()">Delete</button>
                </div>
              </li>
            </ul>
          </div>
    </div>
  );
}

export default Contact;