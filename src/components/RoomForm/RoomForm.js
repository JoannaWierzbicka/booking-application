/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { StyledPaper, StyledForm, StyledInput, StyledButton, StyledInputWrapper, StyledLabel } from '../../styledComponents'
import IconButton from '@mui/material/IconButton'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import { addRoomDataAction, removeRoomDataAction, editRoomDataAction } from '../../actions/rooms'
import DataApi from '../../api/DataApi'
import DeleteIcon from '@mui/icons-material/Delete'
import { v4 as uuid } from 'uuid'

export const RoomForm = (props) => {
  const { close, type, data, user } = props
  const dispatch = useDispatch()
  const dataApi = new DataApi()

  const searched = '@'
  const withNew = ''
  const newEm = user.replace(searched, withNew)
  const sear = '.'
  const userIdAdded = newEm.replaceAll(sear, withNew)

  const [title, setTitle] = React.useState(type === 'new' ? '' : data.title)
  const [singleBeds, setSingleBeds] = React.useState(type === 'new' ? '' : data.roomData.singleBeds)
  const [doubleBeds, setDoubleBeds] = React.useState(type === 'new' ? '' : data.roomData.doubleBeds)
  // const [desc, setDesc] = React.useState(type === 'new' ? '' : data.roomData.desc)

  const room = {
    id: type === 'new' ? uuid() : data.id,
    title: title,
    height: 30,
    stackItems: false,
    roomData: {
      singleBeds: singleBeds,
      doubleBeds: doubleBeds
      // desc: desc
    }
  }

  const removeRoom = (id) => {
    if (window.confirm('Na pewno chcesz usunąć ten pokój?')) {
      dataApi.removeData(userIdAdded, 'rooms', id)
      dispatch(removeRoomDataAction(id))
      close()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dataApi.addRoomData(userIdAdded, 'rooms', room)
    dispatch(addRoomDataAction(room))
    close()
  }

  const handleChange = (e) => {
    e.preventDefault()
    dataApi.editData(userIdAdded, 'rooms', data.name, room)
    dispatch(editRoomDataAction(room))
    close()
  }

  return (
    <StyledPaper>
      <header className={'form-header'}>
        {type === 'new' ? <div>DODAJ POKÓJ</div> : <div>EDYCJA POKOJU</div>}
        <div>
          {
                type === 'edit'
                  ?
                    <IconButton onClick={() => removeRoom(data.id)}>
                      <DeleteIcon />
                    </IconButton>
                  : null
            }
          <IconButton
            onClick={close}
          ><CloseTwoToneIcon/>
          </IconButton>
        </div>
      </header>
      <StyledForm
        className={'reservation'}
        onSubmit={type === 'new' ? handleSubmit : handleChange}
      >
        <StyledInputWrapper className={'row-wrapper'}>
          <h5>Dane na temat pokoju</h5>
          <StyledInputWrapper>
            <StyledLabel htmlFor={'title'}>
              Nazwa:

            </StyledLabel>
            <StyledInput
              name={'title'}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor={'singleBeds'}>
              Ilość łóżek pojedynczych
            </StyledLabel>
            <StyledInput
              className={'input--number'}
              name={'singleBeds'}
              onChange={(e) => setSingleBeds(e.target.value)}
              value={singleBeds}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor={'doubleBeds'}>
              Ilość łóżek pojedynczych
            </StyledLabel>
            <StyledInput
              className={'input--number'}
              name={'doubleBeds'}
              onChange={(e) => setDoubleBeds(e.target.value)}
              value={doubleBeds}
            />
          </StyledInputWrapper>
          {/* <StyledInputWrapper>
            <StyledLabel htmlFor={'desc'}>
              Opis pokoju
            </StyledLabel>
            <TextField
              variant={'standard'}
              name={'desc'}
              label="Opis pokoju"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </StyledInputWrapper> */}

        </StyledInputWrapper>
        <StyledButton
          className={'button-reservation--form'}
          variant={'contained'}
          type={'submit'}
        >{type === 'new' ? 'DODAJ' : 'ZMIEŃ'}
        </StyledButton>
        <StyledButton
          className={'button-reservation--form'}
          variant={'outlined'}
          onClick={close}
        >ANULUJ
        </StyledButton>

      </StyledForm>

    </StyledPaper>
  )
}

RoomForm.propTypes = {
  close: PropTypes.func,
  type: PropTypes.oneOf(['new', 'edit']),
  data: PropTypes.object
}

export default RoomForm
