import { Route, Routes } from 'react-router-dom';
import { PATHS } from './AppUtilities';

import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container';

import Header from './Components/Features/Header/Header';
import Home from './Components/Pages/Home/Home';
import SearchedAds from './Components/Pages/SearchedAds/SearchedAds';
import NotFound from './Components/Pages/NotFound/NotFound';
import SingleAd from './Components/Pages/SingleAd/SingleAd';

const App = () => {
  return (
    <Container className={`overflow-hidden overflow-y-scroll p-0 min-vw-100`}>
      <Header />
      <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={`/ads/:id`} element={<SingleAd />} />
        {/* <Route path={`/ads/add`} element={<AdAdd />} />
        <Route path={`/ads/edit/:id`} element={<AdEdit />} />
        <Route path={`/ads/remove/:id`} element={<AdRemove />} /> */}
        <Route path={PATHS.SEARCH_ROUTE} element={<SearchedAds />} />
        {/* <Route path={`/login`} element={<Login />} />
        <Route path={`/register`} element={<Register />} />
        <Route path={`/logout`} element={<Logout />} /> */}
        <Route path={`*`} element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
