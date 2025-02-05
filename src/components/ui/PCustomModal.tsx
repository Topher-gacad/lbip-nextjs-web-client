import React, { ReactNode } from "react";
import { Box, Modal } from "@mui/material";

type PCustomModal = {
  isOpen: boolean;
  closeAction: () => void;
  children: ReactNode;
};

const CustomModal = ({ isOpen, closeAction, children }: PCustomModal) => {
  return (
    <Modal
      keepMounted
      open={isOpen}
      onClose={closeAction}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: theme => theme.breakpoints.values.sm,
          transform: "translate(-50%, -50%)",
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};
export default CustomModal;
