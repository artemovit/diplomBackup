import React from "react";
import MediaQuery from "react-responsive";
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from "@mui/material";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <div>
    <MediaQuery minWidth={1280}>

    
    <Box>
      <h1 style={{
        fontSize: "20px",
        color: "#FFF",
        marginTop: "-50px"
      }}>
        © 1991-2023 Санкт-Петербургский театр Комедии имени Н. П. Акимова
      </h1>
      <h2 style={{
        fontSize: "15px",
        color: "#84848C",
        marginTop: "-50px"
      }}>
        город Санкт-Петербург, Невский проспект, дом 56 191023
        <br/>
        admin@akimovkomedia.ru
      </h2>
      <Container>
        <Row>
          <Column>
            <Heading>Афиша</Heading>
            <FooterLink href="/">Афиша на текущий месяц</FooterLink>
            <FooterLink href="#">Афиша по месяцам</FooterLink>
            <FooterLink href="#">Абонементы</FooterLink>
          </Column>
          <Column>
            <Heading>Репертуар</Heading>
            <FooterLink href="repertuar">Текущий репертуар</FooterLink>
            <FooterLink href="#">Детские спектакли</FooterLink>
          </Column>
          <Column>
            <Heading>Артисты</Heading>
            <FooterLink href="#">Народные артисты России</FooterLink>
            <FooterLink href="#">Заслуженные артисты России</FooterLink>
            <FooterLink href="#">Артисты театра</FooterLink>
            <FooterLink href="#">Артисты других театров</FooterLink>
          </Column>
          <Column>
            <Heading>О театре</Heading>
            <FooterLink href="#">История театра</FooterLink>
            <FooterLink href="#">Николай Павлович Акимов</FooterLink>
            <FooterLink href="#">Звёзды Акимовской сцены</FooterLink>
            <FooterLink href="#">Татьяна Сергеевна казакова</FooterLink>
            <FooterLink href="#">Документы</FooterLink>
          </Column>
          <Column>
            <Heading>Информация для МГН</Heading>
          </Column>
          <Column>
            <Heading>Зрителям</Heading>
            <FooterLink href="#">Правила покупки билетов</FooterLink>
            <FooterLink href="#">Правила посещения театра</FooterLink>
          </Column>
          <Column>
            <Heading>Новости</Heading>
          </Column>
          <Column>
            <Heading>Контакты</Heading>
            <FooterLink href="https://t.me/akimovkomedia">
              <IconButton 
              sx={{
                color: '#FFF'
              }}><TelegramIcon /></IconButton>
            </FooterLink>

            <FooterLink href="#">
              <IconButton 
              sx={{
                color: '#FFF'
              }}><YouTubeIcon/></IconButton>
            </FooterLink>


          </Column>
        </Row>
      </Container>
    </Box>
    </MediaQuery>

    <MediaQuery maxWidth={1279}>
      <footer>
      <h1 style={{
        fontSize: "10px",
        color: "#FFF",
      }}>
        © 1991-2023 Санкт-Петербургский театр Комедии имени Н. П. Акимова
      </h1>
      <h2 style={{
        fontSize: "10px",
        color: "#84848C"
      }}>
        город Санкт-Петербург, Невский проспект, дом 56 191023
      </h2>
      </footer>
    </MediaQuery>
    </div>
  );
};
export default Footer;
