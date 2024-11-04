import * as React from "react";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import Home from "./Home";
import Busqueda from "./Busqueda";
import SearchIcon from '@mui/icons-material/Search';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';



const theme = createTheme({
    cssVariables: {
      colorSchemeSelector: "data-toolpad-color-scheme",
    },
    colorSchemes: { light: false, dark: true },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      mode: "light", // O "dark", según tu preferencia
      background: {
        default: "#f0f0f0", // Color de fondo principal
        paper: "#ffffff", // Color de fondo para elementos como tarjetas o contenedores
      },
    },
  });
  

function DemoPageContent({ pathname }) {

    return (
      <Box
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        {/* Renderiza el componente basado en el pathname */}
        {pathname === "/Home" ? (
          <Home />
        ) : pathname === "/Busqueda" ? (
          <Busqueda />
        ) : (
          <Home />
        )}
      </Box>
    );
}

  
export default function Index(props) {
    const { window } = props;
    const router = useDemoRouter("/index");
    const demoWindow = window !== undefined ? window() : undefined;   
  

  return (
    <>
        <AppProvider
      branding={{
        logo: (
          <img src="https://www.vectorlogo.zone/logos/spotify/spotify-icon.svg"></img>
        ),
        title: "Spotify Info App - KodigoMusic",
      }}
      navigation={[
        {
          segment: "Busqueda",
          title: "Busqueda",
          icon: <SearchIcon />,
        },
        {
          segment: "Playlist",
          title: "Playlist",
          icon: <PlaylistPlayIcon />,
        },
        
      ]}
      router={router}
      theme={theme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    </>
  )
}
