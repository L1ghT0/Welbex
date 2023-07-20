import React from 'react';
import styles from './Footer.module.scss'
import telegram from "../../assets/images/svg/telegram.svg";
import viber from "../../assets/images/svg/viber.svg";
import whatsapp from "../../assets/images/svg/whatsapp.svg";

const Footer = () => {
    return (
        <div className={styles.footer_wrapper}>
            <footer className={styles.footer}>
                <div className={styles.about}>
                    <div className={styles.acticle}>О КОМПАНИИ</div>
                    <a href='/'>Партнёрская программа </a>
                    <a href='/'>Вакансии</a>
                </div>
                <div className={styles.menu}>
                    <div className={styles.acticle}>МЕНЮ</div>
                    <ul>
                        <li><a href="">Расчёт стоимости</a></li>
                        <li><a href="">Услуги</a></li>
                        <li><a href="">Виджеты</a></li>
                        <li><a href="">Интеграции</a></li>
                        <li><a href="">Наши клиенты</a></li>
                        <li><a href="">Благодарность клиентов</a></li>
                        <li><a href="">Кейсы</a></li>
                        <li><a href="">Благодарственные письма</a></li>
                        <li><a href="">Сертификаты</a></li>
                        <li><a href="">Блог на Youtube</a></li>
                        <li><a href="">Вопрос / Ответ</a></li>
                    </ul>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.acticle}>КОНТАКТЫ</div>
                    <span className={styles.phone_number}>+7 555 555-55-55</span>
                    <div>
                        <a className={styles.telegram} href=""><img src={telegram} alt="telegram"/></a>
                        <a className={styles.viber} href=""><img src={viber} alt="viber"/></a>
                        <a className={styles.whatsapp} href=""><img src={whatsapp} alt="whatsapp"/></a>
                    </div>
                    <span className={styles.address}>Москва, Путевой проезд 3с1, к 902</span>
                </div>
                <div className={styles.privacy_policy}>
                    <span>©WELBEX 2022. Все права защищены.</span>
                    <span><a href="">Политика конфиденциальности</a></span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;