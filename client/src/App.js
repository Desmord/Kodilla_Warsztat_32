import { Route, Routes } from 'react-router-dom';
import { PATHS } from './AppUtilities';

import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container';

import Header from './Components/Features/Header/Header';
import Home from './Components/Pages/Home/Home';
import SearchedAds from './Components/Pages/SearchedAds/SearchedAds';
import NotFound from './Components/Pages/NotFound/NotFound';
import SingleAd from './Components/Pages/SingleAd/SingleAd';
import Add from './Components/Pages/Add/Add';
import Edit from './Components/Pages/Edit/Edit';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';

const App = () => {
  return (
    <Container className={`overflow-hidden overflow-y-scroll p-0 min-vw-100`}>
      <Header />
      <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.SINGLE_AD_ROUTE} element={<SingleAd />} />
        <Route path={PATHS.ADD_AD} element={<Add />} />
        <Route path={`/ads/edit/:id`} element={<Edit />} />
        {/* <Route path={`/ads/remove/:id`} element={<AdRemove />} /> */}
        <Route path={PATHS.SEARCH_ROUTE} element={<SearchedAds />} />
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.REGISTER} element={<Register />} />
        {/* <Route path={`/logout`} element={<Logout />} /> */}
        <Route path={`*`} element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
