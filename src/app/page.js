import Image from "next/image";
import styles from "./styles/page.module.css";


export default function Home() {
  return (
    <div className="home-container">

      <div className="dostojeniya">
        <div className="dostojeniya-text">

          <h1 style={{
            fontSize: '52px',
            color: 'white',
            width: '745px',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
          }}>наши достижения от кубка россии до чемпионатов мира</h1>

          <div className="kub-container" style={{
            justifyContent: 'start',
            marginTop: '65px'
          }}>
            <div className="kub"></div>
            <div className="kub"></div>
            <div className="kub"></div>
            <div className="kub"></div>
          </div>

          <p style={{
            color: 'white',
            width: '700px',
            fontFamily: 'sans-serif',
            marginTop: '60px'
          }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat.
          </p>

        </div>

        <div className="table-one">
          <div className="table-inner">
            <h1 style={{
              color: '#DB3138',
              fontSize: '24px',
              fontFamily: 'serif',
            }}>#1</h1>

            <p style={{
              color: 'white',
              fontSize: '16px',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            </p>
          </div>
          <div className="table-inner">
            <h1 style={{
              color: '#DB3138',
              fontSize: '24px',
              fontFamily: 'serif',
            }}>#1</h1>

            <p style={{
              color: 'white',
              fontSize: '16px',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            </p>
          </div>
          <div className="table-inner">
            <h1 style={{
              color: '#DB3138',
              fontSize: '24px',
              fontFamily: 'serif',
            }}>#1</h1>

            <p style={{
              color: 'white',
              fontSize: '16px',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            </p>
          </div>
          <div className="table-inner">
            <h1 style={{
              color: '#DB3138',
              fontSize: '24px',
              fontFamily: 'serif',
            }}>#1</h1>

            <p style={{
              color: 'white',
              fontSize: '16px',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            </p>
          </div>


        </div>

        <div style={{
          marginTop: '40px',
        }} className="table-one">
          <div className="table-inner">
            <h1 style={{
              color: '#DB3138',
              fontSize: '24px',
              fontFamily: 'serif',
            }}>#1</h1>

            <p style={{
              color: 'white',
              fontSize: '16px',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            </p>
          </div>
          <div className="table-inner">
            <h1 style={{
              color: '#DB3138',
              fontSize: '24px',
              fontFamily: 'serif',
            }}>#1</h1>

            <p style={{
              color: 'white',
              fontSize: '16px',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            </p>
          </div>
          <div className="table-inner">
            <h1 style={{
              color: '#DB3138',
              fontSize: '24px',
              fontFamily: 'serif',
            }}>#1</h1>

            <p style={{
              color: 'white',
              fontSize: '16px',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            </p>
          </div>
          <div className="table-inner">
            <h1 style={{
              color: '#DB3138',
              fontSize: '24px',
              fontFamily: 'serif',
            }}>#1</h1>

            <p style={{
              color: 'white',
              fontSize: '16px',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            </p>
          </div>



        </div>



      </div>

      {/* -------car gallery------- */}

      <div className="car-gallery">
        <div className="car-inner">
          <Image
            src="/section/cargallery/cars1.jpg"
            alt="Car 1"
            width={416}
            height={350}
          />

          <button className="car-btn">
            <h1 className="cars-info" style={{
              fontSize: '18px',
              color: 'white',
              fontFamily: 'initial',
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.</h1>
          </button>

        </div>

        <div className="car-inner">
          <Image
            src="/section/cargallery/cars2.jpg"
            alt="Car 1"
            width={416}
            height={350}
          />

          <button className="car-btn">
            <h1 className="cars-info" style={{
              fontSize: '18px',
              color: 'white',
              fontFamily: 'initial',
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.</h1>
          </button>

        </div>

        <div className="car-inner">
          <Image
            src="/section/cargallery/cars3.jpg"
            alt="Car 1"
            width={416}
            height={350}
          />

          <button className="car-btn">
            <h1 className="cars-info" style={{
              fontSize: '18px',
              color: 'white',
              fontFamily: 'initial',
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.</h1>
          </button>

        </div>




      </div>

      {/* ------material------ */}

      <div className="material">

        <div className="left-material">
          <div className="left-container">
            <h1 className="material-text-h1">материалы от лучших компаний</h1>
            <p className="material-text-p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium</p>
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
            <h1 className="material-text-h2">Опытные мастера</h1>
            <p className="material-text-p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et donec elementum egestas vitae ullamcorper. Amet volutpat ornare pharetra amet adipiscing orci, lectus aenean ultricies. Erat viverra eget blandit ornare. Molestie ipsum commodo faucibus rhoncus              </p>
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
            <h1 className="material-text-h3">Гарантия на все виды работы</h1>
            <p className="material-text-p3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat.              </p>
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

      {/* -----nash uslugi---- */}

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

        <div className="uslugi-btn">
          <button className="uslugi-btn1">
            <h1 className="uslugi-h">Оклейка</h1>
          </button>
          <button className="uslugi-btn2">
            <h1 className="uslugi-h">Детейлинг</h1>
          </button>
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
            <button className="uslugi-card-btn">
              <h1 style={{
                fontSize: '18px',
                color: 'white',
                fontFamily: 'Arial, Helvetica, sans-serif',
                padding: '8px 10px',
                textTransform: 'uppercase',
              }}>Подробнее</h1>
            </button>
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
            <button className="uslugi-card-btn">
              <h1 style={{
                fontSize: '18px',
                color: 'white',
                fontFamily: 'Arial, Helvetica, sans-serif',
                padding: '8px 10px',
                textTransform: 'uppercase',
              }}>Подробнее</h1>
            </button>
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
            <button className="uslugi-card-btn">
              <h1 style={{
                fontSize: '18px',
                color: 'white',
                fontFamily: 'Arial, Helvetica, sans-serif',
                padding: '8px 10px',
                textTransform: 'uppercase',
              }}>Подробнее</h1>
            </button>
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
            <button className="uslugi-card-btn">
              <h1 style={{
                fontSize: '18px',
                color: 'white',
                fontFamily: 'Arial, Helvetica, sans-serif',
                padding: '8px 10px',
                textTransform: 'uppercase',
              }}>Подробнее</h1>
            </button>
          </div>


        </div>


      </div>

      {/* ----syron------ */}

      <div className="syron">

        <div className="syron-left">
          <Image
            src="/section/uslugi/car1.jpg"
            alt="Car 1"
            width={636}
            height={550}
          />
          <h1 style={{
            fontSize: '18px',
            textTransform: 'uppercase',
            color: 'white',
            width: '500px',
            fontFamily: 'monospace'
          }}>
            Neque metus vitae urna purus aliquam. Felis nullam pellentesque ac mi commodo, amet, porta in. Dui.
          </h1>
        </div>

        <div className="syron-right">
          <div className="left-container">
            <h1 className="material-text-h1">материалы от лучших компаний</h1>
            <p className="material-text-p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium</p>
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
            <h1 className="material-text-h2">Опытные мастера</h1>
            <p className="material-text-p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et donec elementum egestas vitae ullamcorper. Amet volutpat ornare pharetra amet adipiscing orci, lectus aenean ultricies. Erat viverra eget blandit ornare. Molestie ipsum commodo faucibus rhoncus              </p>
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
            <h1 className="material-text-h3">Гарантия на все виды работы</h1>
            <p className="material-text-p3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat.              </p>
          </div>
        </div>

      </div>

      {/* ------our-jobs---- */}

 

    </div>
  );
}
