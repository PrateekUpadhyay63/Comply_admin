// ** React Imports
import { forwardRef, Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Slide from '@mui/material/Slide'
import DialogContentText from '@mui/material/DialogContentText'
import axios from 'axios'
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const DialogTransition = props => {
  const { open,deleteItems, setOpen, idData, response, getList } = props
  // ** State
  const handleClose = () => setOpen(false)
  const handleDelete = async () => {
    deleteItems(idData)
    setOpen(false)
  }

  return (
    <Fragment>
      {/* <Button variant='outlined' onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title'>Delete Modal</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>Are you sure you want to delete ?</DialogContentText>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button onClick={handleClose}>Cancel</Button>
          <Button 
          onClick={handleDelete}
          >Delete</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

export default DialogTransition
