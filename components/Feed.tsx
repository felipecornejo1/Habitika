import Image from 'next/image'
import styles from '../styles/Dashboard.module.scss'

// Material UI
import { Box, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

export default function Feed() {
  const posts = [
    {
      id: 1,
      author: { id: 1, name: 'nebro down', username: 'nebro' },
      msg: 'Finished all my tasks for today! Soy negro y me pega la policia',
    },
    {
      id: 2,
      author: { id: 2, name: 'downkey kong', username: 'rulico' },
      msg: 'Finished all my tasks for today! neBro chupame el pingo',
    },
  ]

  return (
    <Box
      display='flex'
      flexDirection='column'
      className={styles.dashboard__posts}
    >
      <Typography variant='h5'>Feed</Typography>
      <Box display='flex' flexDirection='column'>
        {posts.map((post) => (
          <Box
            key={post.id}
            display='flex'
            flexDirection='row'
            alignItems='start'
            className={styles.dashboard__posts__item}
          >
            <Image
              src='/img/default.jpg'
              width={80}
              height={80}
              style={{
                borderRadius: '50%',
              }}
            />
            <Box display='flex' flexDirection='column' padding={1}>
              <Typography>{post.author.name}</Typography>
              <Typography>@{post.author.username}</Typography>
              <Typography className={styles.dashboard__posts__item__msg}>
                {post.msg}
              </Typography>
              <Box display='flex' className={styles.dashboard__postActions}>
                <FavoriteBorderIcon style={{ fontSize: 'inherit' }} />
                <ShareIcon style={{ fontSize: 'inherit' }} />
                <ChatBubbleOutlineIcon style={{ fontSize: 'inherit' }} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
