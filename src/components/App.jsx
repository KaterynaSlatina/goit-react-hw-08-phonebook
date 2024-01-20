import { Route, Routes } from 'react-router-dom';
import './App.module.css';
import '../redux/store';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from '../redux/auth/thunks';
import { selectIsRefreshing } from '../redux/auth/selectors';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <b>...Refreshing user</b>
  ) : (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Suspense>
    </div>
  );

  // <>
  //   <h2>Phonebook</h2>
  //   <FormContact />
  //   <h2>Contacts list</h2>
  //   {isLoading && !error && <b>Request in progress...</b>}
  //   <ContactList />
  //   {contacts.length > 0 ? (
  //     <Filter />
  //   ) : (
  //     <div>Your phonebook is empty. Add first contact!</div>
  //   )}
  //   {/* <Filter /> */}
  // </>
};