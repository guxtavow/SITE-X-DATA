import logoX from './logo-X1.png'
import './Header.css'


export default function Header(){
    return(
        <header>
            <center>
            <nav class="navbar navbar-expand-lg body-tertiary" style={{backgroundColor: 'transparent'}}>
            <div class="container-fluid">
                <img src={logoX} className="LogoX" alt="Xlogo" width="100" height="50"/>
                <a class="navbar-brand" href="#" style={{color:'blueviolet', fontSize:'40px'}}><b><i>X-DATA</i></b></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#" ><b>Inicio</b></a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link" href="#"><b>Especificações</b></a>
                    </li>   

                    <li class="nav-item">
                    <a class="nav-link" href="#"><b>Valores</b></a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link" href="#"><b>Quem somos</b></a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link" href="#"><b>Fale Conosco</b></a>
                    </li>

                </ul>
                </div>
            </div>
            </nav>
            </center>
        </header>

    )
}

