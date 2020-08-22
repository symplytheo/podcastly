import React, { useState } from 'react'
import axios from 'axios'
import { 
  Box, Typography, List, ListItem, ListItemText, ListItemIcon 
} from '@material-ui/core'


export default function Blog() {
  const [posts, setPosts] = useState([])

  React.useEffect(() => {
    axios.get('https://my-json-server.typicode.com/symplytheo/json-rest-api/posts')
      .then(res => {
        const newPosts = res.data
        setPosts(newPosts)
        //console.log(res)
      })
  }, [])

  return (
    <>
      <Box style={{padding: 25}}>
        <Typography variant="h3" align="center" paragraph>
          <b>Blog</b>
        </Typography>
        <Typography variant="body2" align="center" paragraph>
          [Source: https://my-json-server.typicode.com/symplytheo/json-rest-api/posts]
        </Typography>
        <List>
          {posts.map((post, p) => (
            <ListItem key={p}>
              <ListItemIcon>{p + 1}</ListItemIcon>
              <ListItemText primary={post.title} secondary={post.body} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
}