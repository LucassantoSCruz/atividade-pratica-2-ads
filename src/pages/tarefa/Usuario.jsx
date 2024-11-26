import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', padding: 2 }}>

      <ListItem alignItems="flex-start">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

          <ListItemAvatar>
            <Avatar alt="Ryan Alves" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>

          <Typography
            variant="h5"
            sx={{ color: 'text.primary', fontWeight: 'bold' }}
          >
            Rian Alves
          </Typography>

        </Box>
      </ListItem>

      <ListItem>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Função: Assistente Geral
        </Typography>
      </ListItem>

      <ListItem>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Email: rian.alves@email.com
        </Typography>
      </ListItem>

      <ListItem>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Telefone: (11) 91234-5678
        </Typography>
      </ListItem>

      <Divider variant="fullWidth" component="li" />
    </List>
  );
}
