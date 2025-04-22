// BreadcrumbsExample.tsx
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const BreadcrumbsExample: React.FC = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    console.log('Breadcrumb clicked');
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/" onClick={handleClick}>
        Home
      </Link>
      <Link underline="hover" color="inherit" href="/projects" onClick={handleClick}>
        Projects
      </Link>
      <Typography color="text.primary">Project Details</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsExample;
