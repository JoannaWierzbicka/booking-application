/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import DeleteIcon from '@mui/icons-material/Delete'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import FormElement from '../../components/FormElement'
import { addRoomDataAction, removeRoomDataAction, editRoomDataAction } from '../../actions/rooms'
import { StyledPaper, StyledForm, StyledInput, StyledButton, StyledInputWrapper, StyledLabel, StyledTextField } from '../../styledComponents'
import DataApi from '../../api/DataApi'
import { createUserId, getRoomEquipment } from '../../helpers'

export const RoomForm = (props) => {
  const { close, type, data, user } = props
  const dispatch = useDispatch()
  const dataApi = new DataApi()

  const userIdAdded = createUserId(user)

  const [title, setTitle] = React.useState(type === 'new' ? '' : data.title)
  const [singleBeds, setSingleBeds] = React.useState(type === 'new' ? '' : data.roomData.singleBeds)
  const [doubleBeds, setDoubleBeds] = React.useState(type === 'new' ? '' : data.roomData.doubleBeds)
  const [desc, setDesc] = React.useState(type === 'new' ? '' : data.roomData.desc)
  const [roomEquip, setRoomEquip] = React.useState(type === 'new' ? getRoomEquipment() : data.roomData.roomEquip)

  const room = {
    id: type === 'new' ? uuid() : data.id,
    title: title,
    height: 30,
    stackItems: false,
    roomData: {
      singleBeds: singleBeds,
      doubleBeds: doubleBeds,
      desc: desc,
      roomEquip: roomEquip
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
    dataApi.addData(userIdAdded, 'rooms', room)
      .then((resp) => {
        const newID = resp.name
        const newData = { ...room, id: newID }
        dataApi.editData(userIdAdded, 'rooms', newID, newData)
        dispatch(addRoomDataAction(newData))
      })
    close()
  }

  const handleChange = (e) => {
    e.preventDefault()
    dataApi.editData(userIdAdded, 'rooms', data.id, room)
    dispatch(editRoomDataAction(room))
    close()
  }

  const handleChangeCheckbox = (e) => {
    const copyRoomEquip = [...roomEquip]
    const equipment = copyRoomEquip.map(item => {
      if (e.target.value === item.name) {
        item.checked = !item.checked
      }

      return item
    })

    setRoomEquip(equipment)
  }

  return (
    <StyledPaper className={'paper-room'}>
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
        className={'room-form'}
        onSubmit={type === 'new' ? handleSubmit : handleChange}
      >
        <StyledInputWrapper className={'room-form--wrapper'}>
          <h5>Dane na temat pokoju</h5>
          <FormElement
            title = {'Nazwa'}
            name={'title'}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={'input--short'}
            required
          />
          <FormElement
            title = {'Ilość łóżek pojedynczych'}
            name={'singleBeds'}
            onChange={(e) => setSingleBeds(e.target.value)}
            value={singleBeds}
            min={0}
            type={'number'}
            className={'input--number'}
          />
          <FormElement
            title = {'Ilość łóżek podwójnych'}
            name={'doubleBeds'}
            onChange={(e) => setDoubleBeds(e.target.value)}
            value={doubleBeds}
            min={0}
            type={'number'}
            className={'input--number'}
          />
          <StyledInputWrapper>
            <StyledLabel htmlFor={'roomEquipment'}>
              Wyposażenie:

            </StyledLabel>
            <FormGroup
              className={'checkbox-grid'}
              row
              name={'roomEquipment'}
            >{roomEquip.map(item => {
              return (
                <FormControlLabel
                  key={item.name}
                  control={<Checkbox
                    value={item.name}
                    checked={item.checked}
                    icon={<item.icon/>}
                    checkedIcon={<item.checkedIcon/>}
                    onChange={handleChangeCheckbox}
                           />}
                  label={item.name}
                />
              )
            })}
            </FormGroup>
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor={'desc'}>
              Informacje dodatkowe:
            </StyledLabel>
            <StyledTextField
              name={'desc'}
              label={'Informacje dodatkowe:'}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </StyledInputWrapper>

        </StyledInputWrapper>
        <div>
          <StyledButton
            className={'button-reservation--form add-room1'}
            variant={'contained'}
            type={'submit'}
          >{type === 'new' ? 'DODAJ' : 'ZMIEŃ'}
          </StyledButton>
          <StyledButton
            className={'button-reservation--form add-room2'}
            variant={'outlined'}
            onClick={close}
          >ANULUJ
          </StyledButton>
        </div>

      </StyledForm>

    </StyledPaper>
  )
}

RoomForm.propTypes = {
  close: PropTypes.func,
  type: PropTypes.oneOf(['new', 'edit']),
  data: PropTypes.object,
  user: PropTypes.string
}

export default RoomForm
