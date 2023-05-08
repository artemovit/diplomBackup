import React from 'react'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import testPhoto1 from '../resources/photos/artists/Carpova.jpg'
import testPhoto2 from '../resources/photos/artists/Lazarev.jpg'
import MediaQuery from 'react-responsive';
import Box from '@mui/material/Box';

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
            <MediaQuery minWidth={1280}>
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
            </MediaQuery>

            {/* Мобильная верстка */}

            <MediaQuery maxWidth={1279}>
                <h1 style={{ margin: '6%', fontSize: '40px' }}>Артисты</h1>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item style={{ color: 'black', fontSize: '15px' }}>Народные артисты России</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item style={{ color: 'black', fontSize: '15px' }}>Заслуженные артисты России</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item style={{ color: 'black', fontSize: '15px' }}>Артисты театра</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item style={{ color: 'black', fontSize: '15px' }}>Актеры других театров</Item>
                        </Grid>
                        

                    </Grid>
                </Box>

                <h2 style={{ margin: '6%', fontSize: '25px' }}>Народные артисты России</h2>

                <Grid container sx={{ justifyContent: 'center', margin: '0 px', border: 'none' }}>

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

                <h2 style={{ margin: '6%', fontSize: '25px' }}>Заслуженные артисты России</h2>

                <Grid container sx={{ justifyContent: 'center', margin: '0 px', border: 'none' }}>

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

                <h2 style={{ margin: '6%', fontSize: '25px' }}>Артисты театра</h2>

                <Grid container sx={{ justifyContent: 'center', margin: '0px', border: 'none' }}>

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

                <h2 style={{ margin: '6%', fontSize: '25px' }}>Артисты других театров</h2>

                <Grid container sx={{ justifyContent: 'center', margin: '0px', border: 'none' }}>

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
            </MediaQuery>
        </div>
    )
}
