/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  ListItem,
  Heading,
} from 'spectacle';

export const MyListItem = ({ className, children }) => (
  <ListItem padding="10px 0" className={className}>
    {children}
  </ListItem>
);

export const MyHeading = ({ className, children }) => (
  <Heading size={2} caps textFont="secondary" margin="70px 0" className={className}>
    {children}
  </Heading>
);
