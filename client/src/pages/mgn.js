import React from 'react'
import photo from '../resources/images/mgn.png'
import MediaQuery from 'react-responsive'

export default function mgn() {
    return (
        <div>
            <MediaQuery minWidth={1280}>
                <h1>Для зрителей с ограниченными возможностями</h1>

                <div class="bio_acter" style={{ margin: '100px', marginBottom: '0', marginTop: '50px' }}>
                    Уважаемые зрители!       </div>
                <div class="bio_acter" style={{ margin: '100px', marginBottom: '0', marginTop: '50px' }}>
                    Мы рады приветствовать Вас в театре Комедии им. Н.П. Акимова. Обращаем Ваше внимание, что в силу архитектурных особенностей здания, к сожалению, мы не можем обеспечить пребывание на наших спектаклях зрителей с ограниченными возможностями здоровья в креслах-колясках.
                    Также не предусмотрены специальные условия для людей с нарушением слуха.
                    В случае, если Вам необходимо сопровождение в театре, просим Вас связаться с нашим администратором по телефону 314-26-10 и предупредить его о Вашем визите, чтобы мы могли оказать Вам всю необходимую помощь.      </div>
                <div class="bio_acter" style={{ margin: '100px', marginBottom: '0', marginTop: '50px' }}>
                    Адрес расположения театра: Санкт-Петербург, Невский проспект, 56<br />
                    Режим работы: с 10:00 до 22:00 ежедневно<br />
                    Ответственный за обеспечение доступности объекта: инженер по эксплуатации Петухов Юрий Васильевич 8 (812) 314-25-01<br />
                    Ответственный за оказание помощи при посещении: заместитель директора по работе со зрителями Селуков Алексей Григорьевич 8 (812) 314-52-64            </div>
                <div class="bio_acter" style={{ margin: '100px', marginTop: '50px' }}>
                    Обращаем Ваше внимание, что парковочных мест для автотранспорта маломобильных групп населения на территории театра нет. Ближайшие общедоступные парковочные места на Итальянской и Караванной улицах. <br />
                    Ближайшие остановки общественного транспорта: <br />
                    Местро - ст.м. "Гостиный двор" <br />
                    Автобусы №3, №22, №27, №7, №24, №191 остановка "Станция метро "Гостиный двор" и "Дворец творчества юных", № 49, №181 остановка "Невский проспект" <br />
                    Троллейбусы №5, №22, №1, №7, №10 остановка "Станция метро "Гостиный двор" и "Дворец творчества юных"             </div>
                <div class="bio_acter_photo" style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={photo} style={{ width: '1000px' }} />

                </div>
                <h1>Театр Комедии им. Н.П. Акимова находится по адресу: </h1>
                <div class="navAdress">

                    <h2 style={{ color: "#EE3224" }}>город Санкт-Петербург, Невский проспект, дом 56 191023</h2>
                    <div class="output">
                        <div style={{
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <a href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Санкт‑Петербург</a>
                            <a href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.335838%2C59.934241&mode=routes&rtext=59.933812%2C30.332447~59.934140%2C30.337858&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9805929~ymapsbm1%3A%2F%2Forg%3Foid%3D1047815977&utm_medium=mapframe&utm_source=maps&z=18.93"
                                style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>Яндекс Карты</a>
                            <iframe src="https://yandex.ru/map-widget/v1/?ll=30.335838%2C59.934241&mode=routes&rtext=59.933812%2C30.332447~59.934140%2C30.337858&rtt=pd&ruri=ymapsbm1%3A%2F%2Ftransit%2Fstop%3Fid%3Dstation__9805929~ymapsbm1%3A%2F%2Forg%3Foid%3D1047815977&z=18.93" width="560" height="400" frameborder="1" allowfullscreen="true" style={{ position: 'relative' }}></iframe>
                        </div>
                    </div>
                    <div class="cassa" style={{ textAlign: 'center' }}>
                        <h2>Режим работы кассы: <br />с 10:00 до 20:00</h2>
                        <h2>Предварительная продажа билетов до 18:00</h2>
                        <h2>С 18:00 до 19:00
                            продажа билетов только
                            на сегодняшний спектакль</h2>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={1279}>
                <h1 style={{margin: '6%', fontSize: '40px'}}>Для зрителей с ограниченными возможностями</h1>

                <div class="bio_acter" style={{ margin: '50px', marginBottom: '0', marginTop: '50px' }}>
                    Уважаемые зрители!       </div>
                <div class="bio_acter" style={{ margin: '50px', marginBottom: '0', marginTop: '50px' }}>
                    Мы рады приветствовать Вас в театре Комедии им. Н.П. Акимова. Обращаем Ваше внимание, что в силу архитектурных особенностей здания, к сожалению, мы не можем обеспечить пребывание на наших спектаклях зрителей с ограниченными возможностями здоровья в креслах-колясках.
                    Также не предусмотрены специальные условия для людей с нарушением слуха.
                    В случае, если Вам необходимо сопровождение в театре, просим Вас связаться с нашим администратором по телефону 314-26-10 и предупредить его о Вашем визите, чтобы мы могли оказать Вам всю необходимую помощь.      </div>
                <div class="bio_acter" style={{ margin: '50px', marginBottom: '0', marginTop: '50px' }}>
                    Адрес расположения театра: Санкт-Петербург, Невский проспект, 56<br />
                    Режим работы: с 10:00 до 22:00 ежедневно<br />
                    Ответственный за обеспечение доступности объекта: инженер по эксплуатации Петухов Юрий Васильевич 8 (812) 314-25-01<br />
                    Ответственный за оказание помощи при посещении: заместитель директора по работе со зрителями Селуков Алексей Григорьевич 8 (812) 314-52-64            </div>
                <div class="bio_acter" style={{ margin: '50px', marginTop: '50px' }}>
                    Обращаем Ваше внимание, что парковочных мест для автотранспорта маломобильных групп населения на территории театра нет. Ближайшие общедоступные парковочные места на Итальянской и Караванной улицах. <br />
                    Ближайшие остановки общественного транспорта: <br />
                    Местро - ст.м. "Гостиный двор" <br />
                    Автобусы №3, №22, №27, №7, №24, №191 остановка "Станция метро "Гостиный двор" и "Дворец творчества юных", № 49, №181 остановка "Невский проспект" <br />
                    Троллейбусы №5, №22, №1, №7, №10 остановка "Станция метро "Гостиный двор" и "Дворец творчества юных"             </div>
                <div class="bio_acter_photo" style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={photo} style={{ width: '300px' }} />

                </div>
            </MediaQuery>
        </div>



    )
}