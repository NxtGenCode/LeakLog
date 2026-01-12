import Button from "@mui/material/Button"

type LoginButtonProps = {
  onClick: () => void;
};

export default function LoginButton({onClick}:LoginButtonProps) {

    return (
        <Button sx={
            {
                display:'block',
                margin:'auto',
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