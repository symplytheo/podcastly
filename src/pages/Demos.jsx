import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const demos = [
  { id: 1, name: 'My first podcast', desc: 'some description here...' },
  { id: 2, name: 'My second podcast', desc: 'some description here...' },
  { id: 3, name: 'My third podcast', desc: 'some description here...' },
  { id: 4, name: 'My fourth podcast', desc: 'some description here...' }
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
            <ListItem 
              button 
              component="a" 
              href={process.env.PUBLIC_URL + '/demos/' + demo.id} 
              key={demo.id}
            >
              <ListItemText primary={demo.name} secondary={demo.desc} />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  )
}