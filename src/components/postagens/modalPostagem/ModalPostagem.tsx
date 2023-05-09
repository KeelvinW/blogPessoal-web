import React from "react";
import { Box, Modal, Button, makeStyles, Theme, createStyles } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";

import "./ModalPostagem.css";
// import CadastroPostagemModal from "../cadastroPostagem/CadastroPostagemModal";

function ModalPostagem() {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div >
            <Button variant="outlined" className="btnModal" onClick={handleOpen}>
                Nova Postagem
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="modal">
                    <Box display="flex" justifyContent="flex-end">
                        <CloseIcon onClick={handleClose} />
                    </Box>
                    {/* <CadastroPostagemModal /> */}
                </div>
            </Modal>
        </div>
    );

    return (
        <div style={{ margin: "5px" }}>
            <Button variant="outlined" className="btnModal" onClick={handleOpen}>
                Nova Postagem
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default ModalPostagem;