import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../index'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import { createActer, createAfisha, getRepertuar } from '../http/dataAPI'
import { createRepertuar } from '../http/dataAPI';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Paper from '@mui/material/Paper';

import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Dialog } from '@mui/material'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';

import Stack from '@mui/material/Stack';
import { observer } from 'mobx-react';



const Admin = observer(() => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

  


    const Item = styled(Paper)(({ theme }) => ({

        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        border: 'none',
        margin: '5px'
    }));

    const { datas } = useContext(Context)

    const [open, setOpen] = React.useState(false);
    const [openRepertuar, setRepertuarOpen] = React.useState(false);
    const [openActer, setActerOpen] = React.useState(false);
    const [openTableActer, setTableActerOpen] = React.useState(false);

    // Спектакль
    const [mainPhoto, setMainPhoto] = useState(null)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [director, setDirector] = useState('')
    const [discrSpect, setDiscrSpect] = useState('')
    const [time, setTime] = useState('')

    const [children, setChildren] = useState(false)
    const [host, setHost] = useState(false)

    const selectFile = e => {
        setMainPhoto(e.target.files[0])
        console.log(mainPhoto)
    }
    const addSpect = async () => {
        const formData = new FormData()
        formData.append('name', title)
        formData.append('author', author)
        formData.append('director', director)
        formData.append('discription', discrSpect)
        formData.append('time', time)
        formData.append('children', children)
        formData.append('host', host)
        formData.append('mainPhoto', mainPhoto)

        createRepertuar(formData).then(handleRepertuarClose)
    }

    //Актеры
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [grade, setGrade] = useState('')

    const addActer = async () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('surname', surname)
        formData.append('grade', grade)
        formData.append('discription', discrSpect)
        formData.append('mainPhoto', mainPhoto)

        createActer(formData).then(handleRepertuarClose)
    }

    //Афиша
    const [date, setDate] = useState('')
    const [cenz, setCenz] = useState('')
    const [pushka, setPushka] = useState(false)
    const [rid, setRid] = useState(null)

    const addAfisha = async () => {
        const formData = new FormData()
        formData.append('day', date)
        formData.append('cenz', cenz)
        formData.append('pushka', pushka)
        formData.append('rid', datas.selectedSpect.id)

        createAfisha(formData).then(handleRepertuarClose)
    }


    const handleActerOpen = () => {
        setActerOpen(true);
    }
    const handleRepertuarOpen = () => {
        setRepertuarOpen(true);
    }
    const handleAfishaOpen = () => {
        setOpen(true);
    }
    const handleTableActerOpen = () => {
        setTableActerOpen(true);
    }
    const handleRepertuarClose = () => {
        setRepertuarOpen(false)
        setActerOpen(false)

        setOpen(false)
        alert("Запись успешно добавлена!")
    }

    const handleClose = () => {
        setOpen(false);
        setRepertuarOpen(false);
        setActerOpen(false);
        setTableActerOpen(false);
    };

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
        setChildren(event.target.checked);
        setHost(event.target.checked)
        setGrade(event.target.value)
        setPushka(event.target.checked)
    };



    useEffect(() => {
        getRepertuar().then(data => datas.setRepertuar(data))
    }, [])

    return (
        <div>
            <h1>Администраторская панель</h1>
            <div class="navAdress">
                <div style={{ display: 'flex', justifyContent: 'center', margin: '3%' }}>
                    <h2>Добавление информации</h2>
                    <Grid style={{ marginBottom: '100px' }} container rowSpacing={1}>

                        <Item onClick={handleAfishaOpen}>Добавить спектакль в афишу</Item>
                        <Item onClick={handleRepertuarOpen}>Добавить спектакль</Item>
                        <Item onClick={handleActerOpen}>Добавить актера</Item>
                        <Item>Распределение Ролей</Item>
                        <Item>Добавление спектаклей</Item>
                        <Item>*что-то крутое*</Item>
                    </Grid>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', margin: '3%' }}>
                    <h2>Просмотр информации</h2>
                    <Grid style={{ marginBottom: '100px' }} container rowSpacing={1}>
                        <Item onClick={handleTableActerOpen}>Просмотр репертуара</Item>
                        <Item>Просмотр труппы</Item>
                        <Item>Просмотр афиши</Item>
                    </Grid>
                </div>

            </div>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Добавление афиши</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Введите данные о афише:
                    </DialogContentText>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateField']}>
                            <DateTimeField
                                label="Дата спектакля"
                                format="L HH:mm"
                                onChange={(newValue) => { setDate(newValue) }}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
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
                                <MenuItem value={repertuar.name}
                                    key={repertuar.id}
                                    onClick={() => datas.setSelectedSpect(repertuar)}>{repertuar.name}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <TextField margin='dense' id="cenz" label="Возрастной ценз" onChange={e => setCenz(e.target.value)} fullWidth />
                    <FormControlLabel control={<Checkbox onChange={handleChange} />} label="Пушкинская карта" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Выйти</Button>
                    <Button onClick={addAfisha}>Сохранить</Button>
                </DialogActions>
            </Dialog>


            <Dialog open={openRepertuar} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Добавление спекаткля</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Введите данные о спектакле:
                    </DialogContentText>
                    <TextField autoFocus margin='dense' id="name" label="Название спектакля" onChange={e => setTitle(e.target.value)} fullWidth />
                    <TextField id="author" label="Автор пьесы" onChange={e => setAuthor(e.target.value)} fullWidth />
                    <TextField margin='dense' id="director" label="Постановщик спектакля" onChange={e => setDirector(e.target.value)} fullWidth />
                    <TextField
                        id="discription"
                        margin='dense'
                        label="Описание спектакля"
                        multiline
                        onChange={e => setDiscrSpect(e.target.value)}
                        fullWidth
                        rows={4}
                    />
                    <TextField margin='dense' id="time" label="Длительность спектакля" onChange={e => setTime(e.target.value)} fullWidth />
                    <FormControlLabel control={<Checkbox onChange={handleChange} />} label="Детский спектакль" />
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button variant="contained" component="label">
                            Загрузить главную фотографию
                            <input hidden accept="image/*" multiple type="file" onChange={selectFile} />
                        </Button>
                    </Stack>
                    <FormControlLabel control={<Checkbox onChange={handleChange} />} label="Гостевой спектакль" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Выйти</Button>
                    <Button onClick={addSpect}>Сохранить</Button>
                </DialogActions>
            </Dialog>


            <Dialog open={openActer} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Добавление актера</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Введите данные о актере:
                    </DialogContentText>
                    <TextField autoFocus margin='dense' id="name" label="Имя актера" onChange={e => setName(e.target.value)} fullWidth />
                    <TextField id="surname" label="Фамилия" onChange={e => setSurname(e.target.value)} fullWidth />

                    <FormControl fullWidth>
                        <InputLabel>Выбор звания</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={grade}
                            onChange={handleChange}
                            autoWidth
                            label="Выбор звания"
                        >
                            <MenuItem value='Народный артист России'>Народный артист России</MenuItem>
                            <MenuItem value='Заслуженный артист России'>Заслуженный артист России</MenuItem>
                            <MenuItem value='Артист театра'>Артист театра</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        id="discription"
                        margin='dense'
                        label="Описание актера"
                        multiline
                        fullWidth
                        onChange={e => setDiscrSpect(e.target.value)}
                        rows={4}
                    />
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button variant="contained" component="label">
                            Загрузить главную фотографию
                            <input hidden accept="image/*" multiple type="file" onChange={selectFile} />
                        </Button>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Выйти</Button>
                    <Button onClick={addActer}>Сохранить</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openTableActer} onClose={handleClose} fullScreen aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Просмотр текущего репертуара</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Список текущих спектаклей:
                    </DialogContentText>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Название спектакля</StyledTableCell>
                                    <StyledTableCell>Автор пьесы</StyledTableCell>
                                    <StyledTableCell>Постановщик спектакля</StyledTableCell>
                                    <StyledTableCell>Описание спектакля</StyledTableCell>
                                    <StyledTableCell>Продолжительность спектаклей</StyledTableCell>
                                    <StyledTableCell>Обложка спектакля</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {datas.repertuar.map(repertuar => 
                                    <StyledTableRow key={repertuar.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {repertuar.name}
                                        </StyledTableCell>
                                        <StyledTableCell>{repertuar.author}</StyledTableCell>
                                        <StyledTableCell>{repertuar.director}</StyledTableCell>
                                        <StyledTableCell>{repertuar.discription}</StyledTableCell>
                                        <StyledTableCell>{repertuar.time}</StyledTableCell>
                                        <StyledTableCell>{repertuar.mainPhoto}</StyledTableCell>
                                    </StyledTableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Выйти</Button>
                    <Button onClick={handleClose}>Сохранить</Button>
                </DialogActions>
            </Dialog>






        </div>
    )
})
export default Admin

