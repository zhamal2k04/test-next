import './servise.css';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PricingTable.module.css';

const Servise = () => {
  return (
    <div className='servise'>

      <div className="material">

        <div className="left-material">
          <div className="left-container">
            <h1 className="material-text-h1">
              Полиуретановая пленка единственная надежная защита автомобиля
              от всех внешних воздействий
            </h1>
          </div>

          <div className="kub-container" style={{
            justifyContent: 'center',
            marginTop: '40px'
          }}>
            <div className="kub"></div>
            <div className="kub"></div>
            <div className="kub"></div>
            <div className="kub"></div>
          </div>

          <div className="left-container">
            <p className="material-text-p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu      </p>
          </div>

          <div className="logo">
            <div className="logo1">
              <Image
                src="/servise/voys.png"
                alt="Logo 1"
                width={160}
                height={40}
              />

              <Image
                src="/servise/star.png"
                alt="Logo 1"
                width={160}
                height={40}
              />

            </div>

            <div className="logo2">
              <Image
                src="/servise/star.png"
                alt="Logo 1"
                width={160}
                height={40}
              />

              <Image
                src="/servise/voys.png"
                alt="Logo 1"
                width={160}
                height={40}
              />

            </div>
          </div>



        </div>

        <div className="right-material">
          <Image
            src="/section/cargallery/cars4.jpg"
            alt="Car 1"
            width={636}
            height={550}
          />
          <p style={{
            fontSize: '18px',
            color: 'white',
            fontFamily: 'initial',
            marginTop: '50px',
            width: '420px'

          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat est. Consectetur lectus.
          </p>
        </div>

      </div>

      {/* ----zashitni plyonki----- */}

      <div className="plyonki">

        <h1 className='plyonki-h1'>
          Преимущества защитной
          антигравийной пленки
        </h1>

        <div className="nash-uslugi">
        <h1 style={{
          fontSize: '52px',
          color: 'white',
          fontFamily: 'monospace',
          textTransform: 'uppercase',
        }}>Наши услуги</h1>

        <div className="kub-container" style={{
          justifyContent: 'center',
          marginTop: '50px'
        }}>
          <div className="kub"></div>
          <div className="kub"></div>
          <div className="kub"></div>
          <div className="kub"></div>
        </div>

      
        <div className="uslugi-cards">
          <div className="uslugi-card1">
            <Image
              style={{
                marginTop: '85px'
              }}
              src="/section/uslugi/icon1.png"
              alt="Car 1"
              width={70}
              height={57}

            />
            <h1 className="uslugi-card-h">
              Защитные пленки
            </h1>
            <p className="uslugi-card-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.
            </p>

          </div>

          <div className="uslugi-card1">
            <Image
              style={{
                marginTop: '70px'
              }}
              src="/section/uslugi/icon2.png"
              alt="Car 1"
              width={57}
              height={70}

            />
            <h1 className="uslugi-card-h">
              Цветные пленки
            </h1>
            <p className="uslugi-card-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.
            </p>

          </div>

          <div className="uslugi-card1">
            <Image
              style={{
                marginTop: '90px'
              }}
              src="/section/uslugi/icon3.png"
              alt="Car 1"
              width={70}
              height={45}

            />
            <h1 className="uslugi-card-h">
              Дизайн
            </h1>
            <p className="uslugi-card-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.
            </p>

          </div>

          <div className="uslugi-card1">
            <Image
              style={{
                marginTop: '65px'
              }}
              src="/section/uslugi/icon4.png"
              alt="Car 1"
              width={70}
              height={70}

            />
            <h1 className="uslugi-card-h">
              Оклейка салона
            </h1>
            <p className="uslugi-card-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur ultrices pellentesque vulputate sit. Ut feugiat.
            </p>

          </div>


        </div>


      </div>




      </div>

      {/* -----costs-cars----- */}

      <div className="costs-cars">

              <h1 className='header-h'>Стоимость полной оклейки автомобиля</h1>

              <div className="kub-container" style={{
            justifyContent: 'center',
            marginTop: '40px'
          }}>
            <div className="kub"></div>
            <div className="kub"></div>
            <div className="kub"></div>
            <div className="kub"></div>
          </div>

      <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>АВТО / МАТЕРИАЛ</th>
            <th className={styles.tableHeader}>ПЛЕНКА SPECTROLL</th>
            <th className={styles.tableHeader}>ПЛЕНКА HEXIS</th>
            <th className={styles.tableHeader}>ПЛЕНКА SUNTEK</th>
            <th className={styles.tableHeader}>ПЛЕНКА LLUMAR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.tableData}>
              <span className={styles.carClass}>1 КЛАСС <br /> </span> (MINI COOPER, FIAT 500)
            </td>
            <td className={styles.tableData}>53 000</td>
            <td className={styles.tableData}>64 000</td>
            <td className={styles.tableData}>69 000</td>
            <td className={styles.tableData}>72 000</td>
          </tr>
          <tr>
            <td className={styles.tableData}>
              <span className={styles.carClass}>2 КЛАСС <br /></span> (BMW 3, MERCEDES)
            </td>
            <td className={styles.tableData}>53 000</td>
            <td className={styles.tableData}>64 000</td>
            <td className={styles.tableData}>69 000</td>
            <td className={styles.tableData}>72 000</td>
          </tr>
          <tr>
            <td className={styles.tableData}>
              <span className={styles.carClass}>4 КЛАСС <br /></span> (BMW 7, MERCEDES S)
            </td>
            <td className={styles.tableData}>53 000</td>
            <td className={styles.tableData}>64 000</td>
            <td className={styles.tableData}>69 000</td>
            <td className={styles.tableData}>72 000</td>
          </tr>
          <tr>
            <td className={styles.tableData}>
              <span className={styles.carClass}>5 КЛАСС <br /></span> (BMW X3, X4, MERCEDES)
            </td>
            <td className={styles.tableData}>53 000</td>
            <td className={styles.tableData}>64 000</td>
            <td className={styles.tableData}>69 000</td>
            <td className={styles.tableData}>72 000</td>
          </tr>
        </tbody>
      </table>
    </div>
        
      </div>






    </div>
  )
}

export default Servise
