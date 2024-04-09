import './Banner.css'
import {useState, useEffect} from 'react'


export default function Banner(){
    const [acao,setAcao] = useState(false)

    useEffect(() =>{
    const temp = setTimeout(() => setAcao(true),1000)
    return () => clearTimeout(temp)
},[])

    return(
        <>
            <div className='container-banner' id='banner'>
                <div className={acao ? "evento-off evento": "evento-off"}>
                    <h1 className='Title'>
                        <b>X-DATA</b><br />
                    </h1>
                    <h3 className='subtitulo'>
                        <b>Quando você liga, o seu futuro começa </b>
                    </h3>
                </div>

            </div>
        </>
    )
}