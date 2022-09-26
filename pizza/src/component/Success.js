import React from 'react';
import {Alert} from 'react-bootstrap';

export const Success = (props) => {
  return (
    <div> <Alert variant='success'>
   {props.success}
  </Alert></div>
  )
}
