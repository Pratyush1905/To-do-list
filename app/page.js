"use client"
import React,{useState} from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const sumbmitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    settitle("")
    setdesc("")
  }
  const deleteHandler=()=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1) 
    setmainTask(copyTask)
  }
  let renderTask = <h2>No Task Available</h2> 
  if(mainTask.length>0){
    renderTask=mainTask.map((t,i)=>{
    return (
      <li key={i} className='flex items-center justify-between mb-6'>
      <div className='flex justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-xl font-semibold'>{t.desc}</h6>
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      }}
       className='bg-red-400 text-white font-bold rounded px-4 py-2'>Delete</button>
      </li>
    )
  })
  }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-center text-5xl font-bold'>My Todo-list</h1>
      <form onSubmit={sumbmitHandler}>
        <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter title
        here' value={title} onChange={(e)=>{
          settitle(e.target.value)
        }}></input>
        <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter description
        here' value={desc} onChange={(e)=>{
          setdesc(e.target.value)
        }}></input>
        <button className='bg-black text-white text-2xl px-4 py-3 rounded'>Add task</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-200'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page