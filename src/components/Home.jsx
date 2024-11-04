import React, { useEffect, useState } from 'react'
import PlaylistInfo from './PlaylistInfo'
import playlistjson from '../../prueba.json'
import albumsjson from '../../albums.json'
import topplaylistjson from '../../playlists.json'


export default function Home() {

    const [top4Playlist, setTop4Playlist ] = useState([])
    const [topPlaylist, setTopPlaylist] = useState([])
    const [topAlbums, setTopAlbums] = useState([])    
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        //fetchData()
        const top4Playlist = playlistjson.playlist
        const topAlbum = albumsjson.albums
        const topPlaylists = topplaylistjson.playlist

        setTopPlaylist(topPlaylists)
        setTop4Playlist(top4Playlist)
        setTopAlbums(topAlbum)
        setLoading(false)
        //getPlaylist()
    },[])


  return (

    <>
        {
            loading ? 
            (
                <p>cargando datos</p> 
            )
            :
            (
                <div className='d-flex flex-column w-100'>
                    <h3>Recomendaciones:</h3>
                    <div className='' style={{width: '100%'}}>
                        <div className='row gap-2'>
                            {                                               
                                top4Playlist.map((playlist, index) => {
                                    console.log(playlist);                            
                                    return <div className='col-6' key={index}> <PlaylistInfo  playlist={playlist}/> </div>
                                })
                            }
                        </div>
                    </div>       
                    <h3 className='mt-2'>Playlist top</h3>
                    <div className='' style={{width: '100%'}}>
                        <div className='row gap-2'>
                            {                                               
                                topPlaylist.map((playlist, index) => {
                                    console.log(playlist);                            
                                    return <div className='col-6' key={index}> <PlaylistInfo  playlist={playlist}/> </div>
                                })
                            }
                        </div>
                    </div>       
                </div>    
            )
        } 
        
    </>
  )
}
