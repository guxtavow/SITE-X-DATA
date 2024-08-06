import './QuemSomos.css'
import Mundo from './tec.png'
import HorizontalTimeline from 'react-horizontal-timeline';
import { useState } from 'react';


export default function QuemSomos() {

  const [value, setValue] = useState(0)

  const events = [
    {date:'Janeiro 15, 2024',title:'O INICIO DE TUDO!', //Primeiro ponto da timeline
                    description:`  
                        A X-data nasceu da visão de um grupo de entusiastas de tecnologia que perceberam
                        uma lacuna no mercado de computadores pessoais. Fundada na década de 2010, começamos
                        como uma pequena startup focada em criar soluções de hardware que não apenas atendessem 
                        às necessidades dos usuários, mas que os inspirassem a explorar novas possibilidades. 
                        Ao longo dos anos, nossa paixão por inovação nos transformou em um dos líderes do setor, 
                        conhecidos por nossos produtos que combinam design de ponta, sustentabilidade e tecnologia de última geração. 
                        Nossa trajetória é marcada por um compromisso contínuo com a excelência e a inovação, 
                        impulsionando fronteiras e redefinindo o que é possível no mundo da tecnologia.`
                      },
    {date:'Junho 03, 2024',title:'NOSSO PRIMEIRO PROJETO', //Segundo ponto da timeline
                    description:`
                        O primeiro projeto da X-data foi um marco na nossa história e no mercado de tecnologia. 
                        Inspirados pela necessidade de criar um dispositivo verdadeiramente adaptável, nossa equipe desenvolveu um computador 
                        modular que permitia aos usuários personalizar e atualizar seus componentes facilmente. Esse produto inovador não apenas
                        ofereceu flexibilidade sem precedentes, mas também estendeu a vida útil do hardware, reduzindo o desperdício eletrônico. 
                        Nossa abordagem pioneira e centrada no cliente destacou nosso compromisso com a sustentabilidade e a inovação, 
                        lançando as bases para o nosso crescimento e sucesso futuros.     
      `},
    {date:'Novembro 15, 2024',title:'O MOMENTO ATUAL',//Terceiro ponto da timeline
                    description:`
                        Hoje, a X-data se estabeleceu como uma referência no setor de tecnologia, reconhecida por sua dedicação à qualidade 
                        e à inovação. Com uma equipe talentosa e diversificada, estamos na vanguarda do desenvolvimento de soluções tecnológicas 
                        que integram inteligência artificial, computação em nuvem e segurança cibernética avançada. 
                        Nosso portfólio de produtos continua a crescer, abrangendo desde dispositivos pessoais a soluções empresariais complexas. 
                        O reconhecimento global e a confiança dos nossos clientes nos inspiram a continuar explorando novos horizontes e 
                        enfrentando desafios com criatividade e determinação.
                    `},
    {date:'Julho 02, 2025',title:'O FUTURO QUE NOS AGUARDA', //Quarto ponto da timeline
                    description:`
                        Olhando para o futuro, a X-data está empenhada em moldar o panorama tecnológico global com soluções inovadoras 
                        e sustentáveis. Planejamos expandir nossa pesquisa em áreas emergentes como computação quântica, Internet das Coisas 
                        (IoT) e realidade aumentada, buscando novas formas de conectar e empoderar pessoas. Estamos determinados a manter nosso 
                        papel de liderança na transformação digital, promovendo uma cultura de inovação que prioriza o impacto social positivo. 
                        Com cada passo, visamos construir um futuro em que a tecnologia atue como uma força inclusiva e sustentável, 
                        que inspire as próximas gerações a explorar o que é possível.
                    `}
  ]

  const dates = events.map(event => new Date(event.date).toISOString().split('T')[0]) //mapeamento dos objetos

  return (
    <>
      <div className='sections'>
        <div className='planeta'>
          <img src={Mundo} height={600} alt='planeta' />
          <p style={{
            fontSize: 8,
            marginTop: -40
          }}>
            <a href="https://pt.lovepik.com/images/png-world-technology-globe.html">Globo De Tecnologia Mundial Png vectors by Lovepik.com</a>
          </p>
        </div>

        <br />

        <div className='timeline-container'>
          <HorizontalTimeline
            styles={{ 
              outline:'none', 
              foreground: 'blueviolet',
            }}
            index={value}
            indexClick={(index) => {
              setValue(index)
            }}
            values={dates}
            getLabel={(date) => {
              const event = events.find(event => new Date(event.date).toISOString().split('T')[0] === date);
              return event ? event.title : date;
            }}  
        />

        <br />

        <div class="card">
          <div class="card-body">
            <div className='TextoTML'>
              <h5 class="card-title"> {events[value].title} </h5>
              <h6 class="card-text1">{events[value].date}</h6>
              <p className="card-text2">{events[value].description}</p>
            </div>
          </div>
        </div>

        </div>
      </div>
    </>
  );
}
