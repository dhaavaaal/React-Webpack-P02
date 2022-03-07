import * as React from 'react';
import { screen, render } from '@testing-library/react';
import TestComponent from '../components/TestComponent';

describe('rendering App', () => {
    test('check text', () => {
        render(<TestComponent />)
    })
})