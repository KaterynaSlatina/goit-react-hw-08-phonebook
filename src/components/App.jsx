import { Route, Routes } from 'react-router-dom';
import './App.module.css';
import '../redux/store';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Suspense>
    </div>

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
  );
};
