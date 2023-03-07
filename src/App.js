import { Routes, Route } from 'react-router-dom'
import EnterPage from './components/enter-page/EnterPage'
import './App.scss';
import Tasks from './components/tasks/Tasks';


function App() {
  return (
    <main className='wrapper'>
      <Routes>
        <Route path='/login' element={<EnterPage />} />
        <Route path='/tasks' element={<Tasks />} />
      </Routes>
    </main>
  );
}

export default App;
