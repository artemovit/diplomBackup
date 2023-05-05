import React from 'react'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import testPhoto2 from '../../resources/photos/akimov stars/zarubina.jpg'

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

export default function akimovStars() {
  return (
    <div>
      <h1>Звёзды Акимовской сцены</h1>

      <div class="textHistory">
        С конца 1930-х годов театральная публика стала называть Ленинградский театр комедии театром Акимова. «Акимовским» театр продолжал оставаться и после смерти своего главного режиссера в 1968 году. И это неслучайно: репертуар, состав труппы, стиль спектаклей, манера актерской игры, взаимоотношения со зрительным залом – все это было сформировано непосредственно Николаем Павловичем. Его личность определяла лицо театра, делала Театр комедии заметным и узнаваемым в ряду других театральных коллективов.

        <br />
        <br />
        В это же время язык театральной критики стал использовать такие определения, как «акимовский» спектакль и «акимовский» актер, что предполагало некое отличие, особый подход к раскрытию темы и образа. Театр Акимова воспринимался как театр-праздник, мир красоты, куда не проникала обыденная жизнь с ее безόбразностью и замкнутостью.
        <br />
        <br />
        «Акимовскими», прежде всего, называли актеров, пришедших в театр вместе с Николаем Павловичем – Е. В. Юнгер, И. П. Гошеву, И. П. Зарубину, А. Д. Бениаминова, С. Н. Филиппова, А. В. Савостьянова, И. А. Ханзеля. Позже к ним добавились имена В. А. Карповой, Л. А. Люлько, Г. И. Воропаева, Л. М. Милиндера, С.А. Карпинской, В. Н. Труханова, В. Н. Никитенко – тех, кто подхватил эстафету в 1950–60-е годы. Эти актеры считались «акимовскими» и тогда, когда работали с другими режиссерами и выступали в спектаклях, созданных по иным эстетическим параметрам (недаром Л. М. Милиндера, ушедшего из жизни в 2005 году, провожали как «последнего акимовского гвардейца»).
        <br />
        <br />
        Ленинградский театр комедии был вызовом натурализму, который воцарился на сценах под лозунгом «равнение на МХАТ». Акимовские постановки переливались яркими красками, возвращали сцене, по словам одного из критиков, «не новое, но почти забытое качество – игру, в которой грация и шутка, изящество и юмор, ирония и непринужденность образуют пестрый и веселый хоровод». «Акимовские» актеры играли азартно, остро и в то же время изысканно-иронично, завоевав зрительскую любовь на долгие годы.
      </div>

      <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }}>
        <ItemArtist>
          <div class="product-item">
            <img src={testPhoto2} />
            <h3>Ирина Зарубина</h3>
            <span>1907-1976</span>
          </div>
        </ItemArtist>
        <ItemArtist>
          <div class="product-item">
            <img src={testPhoto2} />
            <h3>Ирина Зарубина</h3>
            <span>1907-1976</span>
          </div>
        </ItemArtist>
        <ItemArtist>
          <div class="product-item">
            <img src={testPhoto2} />
            <h3>Ирина Зарубина</h3>
            <span>1907-1976</span>
          </div>
        </ItemArtist>
        <ItemArtist>
          <div class="product-item">
            <img src={testPhoto2} />
            <h3>Ирина Зарубина</h3>
            <span>1907-1976</span>
          </div>
        </ItemArtist>
        <ItemArtist>
          <div class="product-item">
            <img src={testPhoto2} />
            <h3>Ирина Зарубина</h3>
            <span>1907-1976</span>
          </div>
        </ItemArtist>
        <ItemArtist>
          <div class="product-item">
            <img src={testPhoto2} />
            <h3>Ирина Зарубина</h3>
            <span>1907-1976</span>
          </div>
        </ItemArtist>
        <ItemArtist>
          <div class="product-item">
            <img src={testPhoto2} />
            <h3>Ирина Зарубина</h3>
            <span>1907-1976</span>
          </div>
        </ItemArtist>

        <ItemArtist>
          <div class="product-item">
            <img src={testPhoto2} />
            <h3>Ирина Зарубина</h3>
            <span>1907-1976</span>
          </div>
        </ItemArtist>
        <ItemArtist>
          <div class="product-item">
            <img src={testPhoto2} />
            <h3>Ирина Зарубина</h3>
            <span>1907-1976</span>
          </div>
        </ItemArtist>

        <ItemArtist>
          <div class="product-item">
            <img src={testPhoto2} />
            <h3>Ирина Зарубина</h3>
            <span>1907-1976</span>
          </div>
        </ItemArtist>

      </Grid>
    </div>
  )
}
