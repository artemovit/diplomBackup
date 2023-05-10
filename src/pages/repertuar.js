import React from 'react'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';




import testPhoto1 from '../resources/photos/5359.BigImg.jpg'
import testPhoto2 from '../resources/photos/6980.BigImg.jpg'
import testPhoto3 from '../resources/photos/abonement.jpg'
import MediaQuery from 'react-responsive';

const Item = styled(Paper)(({ theme }) => ({

    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    border: 'none',
    margin: '5px'
}));

const ItemSpect = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#EE3224',
    display: 'flex',
    justifyContent: 'center',
    border: 'none',
    margin: '37px'
})
)


export default function repertuar() {
    return (
        <div>

            <MediaQuery minWidth={1280}>
                <h1>Репертуар</h1>

                <Grid class="mouth_repertuar" container rowSpacing={1}>
                    <Item>Текущий репертуар</Item>
                    <Item>Детские спектакли</Item>
                </Grid>

                <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }}>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto1} />
                            <h3>Правда - хорошо, а счастье - лучше</h3>
                            <span class="author">Александр Островский</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Безумный день, или женитьба Фигаро</h3>
                            <span class="author">Пьер Бомарше</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <a href='repertuar.001'>
                                <img src={testPhoto3} />
                                <h3>Малыш и Карлсон</h3>
                                <span class="author">Астрид Линдгрен</span>
                                <p>Работает только это</p>
                            </a>
                        </div>
                    </ItemSpect>

                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto1} />
                            <h3>Правда - хорошо, а счастье - лучше</h3>
                            <span class="author">Александр Островский</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Безумный день, или женитьба Фигаро</h3>
                            <span class="author">Пьер Бомарше</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto3} />
                            <h3>Малыш и Карлсон</h3>
                            <span class="author">Астрид Линдгрен</span>
                        </div>
                    </ItemSpect>

                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto1} />
                            <h3>Правда - хорошо, а счастье - лучше</h3>
                            <span class="author">Александр Островский</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Безумный день, или женитьба Фигаро</h3>
                            <span class="author">Пьер Бомарше</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto3} />
                            <h3>Малыш и Карлсон</h3>
                            <span class="author">Астрид Линдгрен</span>
                        </div>
                    </ItemSpect>

                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto1} />
                            <h3>Правда - хорошо, а счастье - лучше</h3>
                            <span class="author">Александр Островский</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Безумный день, или женитьба Фигаро</h3>
                            <span class="author">Пьер Бомарше</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto3} />
                            <h3>Малыш и Карлсон</h3>
                            <span class="author">Астрид Линдгрен</span>
                        </div>
                    </ItemSpect>

                </Grid>
            </MediaQuery>

            {/* Мобильная версия */}

            <MediaQuery maxWidth={1279}>
                <h1 style={{ margin: '6%', fontSize: '40px' }}>Репертуар</h1>

                <Grid class="mouth_repertuar" container rowSpacing={1}>
                    <Item style={{ fontSize: '15px' }}>Текущий репертуар</Item>
                    <Item style={{ fontSize: '15px' }}> Детские спектакли</Item>
                </Grid>

                <Grid container sx={{ justifyContent: 'center', margin: '0px', border: 'none' }}>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto1} />
                            <h3>Правда - хорошо, а счастье - лучше</h3>
                            <span class="author">Александр Островский</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Безумный день, или женитьба Фигаро</h3>
                            <span class="author">Пьер Бомарше</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <a href='repertuar.001'>
                                <img src={testPhoto3} />
                                <h3>Малыш и Карлсон</h3>
                                <span class="author">Астрид Линдгрен</span>
                                <p>Работает только это</p>
                            </a>
                        </div>
                    </ItemSpect>

                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto1} />
                            <h3>Правда - хорошо, а счастье - лучше</h3>
                            <span class="author">Александр Островский</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Безумный день, или женитьба Фигаро</h3>
                            <span class="author">Пьер Бомарше</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto3} />
                            <h3>Малыш и Карлсон</h3>
                            <span class="author">Астрид Линдгрен</span>
                        </div>
                    </ItemSpect>

                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto1} />
                            <h3>Правда - хорошо, а счастье - лучше</h3>
                            <span class="author">Александр Островский</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Безумный день, или женитьба Фигаро</h3>
                            <span class="author">Пьер Бомарше</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto3} />
                            <h3>Малыш и Карлсон</h3>
                            <span class="author">Астрид Линдгрен</span>
                        </div>
                    </ItemSpect>

                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto1} />
                            <h3>Правда - хорошо, а счастье - лучше</h3>
                            <span class="author">Александр Островский</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto2} />
                            <h3>Безумный день, или женитьба Фигаро</h3>
                            <span class="author">Пьер Бомарше</span>
                        </div>
                    </ItemSpect>
                    <ItemSpect>
                        <div class="product-item">
                            <img src={testPhoto3} />
                            <h3>Малыш и Карлсон</h3>
                            <span class="author">Астрид Линдгрен</span>
                        </div>
                    </ItemSpect>

                </Grid>
            </MediaQuery>

        </div>

    )
}
