import React from 'react'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import testPhoto1 from '../resources/photos/artists/Carpova.jpg'
import testPhoto2 from '../resources/photos/artists/Lazarev.jpg'

const Item = styled(Paper)(({ theme }) => ({

    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    border: 'none',
    margin: '5px'
}));

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

export default function artists() {
    return (
        <div>
            <h1>Артисты</h1>

            <Grid class="mouth_repertuar" container rowSpacing={1}>
                <Item>Народные артисты России</Item>
                <Item>Заслуженные артисты России</Item>
                <Item>Артисты театра</Item>
                <Item>Артисты других театров</Item>
            </Grid>

            <h2>Народные артисты России</h2>

            <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }}>
               
                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>
            </Grid>

            <h2>Заслуженные артисты России</h2>

            <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }}>
               
                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>
            

            <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>
            </Grid>

            <h2>Артисты театра</h2>

            <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }}>
               
                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>
            

            <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>
            </Grid>

            <h2>Артисты других театров</h2>

            <Grid container sx={{ justifyContent: 'center', margin: '37px', border: 'none' }}>
               
                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>

                <ItemArtist>
                    <div class="product-item">
                        <img src={testPhoto2} />
                        <h3>Юрий Лазарев</h3>
                    </div>
                </ItemArtist>
            </Grid>

        </div>
    )
}
