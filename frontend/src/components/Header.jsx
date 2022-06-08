import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <AppBar sx={{ background: "#15133C" }}>
            <Toolbar>
                <Typography variant='h4'>BLOOG</Typography>
                <Box display="flex" marginLeft="auto">
                    <Button variant='contained' sx={{ margin: 1, borderRadius: 0.5 }} >
                        Login
                    </Button>
                    <Button variant='contained' sx={{ margin: 1, borderRadius: 0.5 }}>
                        Signup
                    </Button>

                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header