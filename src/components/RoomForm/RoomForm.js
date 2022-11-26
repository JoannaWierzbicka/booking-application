/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { StyledPaper, StyledForm, StyledInput, StyledButton, StyledSelect, StyledInputWrapper } from '../../styledComponents'
import { rooms } from '../../helpers/rooms'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import { countries } from '../../helpers/countries'
import DataApi from '../../api/DataApi'
import DeleteIcon from '@mui/icons-material/Delete'
import { v4 as uuid } from 'uuid'

export const RoomForm = (props) => {
  const { close } = props
  return (
    <StyledPaper>
      <header className={'form-header'}>
        <div>DODAJ POKÓJ</div>
        <div>

          <IconButton
            onClick={close}
          ><CloseTwoToneIcon/>
          </IconButton>
        </div>
      </header>
    </StyledPaper>

  )
}

export default RoomForm
