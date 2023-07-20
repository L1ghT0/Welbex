import React from 'react';
import styles from './Welbex.module.scss'


const Welbex = () => {

    return (
        <div className={styles.welbex_wrapper}>
            <div className={styles.leftBlock}>
                <div>
                    <p>
                        Зарабатывайте <br/>
                        больше <br/>
                        <span>с WELBEX</span>
                    </p>
                </div>
                <p>
                    Развиваем и контролируем <br/>
                    продажи за вас
                </p>
            </div>
            <div className={styles.rightBlock}>
                <div className={styles.article}>
                    <p>Вместе с <span>БЕСПЛАТНОЙ<br/><span>КОНСУЛЬТАЦИЕЙ</span></span> мы дарим:</p>
                </div>
                <div className={styles.items}>
                    <div className={styles.item__widgets}>
                        <span className={styles.line}></span>
                        <span>ВИДЖЕТЫ</span>
                        <p>
                            30 готовых <br/>
                            решений
                        </p>
                    </div>
                    <div className={styles.item__dashboard}>
                        <span className={styles.line}></span>
                        <span>DASHBOARD</span>
                        <p>
                            с показателями <br/>
                            вашего бизнеса
                        </p>
                    </div>
                    <div className={styles.item__skype_audit}>
                        <span className={styles.line}></span>
                        <span>SKYPE АУДИТ</span>
                        <p>
                            отдела продаж <br/>
                            и CRM системы
                        </p>
                    </div>
                    <div className={styles.item__days_using_CRM}>
                        <span className={styles.line}></span>
                        <span>35 ДНЕЙ</span>
                        <p>
                            использования <br/>
                            CRM
                        </p>
                    </div>
                    <div className={styles.number_of_widgets}>
                        <span className={styles.line}></span>
                        <span>30 виджетов</span>
                        <p>

                        </p>
                    </div>
                    <div className={styles.month_of_amocrm}>
                        <span className={styles.line}></span>
                        <span>Месяц AMOCRM</span>
                        <p>

                        </p>
                    </div>
                </div>

            </div>
            <div className={styles.Bottom}>
                <a href="/">Получить консультацию</a>
            </div>
        </div>
    );
};

export default Welbex;