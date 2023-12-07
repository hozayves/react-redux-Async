import { useState, useEffect } from 'react'
import './App.css'
import { fetchInfo } from './features/infoData/infoDataSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const data = useSelector(state => state.info.data)
  const dispatch = useDispatch()
  const userStatus = useSelector(state => state.info.status)

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchInfo())
    }
  }, [dispatch, userStatus])

  return (
    <>
      <div className='p-4 bg-slate-400 flex flex-col gap-1 justify-center h-screen items-center'>
        { 
          data?.map((item, index) => (
            <p
              keys={item.id} 
              className='
                border 
                p-2 
                rounded-lg 
                border-slate-300
                w-1/2
                font-semibold
                '
            >
                {item.id}{".  "}{item.name.substring(0, 50)}
            </p>
          )) 
        }
      </div>
    </>
  )
}

export default App
