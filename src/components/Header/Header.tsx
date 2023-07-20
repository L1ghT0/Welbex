import React from 'react';
import styles from './Header.module.scss'
import logoPart1 from './../../assets/images/svg/part1.svg'
import logoPart2 from './../../assets/images/svg/part2.svg'
import telegram from './../../assets/images/svg/telegram.svg'
import viber from './../../assets/images/svg/viber.svg'
import whatsapp from './../../assets/images/svg/whatsapp.svg'

interface HeaderPropsType {

}

const Header: React.FC<HeaderPropsType> = (props) => {


    return (
        <div className={styles.header_wrapper}>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <div>
                        <img className={styles.logoPart1} src={logoPart1} alt="logo"/>
                        <img className={styles.logoPart2} src={logoPart2} alt="logo"/>
                    </div>
                    <div>
                        <p>
                            крупный интегратор CRM <br/>
                            в Росcии и ещё 8 странах
                        </p>
                    </div>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li>Услуги</li>
                        <li>Виджеты</li>
                        <li>Интеграции</li>
                        <li>Кейсы</li>
                        <li>Сертификаты</li>
                    </ul>
                </nav>
                <div className={styles.contacts}>
                    <span>+7 555 555-55-55</span>
                    <div>

                        <img className={styles.telegram} src={telegram} alt="telegram"/>
                        <img className={styles.viber} src={viber} alt="viber"/>
                        <img className={styles.whatsapp} src={whatsapp} alt="whatsapp"/>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;