import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import IosShareIcon from '@mui/icons-material/IosShare'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

export default function AlignItemsList() {
  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        flexDirection: 'column',
      }}
    >
      <ListItem sx={{ alignItems: 'flex-start' }}>
        <ListItemAvatar>
          <Avatar src='/static/images/avatar/1.jpg' />
        </ListItemAvatar>
        <ListItemText
          primary='Felipe Cornejo'
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component='span'
                variant='body2'
                color='text.primary'
              >
                @Rulico
              </Typography>
              <br />
              {" I've completed every habit today! Plus extra tasks."}
              <br />
              <br />
              <FavoriteBorderOutlinedIcon
                fontSize='small'
                sx={{ marginLeft: '15%' }}
              />
              <IosShareIcon fontSize='small' sx={{ marginLeft: '25%' }} />
              <ChatBubbleOutlineIcon
                fontSize='small'
                sx={{ marginLeft: '25%' }}
              />
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar src='/static/images/avatar/1.jpg' />
        </ListItemAvatar>
        <ListItemText
          primary='Felipe Cornejo'
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component='span'
                variant='body2'
                color='text.primary'
              >
                @Rulico
              </Typography>
              <br />
              {'Another day fucking my sister! Habits on fire >:)'}
              <br />
              <br />
              <FavoriteBorderOutlinedIcon
                fontSize='small'
                sx={{ marginLeft: '15%' }}
              />
              <IosShareIcon fontSize='small' sx={{ marginLeft: '25%' }} />
              <ChatBubbleOutlineIcon
                fontSize='small'
                sx={{ marginLeft: '25%' }}
              />
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
    </List>
  )
}
