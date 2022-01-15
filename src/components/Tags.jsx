import * as React from 'react';
import PropTypes from 'prop-types';
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
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.tagID}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Layers
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Size</TableCell>
                    <TableCell>Digest</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.digest}>
                      <TableCell component="th" scope="row">
                        {historyRow.size}
                      </TableCell>
                      <TableCell>{historyRow.digest}</TableCell>
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
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        digest: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
      }),
    ).isRequired,
    tagID: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};


const renderTags = (tags) => {
  const cmp = tags && tags.map((tag, index) => {
      //TODO: get manifest info from api
      tag.history = [
        {
          size: '55.68 MB',
          digest: 'sha256:ae8af79595f66d9fc882fa2061d275a19c5d2ef7ef3c014a503dbb6f292b3f40',
        },
        {
          size: '59.45 MB',
          digest: 'sha256:73cd1a9ab86defeb5e22151ceb96b347fc58b4318f64be05046c51d407a364eb',
        },
        {
          size: '209.93 MB',
          digest: 'sha256:1877ad2affcab205d732d9124c5f8181a04cb6aabca560b66d5b66aa56edf96b',
        },
        {
          size: '113.72 MB',
          digest: 'sha256:d07708b7535d9aa799a5bd7a467d4b2df41a191399b46e2b6abfbfc331aa5e9a',
        },
      ];

      return (
          <Row key={tag.tagID} row={tag} />
      );
  });
  return cmp;
}


export default function CollapsibleTable(props) {
  const {data} = props;
  // const tags = data && data.tags;
  const tags = [{tagID: 'latest'}, {tagID: '2.0.1'}, {tagID: '2.0.2a'}];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Tags</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderTags(tags)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
