import React from 'react'

const App = () => {

  function btnClicked(a) {
    console.log('Button is Clicked!!!',a);
  }

  return (
    <div>
      <button
        onClick={function(){
          btnClicked(10)
        }}
        className='active:scale-95 bg-emerald-600 text-white px-6 py-3 rounded font-bold m-2'
      >Click to Download
      </button>
    </div>
  )
}

export default App