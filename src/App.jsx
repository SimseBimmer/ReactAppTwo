import { useState } from 'react';
import './App.scss';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { NavBar } from './components/NavBar/NavBar';
import { Hilsen } from './components/Hilsen/Hilsen';
import { Liste } from './components/Liste/Liste';
import { Button } from './components/Button/Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <NavBar />
          <main>
            <Routes>
              <Route index element={<HomePage />}/>
              <Route path="/about" element={<AboutPage />}/>
              <Route path="*" element={<ErrorPage />}/>

            </Routes>


            <Hilsen navn="Mette" />
            {/* <Liste titel="Mine Livretter" items={livretter} /> */}

          </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
