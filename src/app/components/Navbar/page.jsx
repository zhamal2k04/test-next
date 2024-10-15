import './navbar.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="navbar-container">

      <div className="navbar-links">
        <div className="navbar-left">
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            gap: '40px',
            alignItems: 'center',
            color: 'white'

          }}>
            <li><Link href="./">Главная</Link></li>
            <li><Link href="./Servise">Оклейка автомобилей</Link></li>
            <li><Link href="./Tablitsa">Детейлинг автомобилей</Link></li>
          </ul>
        </div>

        <button className='navbar-btn'>
          <h1>|||</h1>
        </button>
      </div>

      <h1 style={{
        fontSize: '150px',
        color: '#DB3138',
        textAlign: 'center',
        fontFamily: 'monospace',
        marginTop: '170px'
      }}>CAR MUSC</h1>

      <div className="kub-container">
        <div className="kub"></div>
        <div className="kub"></div>
        <div className="kub"></div>
        <div className="kub"></div>
      </div>


      <div className="navbar-text">
        <h1 style={{
          fontSize: '40px',
          color: 'white',
          width: '800px',
          fontFamily: 'unset',
          textAlign: 'center',
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus.
        </h1>
      </div>

<Link href="./Servise">
<button className='uslugi'><h1 style={{
           fontSize: '24px',
           color: 'white',
           position: 'relative',
         left: '50px',
         textTransform: 'uppercase',
      }}>Наши услуги</h1></button>
</Link>


      <div className="navbar-info">
        <div className="navbar-adress">
          <h2 className='adress'>
          адрес:
          </h2>
          <h1 className='contact'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </h1>
        </div>

        <div className="navbar-adress">
          <h2 className='adress'>
          телефон:
          </h2>
          <h1 className='contact'>8 (812) 123-45-67</h1>
          <h1 className='contact'>8-911-123-45-67</h1>
        </div>

        <div className="navbar-adress">
          <h2 className='adress'>
          Режим работы:
          </h2>
          <h1 className='contact'>пн-пт : 10:00 - 20:00</h1>
          <h1 className='contact'>сб-вск : 12:00 - 20:00</h1>
        </div>
      </div>










    </div>
  )
}

export default Navbar