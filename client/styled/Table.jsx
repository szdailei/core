/* eslint-disable react/prop-types */
import React from 'react';
import classes from './Table.module.css';

const TH = React.forwardRef(({ ...rest }, ref) => <th {...rest} ref={ref} />);

const TD = React.forwardRef(({ ...rest }, ref) => <td {...rest} ref={ref} />);

const TR = React.forwardRef(({ className, ...rest }, ref) => (
  <tr className={`${classes.tr} ${className}`} {...rest} ref={ref} />
));

const THead = React.forwardRef(({ ...rest }, ref) => <thead {...rest} ref={ref} />);

const TBody = React.forwardRef(({ ...rest }, ref) => <tbody {...rest} ref={ref} />);

const Table = React.forwardRef(({ className, ...rest }, ref) => (
  <table className={`${classes.table} ${className}`} {...rest} ref={ref} />
));

export { TH, TD, TR, THead, TBody, Table };
