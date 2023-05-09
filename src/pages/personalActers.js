import React from 'react'

import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import testPhoto2 from '../resources/photos/artists/Lazarev.jpg'
import testPhoto1 from '../resources/photos/5359.BigImg.jpg'
import testPhoto3 from '../resources/photos/abonement.jpg'

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

export default function personalActers() {
    return (
        <div>
            <h1>Юрий Лазарев</h1>
            <div class="bio_acter">
                <div>
                    Юрий Сергеевич окончил Ленинградский институт театра, музыки и кинематографии в 1969 г. Работал после окончания вуза в Рижском русском театре, в Театре на Литейном. С 1975 г. Юрий Сергеевич служит в Театре Комедии.
                    Диапазон актерских возможностей Юрия Сергеевича Лазарева очень широк, от фарса до высокой трагедии. В своей работе актер стремиться к психологической проработанности каждой роли. На сцене он создает выразительные образы, которые надолго остаются в памяти зрителей.
                    Больше чем за 40 лет работы в Театре Комедии Юрий Сергеевич сыграл более пятидесяти ролей современного и классического репертуара. Вот лишь некоторые из них: Шарль в «Силуэтах Парижа» А. Руссена, Дон Жуан в «Продолжении Дон Жуана» Э. Радзинского, Глумов в «Бешеных деньгах» А Островского, Мальволио в «Двенадцатой ночи» В.Шекспира, Теодорикс в «Ромуле Великом» Ф.Дюрренматта, Ахов в «Не все коту масленница» А. Островского.
                    Склонность Юрия Сергеевича к яркой характерности, отсутствие в его игре плоскости и плакатности, умение работать в жанре сатиры, доводя образ героя до художественного обобщения, всегда были востребованы работавшими в Театре Комедии режиссерами.
                    Сегодня Юрий Сергеевич Лазарев занят в спектаклях «Дракон» и «Тень» Е.Шварца, «Сплошные неприятности» М. Химена и А. Левина, «Хитрая вдова» К. Гольдони, «Визит дамы» Ф. Дюрренматта, «Правда-хорошо, а счастье лучше» А. Островского и в спектакле «Сказки старого Арбата» А. Арбузова.

                    Юрий Сергеевич работает не только в Театре Комедии, он активно снимается в кино, участвует в спектаклях других петербургских театров. Помимо активной творческой деятельности Юрий Сергеевич занят педагогической работой. В разное время он преподавал актерское мастерство на курсах в ГИТИСе, при театре «На Неве», в Балтийском институте экологии, политики и права.
                </div>
                <div class="bio_acter_photo">
                    <img src={testPhoto2} />
                </div>



            </div>

            <h2 style={{ textAlign: 'center' }}>Роли в спектаклях</h2>

            <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }}>
                <ItemSpect>
                    <div class="product-item">
                        <img src={testPhoto1} />
                        <h3>Правда - хорошо, а счастье - лучше</h3>
                        <span class="author">Роль</span>
                    </div>
                </ItemSpect>
                <ItemSpect>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Безумный день, или женитьба Фигаро</h3>
                        <span class="author">Роль</span>
                    </div>
                </ItemSpect>
                <ItemSpect>
                    <div class="product-item">
                        <img src={testPhoto3} />
                        <h3>Малыш и Карлсон</h3>
                        <span class="author">Роль</span>
                    </div>
                </ItemSpect>

                <ItemSpect>
                    <div class="product-item">
                        <img src={testPhoto1} />
                        <h3>Правда - хорошо, а счастье - лучше</h3>
                        <span class="author">Роль</span>
                    </div>
                </ItemSpect>
                <ItemSpect>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Безумный день, или женитьба Фигаро</h3>
                        <span class="author">Роль</span>
                    </div>
                </ItemSpect>
                <ItemSpect>
                    <div class="product-item">
                        <img src={testPhoto3} />
                        <h3>Малыш и Карлсон</h3>
                        <span class="author">Роль</span>
                    </div>
                </ItemSpect>

                <ItemSpect>
                    <div class="product-item">
                        <img src={testPhoto1} />
                        <h3>Правда - хорошо, а счастье - лучше</h3>
                        <span class="author">Роль</span>
                    </div>
                </ItemSpect>
                <ItemSpect>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Безумный день, или женитьба Фигаро</h3>
                        <span class="author">Роль</span>
                    </div>
                </ItemSpect>
                <ItemSpect>
                    <div class="product-item">
                        <img src={testPhoto3} />
                        <h3>Малыш и Карлсон</h3>
                        <span class="author">Роль</span>
                    </div>
                </ItemSpect>

                <ItemSpect>
                    <div class="product-item">
                        <img src={testPhoto1} />
                        <h3>Правда - хорошо, а счастье - лучше</h3>
                        <span class="author">Роль</span>
                    </div>
                </ItemSpect>
                <ItemSpect>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Безумный день, или женитьба Фигаро</h3>
                        <span class="author">Роль</span>
                    </div>
                </ItemSpect>
                <ItemSpect>
                    <div class="product-item">
                        <img src={testPhoto3} />
                        <h3>Малыш и Карлсон</h3>
                        <span class="author">Роль</span>
                    </div>
                </ItemSpect>

            </Grid>

        </div>
    )
}
