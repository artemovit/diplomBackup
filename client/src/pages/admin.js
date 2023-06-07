import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../index'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import { createActer, createAfisha, createRole, deleteFeedback, getAllActers, getFeedback, getOrder, getRepertuar, getAficha, createNews, createPhoto } from '../http/dataAPI'
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

import moment from 'moment'
import 'moment/locale/ru'



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
    const [openRole, setRoleOpen] = React.useState(false);
    const [openNews, setOpenNews] = React.useState(false);
    const [openPhoto, setOpenPhoto] = React.useState(false);
    const [openTableActer, setTableActerOpen] = React.useState(false);
    const [openTableOrder, setTableOrderOpen] = React.useState(false);
    const [openTableFeedback, setTableFeedbackOpen] = React.useState(false);
    const [openTableAfisha, setTableAfishaOpen] = React.useState(false);

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
    const [pushka] = useState(false)

    const addAfisha = async () => {
        const formData = new FormData()
        formData.append('day', date)
        formData.append('cenz', cenz)
        formData.append('pushka', pushka)
        formData.append('repertuarId', datas.selectedSpect.id)

        createAfisha(formData).then(handleRepertuarClose)
    }

    //Роли
    const [nameRole, setNameRole] = useState('')

    const addRole = async () => {
        const formData = new FormData()
        formData.append('title', nameRole)
        formData.append('repertuarId', datas.selectedSpect.id)
        formData.append('acterId', datas.selectedArtist.id)

        createRole(formData).then(alert("Запись успешно добавлена!"))
    }

    //Новости
    const [discription, setDiscription] = useState('')

    const addNews = async () => {
        const formData = new FormData()
        formData.append('title', title)
        formData.append('discription', discription)
        formData.append('mainPhoto', mainPhoto)

        createNews(formData).then(handleRepertuarClose)
    }

    //Фотографии
    const addPhoto = async () => {
        const formData = new FormData()
        formData.append('path', mainPhoto)
        formData.append('repertuarId', datas.selectedSpect.id)

        createPhoto(formData).then(handleRepertuarClose)
        
    }

    const delFeedback = async () => {
        deleteFeedback(datas.selectedFeedback.id).then(alert("Запись успешно удалена!"))
    }


    const handleActerOpen = () => {
        setActerOpen(true);
    }
    const handlePhotoOpen = () => {
        setOpenPhoto(true);
    }
    const handleRoleOpen = () => {
        setRoleOpen(true)
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
    const handleTableOrderOpen = () => {
        setTableOrderOpen(true);
    }
    const handleTableFeedBackOpen = () => {
        setTableFeedbackOpen(true);
    }
    const handleTableAfishaOpen = () => {
        setTableAfishaOpen(true);
    }
    const handleNewsOpen = () => {
        setOpenNews(true);
    }
    const handleRepertuarClose = () => {
        setRepertuarOpen(false)
        setActerOpen(false)
        setRoleOpen(false)
        setOpenNews(false)
        setOpenPhoto(false)

        setOpen(false)
        alert("Запись успешно добавлена!")
    }

    const handleClose = () => {
        setOpen(false);
        setRoleOpen(false)
        setRepertuarOpen(false);
        setActerOpen(false);
        setOpenNews(false);
        setOpenPhoto(false);
        setTableActerOpen(false);
        setTableOrderOpen(false);
        setTableFeedbackOpen(false);
        setTableAfishaOpen(false);
    };

    const [age, setAge] = React.useState('');
    const [ages, setAges] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);

        setChildren(event.target.checked);
        setHost(event.target.checked)
        setGrade(event.target.value)
    };

    const handleChanges = (event) => {
        setAges(event.target.value);
    }

    useEffect(() => {
        getRepertuar().then(data => datas.setRepertuar(data))
        getOrder().then(data => datas.setOrderAfisha(data))
        getFeedback().then(data => datas.setFeedback(data))
        getAllActers().then(data => datas.setArtist(data))
        getAficha().then(data => datas.setAfisha(data))
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
                        <Item onClick={handleRoleOpen}>Распределение Ролей</Item>
                        <Item onClick={handleNewsOpen}>Добавление новостей</Item>
                        <Item onClick={handlePhotoOpen}>Распределение фотографий</Item>
                        <Item>*что-то крутое*</Item>
                    </Grid>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', margin: '3%' }}>
                    <h2>Просмотр информации</h2>
                    <Grid style={{ marginBottom: '100px' }} container rowSpacing={1}>
                        <Item onClick={handleTableActerOpen}>Просмотр репертуара</Item>
                        <Item>Просмотр труппы</Item>
                        <Item onClick={handleTableAfishaOpen}>Просмотр афиши</Item>
                        <Item onClick={handleTableOrderOpen}>Просмотр заявок</Item>
                        <Item onClick={handleTableFeedBackOpen}>Просмотр обращений</Item>
                    </Grid>
                </div>

            </div>

            <Dialog open={openRole} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Распределение ролей</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Введите данные о роли:
                    </DialogContentText>

                    <TextField margin='dense' id="role" label="Имя роли" onChange={e => setNameRole(e.target.value)} fullWidth />

                    <FormControl fullWidth>
                        <InputLabel>Выбор артиста</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={age}
                            onChange={handleChange}
                            autoWidth
                            label="Выбор артиста"
                        >
                            {datas.acters.map(artist =>
                                <MenuItem value={artist.name}
                                    key={artist.id}
                                    onClick={() => datas.setSelectedArtist(artist)}>{artist.name} {artist.surname}</MenuItem>
                            )}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>Выбор спектакля</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={ages}
                            onChange={handleChanges}
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Выйти</Button>
                    <Button onClick={addRole}>Сохранить</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openPhoto} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Распределение фотографий</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Введите данные о фотографии:
                    </DialogContentText>

                    <FormControl fullWidth>
                        <InputLabel>Выбор спектакля</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={ages}
                            onChange={handleChanges}
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

                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button variant="contained" component="label">
                            Загрузить главную фотографию
                            <input hidden accept="image/*" multiple type="file" onChange={selectFile} />
                        </Button>
                    </Stack>


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Выйти</Button>
                    <Button onClick={addPhoto}>Сохранить</Button>
                </DialogActions>
            </Dialog>

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


            <Dialog open={openNews} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Добавление новости</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Заполните новую новость:
                    </DialogContentText>
                    <TextField autoFocus margin='dense' id="name" label="Заголовок новости" onChange={e => setTitle(e.target.value)} fullWidth />

                    <TextField
                        value={discription}
                        onChange={e => setDiscription(e.target.value)}
                        id="outlined-multiline-static"
                        label="Содержание новости"
                        multiline
                        rows={4}
                        fullWidth

                    />
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button variant="contained" component="label">
                            Загрузить обложку новости
                            <input hidden accept="image/*" multiple type="file" onChange={selectFile} />
                        </Button>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Выйти</Button>
                    <Button onClick={addNews}>Сохранить</Button>
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

            <Dialog open={openTableOrder} onClose={handleClose} fullScreen aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Просмотр заявок:</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Список заявок на билеты:
                    </DialogContentText>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Имя заказсчика</StyledTableCell>
                                    <StyledTableCell>Электронная почта</StyledTableCell>
                                    <StyledTableCell>Дата спектакля</StyledTableCell>
                                    <StyledTableCell>Название спектакля</StyledTableCell>
                                    <StyledTableCell>Время отправки заявки</StyledTableCell>
                                    <StyledTableCell>Управление заявкой</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {datas.orderAfisha.map(orderAfisha =>
                                    <StyledTableRow key={orderAfisha.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {orderAfisha.name}
                                        </StyledTableCell>
                                        <StyledTableCell>{orderAfisha.email}</StyledTableCell>
                                        <StyledTableCell>{moment(orderAfisha.date).format('LLL')}</StyledTableCell>
                                        <StyledTableCell>{orderAfisha.spect}</StyledTableCell>
                                        <StyledTableCell>{moment(orderAfisha.createdAt).format('LLL')}</StyledTableCell>
                                        <StyledTableCell>

                                            <div class="afisha_item"><Button class="buy_button">Удалить</Button></div>
                                        </StyledTableCell>
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

            <Dialog open={openTableFeedback} onClose={handleClose} fullScreen aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Просмотр обратной связи:</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Список оставленных обращений:
                    </DialogContentText>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Имя автора</StyledTableCell>
                                    <StyledTableCell>Электронная почта</StyledTableCell>
                                    <StyledTableCell>Сообщение</StyledTableCell>
                                    <StyledTableCell>Время отправки сообщения</StyledTableCell>
                                    <StyledTableCell>Управление сообщением</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {datas.feedback.map(feedback =>
                                    <StyledTableRow key={feedback.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {feedback.name}
                                        </StyledTableCell>
                                        <StyledTableCell>{feedback.email}</StyledTableCell>
                                        <StyledTableCell>{feedback.discription}</StyledTableCell>
                                        <StyledTableCell>{feedback.createdAt}</StyledTableCell>
                                        <StyledTableCell>

                                            <div class="afisha_item"><Button class="buy_button" onClick={() => datas.setSelectedFeedback(feedback)}>Удалить</Button></div>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Выйти</Button>
                    <Button onClick={delFeedback}>Сохранить</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openTableAfisha} onClose={handleClose} fullScreen aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Просмотр текущей афиши:</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        График спектаклей:
                    </DialogContentText>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>День</StyledTableCell>
                                    <StyledTableCell>Возрастной ценз</StyledTableCell>
                                    <StyledTableCell>Название спектакля</StyledTableCell>
                                    <StyledTableCell>Управление записью</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {datas.afisha.map(afisha =>
                                    <StyledTableRow key={afisha.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {afisha.day}
                                        </StyledTableCell>
                                        <StyledTableCell>{afisha.cenz}</StyledTableCell>
                                        <StyledTableCell>{afisha.repertuar.name}</StyledTableCell>
                                        <StyledTableCell>

                                            <div class="afisha_item"><Button class="buy_button">Удалить</Button></div>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Выйти</Button>
                </DialogActions>
            </Dialog>



        </div>
    )
})
export default Admin

