import React from 'react'
import AlertTitle from '@mui/material/AlertTitle';
import AlertUI from '@mui/material/Alert'
import { Description } from '@mui/icons-material';

function Alert({ Description: string }) {
    return (
        <>
            <AlertUI severity="success" style={{position:"sticky"}}>
                <AlertTitle>Item Deleted</AlertTitle>
                {`${Description}`}
            </AlertUI>
        </>
    );
}

export default Alert