import './Footer.css'
import Linkedin from './linkedin.png'
import github from './github.png'

export default function Footer(){
    
return(
    <>
    <footer id='foot' className='HomeFooter'>
        <div className='textoFooter'>
            <h7>
            Copyright © 2024 X-DATA. Todos os direitos reservados. Todas as marcas registradas mencionadas são propriedade
            de seus respectivos proprietários. Este site é protegido por leis de direitos autorais e outras leis de propriedade intelectual.
            O uso não autorizado deste site pode violar leis de direitos autorais, marcas registradas e outras regulamentações.
            Ao acessar este site, você concorda com os termos e condições de uso.
            </h7>
            <br />
            <div className='Sociais'>
                <a href='https://www.linkedin.com/in/gustavodeaquinoavila/' rel="noreferrer" target='_blank' id='linkedin'><img src={Linkedin} alt='Linke' width='50px' id='link'></img></a>
                <a href='https://github.com/guxtavow' rel="noreferrer" target='_blank' id='GitHub'><img src={github} alt='Git' width='50px' id='github'></img></a>
            </div>

                <div className='creditos'>
                    <p><a target="_blank" href="https://icons8.com/icon/16318/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>  <a target="_blank" href="https://icons8.com/icon/16166/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
                </div>
        </div>
    </footer>
    </>
)

}