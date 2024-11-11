import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import RestrictedRoute from './RestrictedRoute';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
      dispatch(refreshUser());
    }, [dispatch]);

  return ( isRefreshing ? (
    <b>Refreshing user...</b> 
  ) : (
    <div>
      <Layout>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }/>
          <Route 
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage/>} />
          }/>
          <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage/>}/>
          }/>
        </Routes>
      </Layout>
      <Toaster 
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                fontSize: '18px',
                padding: '16px',
                maxWidth: '500px',
              }
            }}
          />
    </div>
  )
  )
};

export default App;
