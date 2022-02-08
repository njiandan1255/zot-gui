// react global
import * as React from 'react';
import PropTypes from 'prop-types';

// components
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row(props) {
  const {data, row} = props;
  const tags = data && data.tags;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {row.Tag}
        </TableCell>
        <TableCell />
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h7" gutterBottom component="div">
                {
                  // Layers
                }
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Size</TableCell>
                    <TableCell>Digest</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.Layers.map((layer) => (
                    <TableRow key={layer.Digest}>
                      <TableCell component="th" scope="row">
                        {layer.Size}
                      </TableCell>
                      <TableCell>{layer.Digest}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    Layers: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        Digest: PropTypes.string.isRequired,
        Size: PropTypes.string.isRequired,
      }),
    ).isRequired,
    Tag: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};


const renderTags = (tags) => {
  const cmp = tags && tags.map((tag, index) => {
      return (
          <Row key={tag.Tag} row={tag} />
      );
  });
  return cmp;
}


export default function CollapsibleTable(props) {
  const {data} = props;
  // TODO: update this when the api is updated
  // const {tags} = data;
  const tags = data && data[0] && data[0].tags;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>  <Typography variant="h6" gutterBottom component="div">Tags</Typography></TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {renderTags(tags)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
