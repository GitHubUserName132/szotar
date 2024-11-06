import './App.css';
import words from './words';

function App() {
  
  return (
    <>
    {
      words.map(data => {
        return <div id='datas'>
          <div>
            <div id='termEn'>{data.term_en}</div>
            <div id='termHu'>{data.term_hu}</div>
          </div>
          <div>
            <div id='descEn'>{data.description_en}</div>
            <div id='descEn'>{data.description_hu}</div>
          </div>
        </div>
      })
    }
    </>
  );
}

export default App;
