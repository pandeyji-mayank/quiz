// import React from 'react';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Layout/Header';
// import Footer from './components/Layout/Footer';
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import CreateQuizPage from './pages/CreateQuizPage';
// import QuizListPage from './pages/QuizListPage';
// import TakeQuizPage from './pages/TakeQuizPage';
// import { AuthProvider } from './context/AuthContext';
// import { QuizProvider } from './context/QuizContext';
// import PrivateRoute from './components/Shared/PrivateRoute';

// const App = () => {
//   return (
//     <AuthProvider>
//       <QuizProvider>
//         <Router>
//           <Header />
//           <main className="container">
//             <Routes>
//               {/* yaha change kia Switch ki jagah */}
//               <Route path="/" component={HomePage} exact />
//               <Route path="/login" component={LoginPage} />
//               <Route path="/register" component={RegisterPage} />
//               <PrivateRoute path="/create-quiz" component={CreateQuizPage} />
//               <Route path="/quizzes" component={QuizListPage} />
//               <Route path="/quiz/:id" component={TakeQuizPage} />
//             </Routes>
//           </main>
//           <Footer />
//         </Router>
//       </QuizProvider>
//     </AuthProvider>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreateQuizPage from './pages/CreateQuizPage';
import QuizListPage from './pages/QuizListPage';
import TakeQuizPage from './pages/TakeQuizPage';
import { AuthProvider } from './context/AuthContext';
import { QuizProvider } from './context/QuizContext';
import PrivateRoute from './components/Shared/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <QuizProvider>
        <Router>
          <Header />
          <main className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <PrivateRoute path="/create-quiz" element={<CreateQuizPage />} />
              <Route path="/quizzes" element={<QuizListPage />} />
              <Route path="/quiz/:id" element={<TakeQuizPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </QuizProvider>
    </AuthProvider>
  );
};

export default App;
