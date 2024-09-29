import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployersList from '../employers-list/employers-list'
import EmpoyersAddForm from '../employers-add-form/employers-add-form'

function App() {
  return(
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />

        <AppFilter />
      </div>

      <EmployersList />

      <EmpoyersAddForm />
    </div>
  )
}

export default App