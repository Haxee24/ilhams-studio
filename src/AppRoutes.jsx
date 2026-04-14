import {Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        </Route>
    </Routes>
  )
}

export default AppRoutes