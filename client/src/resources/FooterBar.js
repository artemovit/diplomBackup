import React from "react";
import MediaQuery from "react-responsive";
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton } from "@mui/material";
import {
  Box,
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
            <br />
            admin@akimovkomedia.ru
          </h2>
          <h1 style={{
            fontSize: "20px",
            color: "#FFF",

          }}>Театр в социальных сетях
            <br />
            <IconButton href="https://t.me/akimovkomedia" sx={{ color: '#FFF' }}><TelegramIcon /></IconButton>
            <IconButton href="https://www.youtube.com/channel/UC_KV1S2br4Td6W1xe0amuuQ" sx={{ color: '#FFF' }}><YouTubeIcon /></IconButton>
          </h1>
        </Box>
      </MediaQuery>

      <MediaQuery maxWidth={1279}>
        <footer>
          <h1 style={{
            fontSize: "15px",
            color: "#FFF",
          }}>
            © 1991-2023 Санкт-Петербургский театр Комедии имени Н. П. Акимова
          </h1>
          <h2 style={{
            fontSize: "15px",
            color: "#84848C"
          }}>
            город Санкт-Петербург, Невский проспект, дом 56 191023
          </h2>
          <h1 style={{
            fontSize: "15px",
            color: "#FFF",
          }}>
            Театр в социальных сетях
            <br />
            <IconButton href="https://t.me/akimovkomedia" sx={{ color: '#FFF' }}><TelegramIcon /></IconButton>
            <IconButton href="https://www.youtube.com/channel/UC_KV1S2br4Td6W1xe0amuuQ" sx={{ color: '#FFF' }}><YouTubeIcon /></IconButton>
          </h1>
        </footer>
      </MediaQuery>
    </div>
  );
};
export default Footer;
