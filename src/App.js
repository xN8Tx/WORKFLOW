import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import EnterPage from './components/enter-page/EnterPage'
import Tasks from './components/tasks/Tasks';

import './App.scss';


function App() {
  return (
    <>
      <Header />
      <main className='wrapper'>
        <Routes>
          <Route path='/login' element={<EnterPage />} />
          <Route path='/tasks' element={<Tasks />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
