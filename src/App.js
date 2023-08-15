import './App.css';
import { Button } from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className={"container "}>
      <div className='h1 bg-primary text-light'>Choices for Open Electives for Odd Sem 2023</div>
      <div className='mx-auto col-10 col-md-8 col-lg-6'>
        <form onSubmit="">
          <div>
            <label htmlFor="" className="form-label">Email</label>
            <input
              type="Email"
              name="email"
              className="form-control"
              autoComplete="off"
              required="true"
            />
          </div>
          <div>
            <label htmlFor="" className="form-label">Name of Student
            </label>
            <input
              type="Email"
              name="email"
              autoComplete="off"
              className="form-control"
              required="true"
            />
          </div>
          <div>
            <label htmlFor="" className="form-label">Institute Id
            </label>
            <input
              type="Email"
              name="email"
              autoComplete="off"
              className="form-control"
              required="true"
            />
          </div>
          <div>
            <label htmlFor="language1" className="form-label">Open Elective 1  Preference 1</label>
            <select name="language1" required="true" id="language1" class="form-select form-select-sm mb-2" aria-label="Small select example">
              <option value="SelectItem" selected>Select</option>

              <option value="Biomaterials" >TOE 64 Biomaterials</option>
              <option value="EmbeddedSystems">TOE 64 Embedded Systems</option>

            </select>
          </div>
          <div>
            <label htmlFor="language2" className="form-label">Open Elective 1  Preference 2</label>
            <select name="language2" required="true" id="language2" class="form-select form-select-sm mb-2 " aria-label="Small select example">
              <option value="SelectItem" selected>Select</option>
              <option value="EmbeddedSystems">TOE 64 Embedded Systems</option>
              <option value="Biomaterials" selected>TOE 64 Biomaterials</option>

            </select>
          </div>
          <div>
            <button type="submit" class="btn btn-primary">Submit</button>

            <button type="submit" className="btn btn-link" >
              Clear form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
