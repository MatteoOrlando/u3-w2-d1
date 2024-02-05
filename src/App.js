import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
// import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap';
import BookList from './components/BookList';
import fantasy from './components/data/fantasy.json';
// import Table from './components/Table';

// import { Col, Row } from 'react-bootstrap';
// import { Component } from 'react';

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  );
}

// class App extends Component() {
//   render() {
//     return (
//       <>
//         <header className="App-header">
//           <Container>
//             <Row>
//               <Col></Col>
//               <Col className="my-auto">
//                 <BookList />
//               </Col>
//             </Row>
//           </Container>
//         </header>
//       </>
//     );
//   }
// }

export default App;
