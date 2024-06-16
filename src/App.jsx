import moment from 'moment';

import './App.css'
import { months } from 'moment/moment';

function App() {
  return (
    <>
    <div className='flex flex-col items-center justify-between h-[90vh]'>
      <div>
        <span>{moment().format('l')}</span>
      </div>
      <div className='flex flex-col gap-6'>
        <h1 className='text-9xl'>
          {moment().dayOfYear()}
        </h1>
        <span className='text-6xl'>{moment().week()}</span>
        <span className='text-3xl'>{moment().format('YYYY')}</span>
      </div>
      <div>
        <span>{moment().format('LT')}</span>
        
      </div>
    </div>
    </>
  )
}

export default App
