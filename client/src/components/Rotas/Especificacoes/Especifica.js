import './Especifica.css'
import Card from 'react-bootstrap/Card'
import Monitor from './monitor.png'
import PC from './PC.jpg'
import Placa from './placa.jpg'
import Process from './processador.jpg'

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
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card> <br />

                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src={PC} />
                    <Card.Body>
                        <Card.Title>GABINETE</Card.Title>
                        <Card.Text className='cardtext'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src={Placa} />
                    <Card.Body>
                        <Card.Title>PLACA MÃE</Card.Title>
                        <Card.Text className='cardtext'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className='cards'>
                    <Card.Img variant="top" src={Process} />
                    <Card.Body>
                        <Card.Title>PROCESSADOR</Card.Title>
                        <Card.Text className='cardtext'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>


                <Card style={{ width: '18rem' }} className='cards-bottom'>
                    <Card.Img variant="top" src={Process} />
                    <Card.Body>
                        <Card.Title>MEMORIA RAM E SSD</Card.Title>
                        <Card.Text className='cardtext'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>


            </div>
        </div>
        </>
    )
}