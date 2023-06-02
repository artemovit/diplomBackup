import React, { useContext, useEffect } from 'react'
import { Context } from '../index'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import {getRepertuar} from '../http/dataAPI'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Paper from '@mui/material/Paper';

import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Dialog } from '@mui/material'

import Stack from '@mui/material/Stack';


export default function () {
    const Item = styled(Paper)(({ theme }) => ({

        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        border: 'none',
        margin: '5px'
    }));

    const [open, setOpen] = React.useState(false);
    const [openRepertuar, setRepertuarOpen] = React.useState(false);
    const [openActer, setActerOpen] = React.useState(false);

    const handleActerOpen = () => {
        setActerOpen(true);
    }
    const handleRepertuarOpen = () => {
        setRepertuarOpen(true);
    }
    const handleAfishaOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setRepertuarOpen(false);
        setActerOpen(false);
    };

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const { datas } = useContext(Context)
    
    useEffect( () => {
        getRepertuar().then(data => datas.setRepertuar(data))
    },[])

    return (
        <div>
            <h1>Администраторская панель</h1>
            <h2 style={{ textAlign: 'end', fontSize: '15px', marginBottom: '100px' }}>Здравствуйте, Алексей Селуков</h2>

            <Grid style={{ display: 'block', marginBottom: '100px' }} container rowSpacing={1}>
                <Item onClick={handleAfishaOpen}>Добавить спектакль в афишу</Item>
                <Item onClick={handleRepertuarOpen}>Добавить спектакль</Item>
                <Item onClick={handleActerOpen}>Добавить актера</Item>
                <Item>*что-то крутое*</Item>
            </Grid>



            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Добавление афиши</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Введите данные о афише:
                    </DialogContentText>
                    <p>Дата спектакля</p>
                    <TextField autoFocus margin='dense' id="date" type="date" fullWidth />
                    <TextField margin='dense' id="time" type="time" label="Время начала" fullWidth />
                    <FormControl fullWidth>
                        <InputLabel>Выбор спектакля</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={age}
                            onChange={handleChange}
                            autoWidth
                            label="Выбор спекаткля"
                        >
                            {datas.repertuar.map(repertuar =>
                                <MenuItem value={repertuar.name} key={repertuar.id}>{repertuar.name}</MenuItem>
                            )}
                            
                            
                        </Select>
                    </FormControl>
                    <TextField margin='dense' id="cenz" label="Возрастной ценз" fullWidth />
                    <FormControlLabel control={<Checkbox />} label="Пушкинская карта" />


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Выйти</Button>
                    <Button onClick={handleClose}>Сохранить</Button>
                </DialogActions>
            </Dialog>


            <Dialog open={openRepertuar} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Добавление спекаткля</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Введите данные о спектакле:
                    </DialogContentText>
                    <TextField autoFocus margin='dense' id="name" label="Название спектакля" fullWidth />
                    <TextField id="author" label="Имя автора пьесы" fullWidth />
                    <TextField margin='dense' id="director" label="Постановщик спектакля" fullWidth />
                    <TextField
                        id="discription"
                        margin='dense'
                        label="Описание спектакля"
                        multiline
                        fullWidth
                        rows={4}
                    />
                    <TextField margin='dense' id="time" label="Длительность спектакля" fullWidth />
                    <FormControlLabel control={<Checkbox />} label="Детский спектакль" />
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button variant="contained" component="label">
                            Загрузить главную фотографию
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                    </Stack>
                    <FormControlLabel control={<Checkbox />} label="Гостевой спектакль" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Выйти</Button>
                    <Button onClick={handleClose}>Сохранить</Button>
                </DialogActions>
            </Dialog>


            <Dialog open={openActer} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Добавление актера</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Введите данные о актере:
                    </DialogContentText>
                    <TextField autoFocus margin='dense' id="name" label="Имя актера" fullWidth />
                    <TextField id="surname" label="Фамилия" fullWidth />

                    <FormControl fullWidth>
                        <InputLabel>Выбор звания</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={age}
                            onChange={handleChange}
                            autoWidth
                            label="Выбор звания"
                        >
                            <MenuItem value={40}>Народный артист России</MenuItem>
                            <MenuItem value={21}>Заслуженный артист России</MenuItem>
                            <MenuItem value={22}>Актер театра</MenuItem>
                            <MenuItem value={22}>Актер другого театра</MenuItem>
                        </Select>
                    </FormControl>


                    <TextField
                        id="discription"
                        margin='dense'
                        label="Описание актера"
                        multiline
                        fullWidth
                        rows={4}
                    />
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button variant="contained" component="label">
                            Загрузить главную фотографию
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Выйти</Button>
                    <Button onClick={handleClose}>Сохранить</Button>
                </DialogActions>
            </Dialog>




        </div>
    )
}
