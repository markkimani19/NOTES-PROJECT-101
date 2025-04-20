import React from 'react'

const NoteForm = () => {
  function handleClick(){
    const handleClick = () => {

    } 
  }
  return (
    <div>
        <form onSubmit>
           
            <input type="text" name='Title' placeholder='Title'/>
            <input type="text" name='Content' placeholder=' Content' />
            
          <div>
            <button onClick={handleClick}>Add note</button>
          </div>
        </form>
    </div>
  )
}

export default NoteForm