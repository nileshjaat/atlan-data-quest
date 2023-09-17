import React from 'react';
import {
  Divider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ShowToastMessage from './ShowToastMessage';

const SqlQueries = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    ShowToastMessage('success', 'Query copied to clipboard');
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
        <IntegrationInstructionsIcon />
        <Typography>Available Queries</Typography>
      </div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Copy from here</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            SELECT * from users;&nbsp;
            <IconButton onClick={() => copyToClipboard(`SELECT * from users;`)}>
              <ContentCopyIcon />
            </IconButton>
          </Typography>
          <Divider />
          <Typography>
            SELECT * from users where gender="Male";&nbsp;
            <IconButton
              onClick={() =>
                copyToClipboard(`SELECT * from users where gender="Male";`)
              }
            >
              <ContentCopyIcon />
            </IconButton>
          </Typography>
          <Divider />
          <Typography>
            SELECT * from users where gender="Female";&nbsp;
            <IconButton
              onClick={() =>
                copyToClipboard(`SELECT * from users where gender="Female";`)
              }
            >
              <ContentCopyIcon />
            </IconButton>
          </Typography>
          <Divider />
          <Typography>
            SELECT * from users where id BETWEEN 250 AND 475;&nbsp;
            <IconButton
              onClick={() =>
                copyToClipboard(
                  `SELECT * from users where id BETWEEN 250 AND 475;`
                )
              }
            >
              <ContentCopyIcon />
            </IconButton>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SqlQueries;
