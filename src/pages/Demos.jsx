import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const demos = [
  { id: 1, name: 'My First Podcast', desc: 'some description here...' },
  { id: 2, name: 'My Second Podcast', desc: 'some description here...' },
  { id: 3, name: 'My Third Podcast', desc: 'some description here...' },
  { id: 4, name: 'My Fourth Podcast', desc: 'some description here...' }
]

export default function Demos() {
  return (
    <>
      <div style={{padding: 25}}>
        <Typography variant="h3" align="center" paragraph>
          <b>Demos</b>
        </Typography>
        <List>
          {demos.map(demo => (
            <NavLink 
              key={demo.id} 
              to={'/demos/' + demo.id} 
              style={{textDecoration: 'none', color: 'rgba(0,0,0,0.9)'}}
            >
              <ListItem button>
                <ListItemText primary={demo.name} secondary={demo.desc} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    </>
  )
}