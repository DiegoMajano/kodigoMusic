import React, { useEffect, useState } from 'react'
import { getSearch } from '../services/songServices'
import SongCard from './SongCard'


export default function Busqueda() {

  const [song, setSong] = useState('')
  const [songs, setSongs] = useState([])

  const handleSubmit = async (e) => {

    e.preventDefault();

    if(song.trim() === ''){
        alert('ingresar una cancion')
        return
    }
    console.log(song);
    const apiSongs = await getSearch(song) 
    setSongs(apiSongs.tracks.items)   
  }  

  return (
    <>
    <div className='w-100'>
      <nav className="navbar navbar-dark bg-dark rounded-4">
        <div className="container-fluid">
          <a className="navbar-brand">Buscar en API de Spotify:</a>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e => setSong(e.target.value)} value={song}  />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
      </nav>      
      <div className='d-flex flex-wrap gap-2 pt-5 justify-content-center '>
        {songs.map((song, index) => (
            
            <div key={index} className='d-flex'>
                <SongCard song={song} />
            </div>
            
        ))}   
      </div>
    </div>
    </>
  )
}
