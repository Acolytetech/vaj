import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ComponentName from './ComponentName'; // Replace with the actual path to your component
import { Home } from '@mui/icons-material';

test('it should contain an h1 tag', () => {
    const { container } = render(<Compo/>);
    const h1 = container.querySelector('h1');
    expect(h1).toBeInTheDocument();
});
