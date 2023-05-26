// 웹 어플리케이션이 실행되면 가장 먼저 실행되는 파일
// npm start 프로세스는 개발자 서버를 가동하고 코드를 살펴보는데 코드를 살펴보고 실행하며 브라우저에 전달하는 것과
// 전달하기 전에 코드를 변형해서 추가 기능이 브라우저에서 작동하도록 해주는 것이다.
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
