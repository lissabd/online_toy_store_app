import React from 'react';
import { Link } from 'react-router-dom';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer-main">
      <div className="footer-grid">
        <section className="footer-1">
          <img src="./images/header-icon.png" alt="Логотип сайта в подвале" />
          <p className="in-footer">Мы продаем высококачественные игрушки для детей любого возраста. Осчастливьте своих детей
с нашей помощью. Приобретайте интересные игрушки 
          </p>
        </section>
        <section className="footer-2">
          <p><strong>Информация</strong></p>
          <ul className="links">
          <Link to="/about"><li><a>О нас</a></li></Link>
          <Link to="/about"> <li><a>Связаться</a></li></Link>
          <Link to="/"> <li><a >Главная</a></li></Link>
          <Link to="/login">  <li><a>Зарегистрироваться</a></li></Link>
          </ul>
        </section>
        <section className="footer-3">
          <p><strong>Почему именно мы</strong></p>
          <ul className="links-for-third">
          <Link to="/cart">  <li><a >Быстрый заказ</a></li></Link>
          <Link to="/shop"> <li><a >Удобный каталог</a></li></Link>
          <Link to="/shop">  <li><a >Ассортимент</a></li></Link>
          <Link to="/login"> <li><a >Отзывы</a></li></Link>
          </ul>
        </section>
        <section className="footer-4">
          <p><strong>Поддерживать связь</strong></p>
          <div className="email-input-container">
            <input type="email" className="email-input" placeholder="Введите почту..." />
          </div>    
          <div>
            <p>Информация о разработчике</p>
            <p> Абдеева А.Р. ИКБО-16-22</p>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;