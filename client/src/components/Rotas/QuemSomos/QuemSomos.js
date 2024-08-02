import './QuemSomos.css'
import Mundo from './tec.png'

export default function QuemSomos() {

  const VALUES = ["2021-01-01", "2021-01-15", "2021-03-22"];



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

        </div>
      </div>
    </>
  );
}
