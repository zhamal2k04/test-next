import React from 'react'
import './tablitsa.css'

const Tablitsa = () => {
    return (
        <div className='tablitsa'>
            <h1 className='tablitsa-h'>Таблица</h1>
            <div className='category-1'>
                <h1 className='category-h'>авто / Материал</h1>
                <h1 className='category-h'>Пленка Spectroll</h1>
                <h1 className='category-h'>Пленка Hexis</h1>
                <h1 className='category-h'>Пленка SunTek</h1>
                <h1 className='category-h'>Пленка LLumar</h1>
            </div>

            <div className='category-2'>
                <h1 className='category-h2' style={{
                    color: '#DB3138',
                    fontSize: '20px',
                    marginLeft: '40px',
                }}>1 класс <br /> (Mini cooper, Fiat 500)</h1>
                <h1 className='category-h2' style={{
                    width: "200px",
                    color: 'gray',
                    marginLeft: "80px",
                }}>53 000 ₽</h1>
                <h1 className='category-h2' style={{
                    width: "200px",
                    color: 'gray',
                    marginLeft: "100px",
                }}>64 000 ₽</h1>
                <h1 className='category-h2' style={{
                    width: "200px",
                    color: 'gray',
                    marginLeft: "80px",
                }}>64 000 ₽</h1>
                <h1 className='category-h2' style={{
                    width: "200px",
                    color: 'gray',
                    marginLeft: "80px"
                }}>72 000 ₽</h1>
            </div>

            <h1 className='tablitsa-h' style={{
                marginTop: '200px'
            }}>Таблица</h1>
        </div>
    )
}

export default Tablitsa