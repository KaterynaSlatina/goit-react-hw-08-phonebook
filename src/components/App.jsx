import { Route, Routes } from 'react-router-dom';
import './App.module.css';
import '../redux/store';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from '../redux/auth/thunks';
import { selectIsRefreshing, selectUser } from '../redux/auth/selectors';
// import Layout from './Layout';
import { RestrictedRoute } from '../components/RestrictedRoute';
import { PrivateRoute } from '../components/PrivateRoute';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  useEffect(() => {
    user && dispatch(refreshUserThunk());
  }, [dispatch, user]);

  return isRefreshing ? (
    <b>...Refreshing user</b>
  ) : (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<HomePage />} />
          <Route
            path="/registration"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          {/* </Route> */}
        </Routes>
      </Suspense>
    </div>
  );
};
