import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Container>
      {/* Header */}
      <Routes>
        {/* <Route path={`/`} element={<Home />} />
        <Route path={`/ads/:id`} element={<Ad />} />
        <Route path={`/ads/add`} element={<AdAdd />} />
        <Route path={`/ads/edit/:id`} element={<AdEdit />} />
        <Route path={`/ads/remove/:id`} element={<AdRemove />} />
        <Route path={`/search/:searchPhrase`} element={<Search />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/register`} element={<Register />} />
        <Route path={`/logout`} element={<Logout />} />
        <Route path={`*`} element={<NotFound />} /> */}
      </Routes>
    </Container>
  );
}

export default App;
