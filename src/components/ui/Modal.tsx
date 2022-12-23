import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiModal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
interface IModalProps {
  open: boolean;
  buttonTitle: string;
  children: JSX.Element;
  className?: string;
  modalHeading?: string;
  handleClose: () => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "#DCFD60",
  border: "2px solid #000",
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
  height: "auto",
  overflowY: "auto",
  maxHeight: "90vh",
};

export const Modal: React.FC<IModalProps> = ({
  open,
  modalHeading,
  buttonTitle,
  children,
  className,
  handleClose,
}: IModalProps): JSX.Element => {
  return (
    <div className={className}>
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalHeading}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {children}
          </Typography>
        </Box>
      </MuiModal>
    </div>
  );
};
