import React, { useState, useEffect }  from 'react';

import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'
import { Layout, Image, Button, Row, Col, Space } from 'antd';
import mainBackground from './images/stars.jpg';
import logo from './images/star-wars-logo.jpg';
import Complete from './components/Complete';
import Cards from './components/Cards/Cards';

/* import './App.css';
import { url } from 'inspector'; */

const { Header, Content } = Layout;


function App() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    async function fetchFilms() {
      let res = await fetch('https://swapi.dev/api/films/');
      let data = await res.json();
      setFilms(data.results);
      setLoading(false);  
    }

    fetchFilms();
  }, []);
  

  return (
    <>
    <Layout style={{backgroundImage: `url(${mainBackground})`}}>
        <Header style={{height:'100px', background: 'transparent'}}>
          <Row justify="space-between" align="middle">
            <Col span={3}>
              <Image
                width={200}
                height={100}
                preview={false}
                style={{cursor:'pointer'}}
                src={logo}
              />
            </Col>
            <Col span={5}>  
              <Row justify="end" align="top">
                <Space size='small'>
                  <Button size='large' ghost={true}>Вход</Button>
                  <Button size='large' ghost={true}>Регистрация</Button>
                </Space>               
              </Row>
            </Col>
          </Row>
        </Header>
        <Content style={{minHeight: '900px'}}>
          <Row justify="center" align="middle" style={{height: '100px'}}>
            <Col span={22}>
              <Complete />
            </Col>                      
          </Row>
          <div className="CardsContainer">
            <Cards data={films}/>  
          </div>           
        </Content>
      </Layout>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
  );
}

export default App;
