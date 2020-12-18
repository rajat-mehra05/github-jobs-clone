import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FetchJobs from './FetchJobs'
import { Container, Spinner} from 'react-bootstrap'
import Job from './Job'
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';
import './App.css'
import Header from './components/Header'
import Contact from "./components/Contact"

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = FetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Router>
    <Route exact path="/" render={props => (
    <Container className="my-3">
      <Header />
      <SearchForm params={params} onParamChange={handleParamChange} /> {/* Component */}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <Spinner animation="grow" variant="info" role="status"> <span className="sr-only">Loading...</span> </Spinner>}
      {error && <h2>Error. Try Refreshing.</h2>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
    </Container>
    )} />
    <Route path="/contact" component={Contact} />
    </Router>    
  )
}

export default App;
