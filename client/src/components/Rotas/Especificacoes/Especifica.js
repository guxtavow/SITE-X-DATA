import './Especifica.css'
import Card from 'react-bootstrap/Card'
import Monitor from './monitor.png'
import PC from './PC.jpg'
import Placa from './placa.jpg'
import Process from './processador.jpg'
import Memoria from './memoria.jpg'

export default function Especificacao(){


    return(
        <>
        <div className='Especify'>
            <div className='CARDES'>         
                <Card style={{ width: '18rem' }} className='cards-top'>
                    <Card.Img variant="top" src={Monitor} />
                    <Card.Body>
                        <Card.Title>MONITOR</Card.Title>
                        <Card.Text className='cardtext'>
                        O monitor X-data oferece uma experiência visual imersiva com resolução ultra-HD
                        e taxa de atualização ultra-rápida.
                        </Card.Text>
                    </Card.Body>
                </Card> <br />

                <Card style={{ width: '18rem' }} className='cards'>
                <Card.Img variant="top" src={Memoria} />
                    <Card.Body>
                        <Card.Title>MEMORIA RAM E SSD</Card.Title>
                        <Card.Text className='cardtext'>
                        A memória RAM e o SSD integrados no PC oferecem desempenho e velocidade surpreendentes. 
                        Com uma capacidade de armazenamento e uma velocidade de leitura/gravação ultra-rápida, garantem 
                        e resposta ágil em todas as suas atividades computacionais.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div class="vertical-line"></div>
                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src={Placa} />
                    <Card.Body>
                        <Card.Title>PLACA MÃE</Card.Title>
                        <Card.Text className='cardtext'>
                        Com uma arquitetura robusta e componentes de alta qualidade, 
                        a placa mãe X-data garante desempenho confiável e estável para todas as suas necessidades de computação.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div class="horizontal-line"></div>


                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src={Process} />
                    <Card.Body>
                        <Card.Title>PROCESSADOR</Card.Title>
                        <Card.Text className='cardtext'>
                        O coração do PC da X-data é seu processador de última geração. 
                        Com múltiplos núcleos e velocidades de clock impressionantes, garante uma resposta rápida e uma experiência de computação sem interrupções, 
                        seja para trabalho, jogos ou criação de conteúdo.
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{ width: '18rem' }} className='cards-bottom'>
                <Card.Img variant="top" src={PC} />
                    <Card.Body>
                        <Card.Title>GABINETE</Card.Title>
                        <Card.Text className='cardtext'>
                        Construído com materiais de alta qualidade e uma disposição inteligente dos componentes, gabinete X-data  
                        oferece excelente fluxo de ar e fácil acesso para manutenção e upgrades. 
                        </Card.Text>
                    </Card.Body>
                </Card>


            </div>
        </div>
        </>
    )
}