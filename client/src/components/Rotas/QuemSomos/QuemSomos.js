import './QuemSomos.css'
import Card from 'react-bootstrap/Card';


export default function QuemSomos(){


    return(
        <>
        <div className='sections'>
            <h1
            style={{
                color:'blueviolet',
                fontWeight:'bolder',
                fontSize:'70px',
                marginTop:'3vh',
            }}
            >
                E QUAL A NOSSA HISTÓRIA?
            </h1>
        
            <div className='info'>   
                <Card className='info-spec'>
                    <Card.Header
                     style={{
                        fontWeight:'bolder',
                        fontSize:'25px'
                    }}
                    >
                    De onde viemos?
                    </Card.Header>
                    <Card.Body>
                        <Card.Text
                        style={{
                            fontWeight:'400',
                        }}
                        >
                        A X-data nasceu da visão de um grupo de entusiastas de tecnologia que perceberam
                        uma lacuna no mercado de computadores pessoais. Fundada na década de 2010, começamos
                        como uma pequena startup focada em criar soluções de hardware que não apenas atendessem 
                        às necessidades dos usuários, mas que os inspirassem a explorar novas possibilidades. 
                        Ao longo dos anos, nossa paixão por inovação nos transformou em um dos líderes do setor, 
                        conhecidos por nossos produtos que combinam design de ponta, sustentabilidade e tecnologia de última geração. 
                        Nossa trajetória é marcada por um compromisso contínuo com a excelência e a inovação, 
                        impulsionando fronteiras e redefinindo o que é possível no mundo da tecnologia.
                        </Card.Text>
                    </Card.Body>
                </Card>    
            </div>

            <div className='info2'>            
                <Card className='info-spec'>
                    <Card.Header
                     style={{
                        fontWeight:'bolder',
                        fontSize:'25px'
                    }}
                    >
                    O que fazemos?
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Na X-data, desenvolvemos computadores e soluções tecnológicas que definem o estado da arte em desempenho,
                        eficiência e design intuitivo. Nosso foco está em criar produtos que não só atendam às crescentes demandas 
                        dos ambientes de trabalho modernos e do entretenimento digital mas também contribuam para um planeta mais sustentável. 
                        Cada componente é escolhido meticulosamente para garantir a máxima eficiência energética e minimizar o impacto ambiental. 
                        Além disso, nossa tecnologia de inteligência artificial exclusiva está projetada para aprender com os usuários 
                        e se adaptar continuamente, melhorando sua experiência de forma proativa e personalizada.                        
                        </Card.Text>
                    </Card.Body>
                </Card>    
            </div>


            <div className='info3'>
                <Card className='info-spec'>
                    <Card.Header
                    style={{
                        fontWeight:'bolder',
                        fontSize:'25px'
                    }}>
                        Por que fazemos?
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Nossa missão na X-data vai além de simplesmente fabricar computadores. Nosso objetivo é transformar 
                        a maneira como as pessoas interagem com a tecnologia, tornando-a mais acessível, intuitiva e benéfica 
                        para a sociedade. Acreditamos que a tecnologia deve ser uma força para o bem, capaz de melhorar a qualidade 
                        de vida, educar e conectar pessoas ao redor do mundo. Estamos comprometidos em liderar pelo exemplo, 
                        demonstrando que é possível alcançar excelência comercial enquanto se promove um impacto social positivo 
                        e se preserva o ambiente para as futuras gerações. Esta é a nossa paixão e a razão pela qual nos esforçamos 
                        todos os dias para inovar e inspirar.
                        </Card.Text>
                    </Card.Body>
                </Card>    
            </div>

        </div>


        </>
    )
}