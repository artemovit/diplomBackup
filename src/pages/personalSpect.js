import React from 'react'
import testPhoto1 from '../resources/photos/abonement.jpg'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import MediaQuery from 'react-responsive';
import testPhoto2 from '../resources/photos/artists/Lazarev.jpg'



import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';



const ItemAfisha = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    border: 'none',
    margin: '10px'
}))

const ItemArtist = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    border: 'none',
    margin: '37px'
})
)

export default function personalSpect() {
    return (
        <div>
            <MediaQuery minWidth={1280}>
                <div class="spect">

                    <img src={testPhoto1} />


                    <div>
                        <h1>Малыш и Карлсон</h1>
                        <h2>Астрид Линдгрен</h2>

                        <h3>Пролжительность:</h3>
                        <p>2:00</p>

                        <h3>Ближайшие спектакли: </h3>
                        <Grid container sx={{ justifyContent: 'center' }}>
                            <ItemAfisha>
                                <div class="afisha_mouth">
                                    <div class="afisha_item"><span class="day_afisha">28</span>ноября</div>
                                    <div class="afisha_item">19:00</div>
                                    {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                    <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                </div>
                            </ItemAfisha>
                            <ItemAfisha>
                                <div class="afisha_mouth">
                                    <div class="afisha_item"><span class="day_afisha">28</span>ноября</div>
                                    <div class="afisha_item">19:00</div>
                                    {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                    <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                </div>
                            </ItemAfisha>
                            <ItemAfisha>
                                <div class="afisha_mouth">
                                    <div class="afisha_item"><span class="day_afisha">28</span>ноября</div>
                                    <div class="afisha_item">19:00</div>
                                    {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                    <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                </div>
                            </ItemAfisha>
                            <ItemAfisha>
                                <div class="afisha_mouth">
                                    <div class="afisha_item"><span class="day_afisha">28</span>ноября</div>
                                    <div class="afisha_item">19:00</div>
                                    {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                    <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                </div>
                            </ItemAfisha>
                        </Grid>



                    </div>



                </div>
                <div class="spect_discrp">
                    <h2 >Описание</h2>
                    История всем знакома. На самой обыкновенной улице, в самом обыкновенном доме живёт самая обыкновенная семья: папа, мама и трое ребят, один из которых Малыш.
                    На крыше неожиданно появляется один совершенно необыкновенный обитатель, маленький толстенький самоуверенный человечек Карлсон, который умеет летать. И с тех пор у Малыша появляется лучший друг, да ещё и волшебный. И всё в доме встаёт с ног на голову: «летающие коровы» воруют у Фрекен Бок сумки и плюшки, а мыльные пузыри превращаются в звезды.
                    <br />
                    Всемирно известная шведская сказочница, автор книг «Пеппи Длинныйчулок», «Мио, мой Мио», «Приключения Эмиля из Леннеберги», «Рони, дочь разбойника» и многих других, которые и по сей день остаются бестселлерами. Убежденный гуманист, она боролась за права детей, равенство, экологию, права животных, и совершила революционный переворот в детской литературе.
                    Астрид Анна Эмилия Эриксон родилась 14 ноября 1907 года на хуторе Нэс в графстве Смоланд, в лютеранской семье. Счастливое детство послужило главным источником вдохновения для творчества. В 16 лет она коротко подстриглась, надела мужской костюм, уехала от родителей и устроилась стажером в газете. Рано родив сына, она вынуждена была оставить его на несколько лет в приюте. Разлука с ребенком и тема одиночества красной нитью проходят через все ее творчество. Писательская карьера Линдгрен началась в 1944 году, когда вышел ее дебютный роман «Откровения Бритт-Мари». 24 года Линдгрен возглавляла отдел детской литературы в издательстве Rabén & Sjögren publishers и была одним из наиболее опытных издателей Швеции.
                    Самые известные книги она написала в 1950–60-е годы. Среди них и трилогия о Карлсоне: «Малыш и Карлсон, который живет на крыше», «Карлсон, который живет на крыше, опять прилетел» и «Карлсон, который живет на крыше, проказничает опять». По одной версии, прототипом Карлсона был некий Мистер О'Мэлли из популярных в те годы комиксов: маленький человечек с розовыми стрекозьими крыльями из Общества эльфов, лепреконов и гномов. По другой, он напоминал господина Лильонкваста, ангела смерти из рассказа Линдгрен «В Сумеречной стране».
                    Линдгрен умерла 28 января 2002 года дома в Стокгольме. Книги ее переведены более чем на 100 языков. Если весь тираж собрать в вертикальную стопку, то она окажется выше Эйфелевой башни в 175 раз. Линдгрен окрестили «Человеком столетия» и при жизни воздвигли памятник в центре Стокгольма, а российские ученые назвали в ее честь астероид.
                </div>
                <div class="spect_photo">
                    <h2>Фото с спектакля</h2>
                </div>
                <div class="spect_artist">
                    <h2>Действующие лица</h2>
                    <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }}>

                        <ItemArtist>
                            <a href='artists.001'>
                                <div class="product-item">
                                    <img src={testPhoto2} />
                                    <h3>Юрий Лазарев</h3>
                                    <p>Роль</p>
                                </div>
                            </a>
                        </ItemArtist>

                        <ItemArtist>
                            <div class="product-item">
                                <img src={testPhoto2} />
                                <h3>Юрий Лазарев</h3>
                                <p>Роль</p>
                            </div>
                        </ItemArtist>

                        <ItemArtist>
                            <div class="product-item">
                                <img src={testPhoto2} />
                                <h3>Юрий Лазарев</h3>
                                <p>Роль</p>
                            </div>
                        </ItemArtist>

                        <ItemArtist>
                            <div class="product-item">
                                <img src={testPhoto2} />
                                <h3>Юрий Лазарев</h3>
                                <p>Роль</p>
                            </div>
                        </ItemArtist>
                    </Grid>
                </div>
            </MediaQuery>

            <MediaQuery maxWidth={1279}>
                
                    <div class = "photo_spect" style={{display: 'flex', justifyContent: 'center', margin: '30px', marginBottom: '0px'}}>
                    <img src={testPhoto1}/>
                    </div>
                    <div class="spect" style={{margin: '40px', marginTop: '0px'}}>
                    <div>
                        <h1 style={{fontSize: '40px'}}>Малыш и Карлсон</h1>
                        <h2>Астрид Линдгрен</h2>

                        <h3>Пролжительность:</h3>
                        <p>2:00</p>

                        <h3>Ближайшие спектакли: </h3>
                        <Grid container sx={{ justifyContent: 'center' }}>
                            <ItemAfisha>
                                <div class="afisha_mouth">
                                    <div class="afisha_item"><span class="day_afisha">28</span>ноября</div>
                                    <div class="afisha_item">19:00</div>
                                    {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                    <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                </div>
                            </ItemAfisha>
                            <ItemAfisha>
                                <div class="afisha_mouth">
                                    <div class="afisha_item"><span class="day_afisha">28</span>ноября</div>
                                    <div class="afisha_item">19:00</div>
                                    {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                    <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                </div>
                            </ItemAfisha>
                            <ItemAfisha>
                                <div class="afisha_mouth">
                                    <div class="afisha_item"><span class="day_afisha">28</span>ноября</div>
                                    <div class="afisha_item">19:00</div>
                                    {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                    <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                </div>
                            </ItemAfisha>
                            <ItemAfisha>
                                <div class="afisha_mouth">
                                    <div class="afisha_item"><span class="day_afisha">28</span>ноября</div>
                                    <div class="afisha_item">19:00</div>
                                    {/* <div class="afisha_item"><img src={Pushka} /></div> */}
                                    <div class="afisha_item"><Button class="buy_button">В избранное</Button></div>
                                </div>
                            </ItemAfisha>
                        </Grid>



                    </div>



                </div>
                <div class="spect_discrp" style={{margin: '30px'}}>
                    <h2 >Описание</h2>
                    История всем знакома. На самой обыкновенной улице, в самом обыкновенном доме живёт самая обыкновенная семья: папа, мама и трое ребят, один из которых Малыш.
                    На крыше неожиданно появляется один совершенно необыкновенный обитатель, маленький толстенький самоуверенный человечек Карлсон, который умеет летать. И с тех пор у Малыша появляется лучший друг, да ещё и волшебный. И всё в доме встаёт с ног на голову: «летающие коровы» воруют у Фрекен Бок сумки и плюшки, а мыльные пузыри превращаются в звезды.
                    <br />
                    Всемирно известная шведская сказочница, автор книг «Пеппи Длинныйчулок», «Мио, мой Мио», «Приключения Эмиля из Леннеберги», «Рони, дочь разбойника» и многих других, которые и по сей день остаются бестселлерами. Убежденный гуманист, она боролась за права детей, равенство, экологию, права животных, и совершила революционный переворот в детской литературе.
                    Астрид Анна Эмилия Эриксон родилась 14 ноября 1907 года на хуторе Нэс в графстве Смоланд, в лютеранской семье. Счастливое детство послужило главным источником вдохновения для творчества. В 16 лет она коротко подстриглась, надела мужской костюм, уехала от родителей и устроилась стажером в газете. Рано родив сына, она вынуждена была оставить его на несколько лет в приюте. Разлука с ребенком и тема одиночества красной нитью проходят через все ее творчество. Писательская карьера Линдгрен началась в 1944 году, когда вышел ее дебютный роман «Откровения Бритт-Мари». 24 года Линдгрен возглавляла отдел детской литературы в издательстве Rabén & Sjögren publishers и была одним из наиболее опытных издателей Швеции.
                    Самые известные книги она написала в 1950–60-е годы. Среди них и трилогия о Карлсоне: «Малыш и Карлсон, который живет на крыше», «Карлсон, который живет на крыше, опять прилетел» и «Карлсон, который живет на крыше, проказничает опять». По одной версии, прототипом Карлсона был некий Мистер О'Мэлли из популярных в те годы комиксов: маленький человечек с розовыми стрекозьими крыльями из Общества эльфов, лепреконов и гномов. По другой, он напоминал господина Лильонкваста, ангела смерти из рассказа Линдгрен «В Сумеречной стране».
                    Линдгрен умерла 28 января 2002 года дома в Стокгольме. Книги ее переведены более чем на 100 языков. Если весь тираж собрать в вертикальную стопку, то она окажется выше Эйфелевой башни в 175 раз. Линдгрен окрестили «Человеком столетия» и при жизни воздвигли памятник в центре Стокгольма, а российские ученые назвали в ее честь астероид.
                </div>
                <div class="spect_photo">
                    <h2>Фото с спектакля</h2>
                </div>
                <div class="spect_artist">
                    <h2>Действующие лица</h2>
                    <Grid container sx={{ justifyContent: 'center'}}>

                        <ItemArtist>
                            <a href='artists.001'>
                                <div class="product-item">
                                    <img src={testPhoto2} />
                                    <h3>Юрий Лазарев</h3>
                                    <p>Роль</p>
                                </div>
                            </a>
                        </ItemArtist>

                        <ItemArtist>
                            <div class="product-item">
                                <img src={testPhoto2} />
                                <h3>Юрий Лазарев</h3>
                                <p>Роль</p>
                            </div>
                        </ItemArtist>

                        <ItemArtist>
                            <div class="product-item">
                                <img src={testPhoto2} />
                                <h3>Юрий Лазарев</h3>
                                <p>Роль</p>
                            </div>
                        </ItemArtist>

                        <ItemArtist>
                            <div class="product-item">
                                <img src={testPhoto2} />
                                <h3>Юрий Лазарев</h3>
                                <p>Роль</p>
                            </div>
                        </ItemArtist>
                    </Grid>
                </div>
            </MediaQuery>
        </div>
    )
}
