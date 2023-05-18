import { useEffect, useState } from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/ArrowUpward";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";
import Zoom from "@mui/material/Zoom";
import { useTheme } from "@mui/material/styles";

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

const ScrollToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.short,
  };

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const scrollToTopClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fab = {
    color: "primary",
    sx: fabStyle as SxProps,
    icon: <AddIcon />,
    label: "Add",
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "transparent",
          position: "fixed",
          right: "15px",
          bottom: "15px",
        }}
      >
        <Zoom
          key={fab.color}
          in={showButton}
          timeout={transitionDuration}
          style={{
            transitionDelay: `10ms`,
          }}
          unmountOnExit
        >
          <Fab
            color="primary"
            aria-label="add"
            onClick={scrollToTopClickHandler}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </Box>
    </>
  );
};

export default ScrollToTop;
