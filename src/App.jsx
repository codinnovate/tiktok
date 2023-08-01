
import './App.css'
import Video from './components/Video'

function App() {
  return (
    <div className='app'>
      <div className='app__videos'>
        <Video
          url="https://www.tiktok.com/@mumupolicecomedy0/video/7257490053398629637?is_from_webapp=1&sender_device=pc" channel="nabendu82"
          description="Macbook Air to new Windows editing beast"
          song="I am a Windows PC"
          likes={345}
          shares={200}
          messages={90}
        />
     
      </div>
    </div>
  );
}

export default App
