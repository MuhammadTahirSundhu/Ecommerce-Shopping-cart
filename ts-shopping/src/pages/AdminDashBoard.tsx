import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCardIcon from '@mui/icons-material/AddCard';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import ViewListIcon from '@mui/icons-material/ViewList';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import WelcomeAdmin from '../components/AdminDashboardComponents/WelcomeAdmin.tsx'
import AddItemToCollection from '../components/AdminDashboardComponents/AddItemToCollection.tsx'
import DeleteItemFromCollection from '../components/AdminDashboardComponents/DeleteItemFromCollection.tsx';
import UpdateItemInYourCollection from '../components/AdminDashboardComponents/UpdateItemInYourCollection.tsx';
import ItemCatagories from '../components/AdminDashboardComponents/ItemCatagories.tsx';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function AdminDashBoard() {
  document.body.style.backgroundColor = "black";

  //Sates for conditional rendering of components
  const [Welcome, setWelcome] = React.useState(true) //1
  const [Add, setAdd] = React.useState(false)//2
  const [Delete, setDelete] = React.useState(false)//3
  const [Update, setUpdate] = React.useState(false)//4
  const [Catagory, setCatagory] = React.useState(false)//5


  function setStates(currState:any) {
    setWelcome(false);
    setAdd(false);
    setDelete(false);
    setUpdate(false);
    setCatagory(false);
    currState(true);

    // console.log(Update);

  }

  const renderList1Icon = (index: number) => {
    switch (index) {
      case 0:
        return <AddCardIcon onClick={() => { setStates(setAdd) }} />;
      case 1:
        return <DeleteIcon onClick={() => { setStates(setDelete) }} />;
      case 2:
        return <UpdateIcon onClick={() => { setStates(setUpdate) }} />;
      default:
        return <ViewListIcon onClick={() => { setStates(setCatagory) }} />;
    }
  };
  const renderList2Icon = (index: number) => {
    switch (index) {
      case 0:
        return <CreateNewFolderIcon />;
      case 1:
        return <EventBusyIcon />;
      case 2:
        return <LogoutRoundedIcon />;
    }
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);

  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Add Item', 'Delete Item', 'Update Item', 'Catagories'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}

              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {renderList1Icon(index)}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Add New Catagory', 'Delete Catagory', 'Logout'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {renderList2Icon(index)}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <>
          {Welcome && <WelcomeAdmin />}
          {Add && <AddItemToCollection open={open} />}
          {Delete && <DeleteItemFromCollection />}
          {Update && <UpdateItemInYourCollection />}
          {Catagory && <ItemCatagories />}
        </>
      </Box>
    </Box>
  );
}































// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AddItem , setIsdelete, setIsUpdate } from '../features/itemSlice';
// import { RootState } from '../store/store';
// import { nanoid } from '@reduxjs/toolkit';

// interface Item {
//   id: string;
//   name: string;
//   description: string;
//   catagory:string;
//   price: number;
//   quantity: number;
//   isAvailable: boolean;
//   discount: string;
//   company:string;
//   reviews?: number;
//   img:string;
// }

// function AdminDashBoard() {
//   const dispatch = useDispatch();
//   const items = useSelector((state: RootState) => state.items.items);
//   // const isdelete = useSelector((state:RootState)=>state.items.isdelete);

//   function addItem() {
//     dispatch(setIsdelete(false));
//     dispatch(setIsUpdate(false));

//     const newItem: Item = {
//       id: nanoid(),
//       name: 'Shoes',
//       description: 'Adidas is the best shoes compnay in the world right now you should try it oncde and if you will not satisfy the company will pay you back!.',
//       catagory:'shoes',
//       price: 5500,
//       quantity: 100,
//       isAvailable: true,
//       discount: '10',
//       company:"Addidas",
//       reviews: 5,
//       img:"../assets/shoes.jpg"
//     };
//     dispatch(AddItem(newItem));
//   }

//   function deleteItem(){
//     dispatch(setIsUpdate(false));
//     dispatch(setIsdelete(true));
//   }

//   function displayItems() {
//     console.log('all items are: ', items);
//   }

//   function update(){
//     dispatch(setIsUpdate(true));
//     dispatch(setIsdelete(false));
//   }
//   return (
//     <>
//       <button onClick={addItem}>Add</button>
//       <button onClick={deleteItem}>delete</button>
//       <button type="button" onClick={displayItems}>Display</button>
//       <button onClick={update}>Update</button>
//     </>
//   );
// }

// export default AdminDashBoard;
