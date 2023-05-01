import * as React from 'react';
import Grid from '@mui/material/Grid';
import testPhoto from '../resources/photos/5359.BigImg.jpg'



export default function index() {

    return (
        <div>
            <h1>Афиша</h1>
            <h2>Ближайшие спектакли</h2>
            

            <div class="product-wrapper">
    <div class="product-item">
    <img src={testPhoto}></img>
            <h3>Бешеные деньги</h3>
            <span class = "price">28 ноября</span>
    </div>
    <div class="product-item">
    <img src={testPhoto}></img>
            <h3>Краткий курс счастливой жизни</h3>
            <span class = "price">29 ноября</span>
        </div>
        <div class="product-item">
        <img src={testPhoto}></img>
                <h3>Синичк<span>in</span>. Театральное безумство</h3>
                <span class = "price">30 ноября</span>
        </div>
        <div class="product-item">
            <img src={testPhoto}></img>
                <h3>Всё о Еве</h3>
                <span class = "price">30 ноября</span>
        </div>
    </div>

        </div>
    );
}