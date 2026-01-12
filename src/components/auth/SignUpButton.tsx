import Button from "@mui/material/Button"


type SignUpButtonProps = {
  onClick: () => void;
};

export default function SignUpButton({onClick}:SignUpButtonProps) {
    return (
        <Button sx={
            {
                display:'block',
                margin:'0px',
                color:'white',
                bgColor:'black',
                width:"100%",
            }}
            onClick={onClick}
            variant='contained'
        >
            SIGN UP
        </Button>
    )
}