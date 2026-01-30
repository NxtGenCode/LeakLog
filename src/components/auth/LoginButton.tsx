import Button from "@mui/material/Button"
import { Link } from 'react-router-dom';

type LoginButtonProps = {
  onClick: () => void;
  path: string;
};

export default function LoginButton({onClick, path}:LoginButtonProps) {

    return (
        <Button component={Link} to={path} sx={
            {
                display:'flex',
                margin:'0px',
                color:'white',
                width:"100%",
                marginBottom:"4px"
            }}
            onClick={onClick}
            variant='contained'
        >
        SIGN IN
        </Button> 
    );
}