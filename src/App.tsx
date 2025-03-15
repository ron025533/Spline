import Spline from '@splinetool/react-spline';
import './App.css'

export default function App() {
  return (
    <div className='c'>
      <div className='container'>
        <div className='hidercon'>
          <Spline scene="https://prod.spline.design/P210V1FLhYzLijBh/scene.splinecode" />
          <div className='hider'></div>
        </div>
      </div>
      <div className='big'>
        <h1>BIG TEST</h1>
      </div>
      <div className='scroll'></div>
    </div>
  );
}