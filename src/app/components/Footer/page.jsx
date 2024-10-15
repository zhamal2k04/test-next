import Image from "next/image"
import Link from "next/link"
import './footer.css'

const Footer = () => {
    return (
        <div className="footer-jobs" >
            <div className="our-jobs">
                <h1 style={{
                    fontSize: '52px',
                    textTransform: 'uppercase',
                    color: 'white',

                    fontFamily: 'monospace'
                }}>
                    Наши работы
                </h1>

                <div className="kub-container" style={{
                    justifyContent: 'center',
                    marginTop: '40px'
                }}>
                    <div className="kub"></div>
                    <div className="kub"></div>
                    <div className="kub"></div>
                    <div className="kub"></div>
                </div>

                <div className="our-jobs-cars">
                    <Image src="/section/uslugi/car1.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car3.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car5.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car7.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car9.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car2.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car4.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car6.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car8.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car1.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car3.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car5.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car7.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car9.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car2.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car4.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car6.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car8.jpg" width={320} height={280} />
                    <Image src="/section/uslugi/car1.jpg" width={320} height={280} />
                </div>

            </div>

            {/* ------registr-page------ */}

            <div className="registr-page">
                <h1 className="registr-h">
                    ответим на любой вопрос
                </h1>
                <div className="kub-container" style={{
                    justifyContent: 'center',
                    marginTop: '45px'
                }}>
                    <div className="kub"></div>
                    <div className="kub"></div>
                    <div className="kub"></div>
                    <div className="kub"></div>
                </div>


                <div className="name">
                    <input className="name-input" type="text" placeholder="ИМЯ" />
                    <input className="name-input" type="text" placeholder="ТЕЛЕФОН" />
                </div>


                <div className="registr-comments">
                    <textarea className="textarea" placeholder="Вопрос по дизайну, тюнингу и др."></textarea>
                    <div className="messenger">
                        <div className="telegram">
                            <Image src="/footer/telegram.png" width={20} height={20} />
                        </div>
                        <div className="telegram">
                            <Image src="/footer/youtube.png" width={20} height={20} />
                        </div>
                        <div className="telegram">
                            <Image src="/footer/vk.png" width={20} height={20} />
                        </div>
                    </div>
                </div>



                <div className="contact-page">
                    <button className="send-btn">
                        <h1>
                            отправить
                        </h1>
                    </button>

                    <div className="contact-info-registr">
                        <div className="location">
                            <Image src="/footer/location.png" width={24} height={24} />
                            <h1 className="location-text">
                                Eu faucibus et rutrum fringilla orci nunc
                            </h1>
                        </div>

                        <div className="call">
                            <Image src="/footer/call.png" width={24} height={24} />
                            <h1 className="call-text">
                                8 (812) 123-45-67                            </h1>

                            <Image style={{
                                marginLeft: '15px'
                            }} src="/footer/sms.png" width={24} height={20} />
                            <h1 className="call-text">
                                test@test.ru                            </h1>

                        </div>
                    </div>
                </div>

            </div>

            {/* ----footer-bottom---- */}

            <div className="footer-bottom">

                <div className="footer-bottom-left">
                    <h1>
                        2024 © Est et viverra pellentesque pharetra lorem proin in. Vitae magna at tempus commodo.
                    </h1>
                </div>

                <div className="footer-bottom-right">
                <ul style={{
            listStyle: 'none',
            display: 'flex',
            gap: '40px',
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center'

          }}>
            <li><Link href="">Главная</Link></li>
            <li><Link href="">Оклейка автомобилей</Link></li>
            <li><Link href="">Детейлинг автомобилей</Link></li>
            <li><Link href="">Галерея работ</Link></li>
          </ul>
                </div>

            </div>




        </div>
    )
}

export default Footer