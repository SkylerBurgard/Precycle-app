// import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withStyles, createStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// // This is one of our simplest components
// // It doesn't have local state, so it can be a function component.
// // It doesn't dispatch any redux actions or display any part of redux state
// // or even care what the redux state is, so it doesn't need 'connect()'
// const customStyles = (theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//       textAlign: 'left',
//       margin: `0 0 30px`,
//     },
//     title: {
//       flexGrow: 2,
//     },
//     primaryHdg: {
//       display: 'inline-block',
//       marginRight: '0.8rem',
//     },
//   });

// class SearchPage extends Component {
//   state = {
//     firstName: '',
//     lastName: '',
//   };

//   onFormChange = (input) => (event) => {
//     this.setState(
//       {
//         [input]: event.target.value,
//       },
//       () => {
//         console.log(this.state);
//       }
//     );
//   };
//   onSubmit = (event) => {
//     event.preventDefault();
//     this.props.dispatch({ type: '', payload: this.state });
//   };
//   render() {
//     return (
//       <div>
//         <script
//           async
//           src="https://cse.google.com/cse.js?cx=2587153da13b7fc56"
//         ></script>
//         <div className="gcse-search"></div>

//         <h1>Search commonly recycled items</h1>
//         <form onSubmit={this.onSubmit}>
//           <input
//             type="text"
//             onChange={this.onFormChange('search')}
//             placeholder="Search"
//           />
//           {/* <h4>City & State</h4>
//           <input
//             type="text"
//             onChange={this.onFormChange('city & state')}
//             placeholder="Enter City & State"
//           />
//           <h4>Pick up Day</h4>
//           <input
//             type="text"
//             onChange={this.onFormChange('Pick up day')}
//             placeholder="Day of Week" */}

//           <Button variant="contained">search</Button>
//         </form>
//       </div>
//     );
//   }
// }
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

function SearchPage() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const trashItem = [
    { id: 1, item: 'Plastic' },
    { id: 2, item: 'Food' },
    { id: 3, item: 'batteries' },
    { id: 4, item: 'cardboard' },
    { id: 5, item: 'metal' },
    { id: 6, item: 'glass' },
  ];

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleSearch = (event) => {
    setList(trashItem.filter((el) => el.item.includes(event.target.value)));
    setOpen(true);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      // anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TextField
          id="outlined-basic"
          defaultValue=""
          label="Outlined"
          variant="outlined"
          autoComplete="off"
          onChange={handleSearch}
          onClick={handleToggle}
          // onBlur={() => {
          //   setList([]);
          // }}
          onChange={handleSearch}
        />
        <MenuList>
          {list.slice(0, 5).map((item, index) => {
            return <MenuItem key={item.id}>{item.item}</MenuItem>;
          })}
        </MenuList>
      </Paper>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Toggle Menu Grow
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    {list.map((item, index) => {
                      return (
                        <MenuItem key={item.id} onClick={handleClose}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default connect()(SearchPage);
