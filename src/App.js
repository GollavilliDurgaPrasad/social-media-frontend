import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserSubmissionPage from './components/UserPage';
import AdminLogin from './components/AdminLogin';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-page" element={<UserSubmissionPage />} />
      <Route path="/admin-Login" element={<AdminLogin/>} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;
