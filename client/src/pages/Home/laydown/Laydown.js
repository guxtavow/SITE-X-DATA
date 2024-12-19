import './Laydown.css'
import { Accordion } from 'react-bootstrap'


export default function Laydown(){

return(
    <>
    <div id='laydown' className='Content'>
        <div className='bloco'>    
        
        <span id='title'><h1>Antes de comprar:<br />Que tal 3 curiosidades para saber o que te aguarda neste futuro próximo?</h1></span>
        <br />
        <br />

        <Accordion defaultActiveKey={['0']}>
        <Accordion.Item eventKey="0" className='accordion1'>
            <Accordion.Header><span id='curiosidades' style={{color:'white'}}><h1><b>Autossustentabilidade Energética</b></h1></span></Accordion.Header>
            <Accordion.Body>
            O novo PC da X-data introduz uma inovação sem precedentes no mundo da tecnologia: 
            a autossustentabilidade energética. Diferente de qualquer outro computador disponível no mercado,
            este modelo é equipado com uma matriz de nano-células solares integradas e um sistema de recuperação de energia cinética.
            Este sistema híbrido capta tanto a luz ambiente quanto a energia gerada pelo movimento 
            e a interação do usuário com o dispositivo, convertendo-as em energia elétrica. 
            Essa abordagem não só reduz significativamente o consumo de energia da máquina como também marca um passo gigantesco
            em direção à sustentabilidade e à independência energética no setor de tecnologia da informação, 
            alinhando-se perfeitamente com os objetivos globais de redução da pegada de carbono.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className='accordion1'>
            <Accordion.Header><span id='curiosidades' style={{color:'white'}}><h1><b>IA Adaptativa e Aprendizado Contínuo</b></h1></span></Accordion.Header>
            <Accordion.Body>
            O PC da X-data está no auge da inteligência artificial, incorporando um sistema de IA adaptativa que aprende continuamente
            com o comportamento do usuário. Essa tecnologia não está limitada a adaptar-se às preferências de uso;
            ela é capaz de antecipar necessidades, otimizar processos e oferecer soluções personalizadas em tempo real. 
            Além disso, o sistema é projetado para evoluir, adquirindo novas habilidades e funcionalidades através de atualizações automáticas
            que se baseiam em padrões de uso coletivo. Isso significa que o PC não só se torna mais eficiente com o tempo,
            mas também contribui para uma base de conhecimento compartilhado que beneficia todos os usuários da X-data globalmente.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className='accordion1'>
            <Accordion.Header><span id='curiosidades' style={{color:'white'}}><h1><b>Interface Revolucionária</b></h1></span></Accordion.Header>
            <Accordion.Body>
            Despedindo-se das tradicionais interfaces de usuário, o novo PC da X-data introduz uma forma revolucionária de interação homem-máquina.
            Utilizando uma combinação de realidade aumentada, sensores de movimento e feedback tátil, cria uma experiência imersiva
            que transcende os limites da tela. O usuário pode manipular objetos digitais no espaço tridimensional como se fossem reais,
            com gestos naturais e intuitivos. Esta interface inovadora promete não apenas aumentar significativamente a produtividade,
            eliminando barreiras entre o usuário e a máquina, mas também abrir novas possibilidades para designers, educadores,
            e profissionais criativos, transformando completamente a maneira como interagimos com a tecnologia digital.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </div>
    </div>
    </>
)
}
