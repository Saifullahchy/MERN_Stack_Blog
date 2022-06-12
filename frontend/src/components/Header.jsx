import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActions } from '../store';

const Header = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const [value, setValue] = useState();
    return (
        <AppBar
        position= "sticky"    
        sx={{ background: "#15133C" }}>
            <Toolbar>
                <Typography variant='h4'>BLOOG</Typography>
               {
                isLoggedIn &&   <Box display="flex"
                    marginLeft= {'auto'}
                    marginRight= {'auto'}
                     textColor = "inherit"
                >
                    <Tabs value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={Link} to = '/blogs' label="All Blogs"  sx={{color:'#1976D2' }}/>
                        <Tab LinkComponent={ Link} to = '/myBlogs' label="My Blogs"  sx={{color:'#1976D2' }}/>
                        <Tab LinkComponent={ Link} to = '/blogs/add' label="Add Blog"  sx={{color:'#1976D2' }}/>
                    </Tabs>
                </Box>
                }
                <Box display="flex" marginLeft="auto">
                    { !isLoggedIn && <> <Button LinkComponent={Link} to='/auth' variant='contained' sx={{ margin: 1, borderRadius: 0.5 }} >
                        Login
                    </Button>
                    <Button LinkComponent={Link} to='/auth'  variant='contained' sx={{ margin: 1, borderRadius: 0.5 }}>
                        Signup
                    </Button></>}
                   { isLoggedIn && <Button 
                   onClick={ () => dispatch(authActions.logout())}
                   LinkComponent={Link} to='/auth'  variant='contained' sx={{ margin: 1, borderRadius: 0.5 }} >
                        Logout
                    </Button>}

                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header