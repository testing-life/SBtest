import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Text from './Text';

describe('Heading Component', () => {
  it('renders as h1 when renderAs is h1', () => {
    render(<Text renderAs='h1' text='Test Heading' />);
    const headingElement = screen.getByText('Test Heading');
    expect(headingElement.tagName).toBe('H1');
  });

  it('renders as h2 when renderAs is h2', () => {
    render(<Text renderAs='h2' text='Test Heading' />);
    const headingElement = screen.getByText('Test Heading');
    expect(headingElement.tagName).toBe('H2');
  });

  it('renders as h3 when renderAs is h3', () => {
    render(<Text renderAs='h3' text='Test Heading' />);
    const headingElement = screen.getByText('Test Heading');
    expect(headingElement.tagName).toBe('H3');
  });

  it('applies the correct className based on styleAs prop', () => {
    render(<Text renderAs='h1' styleAs='h2' text='Test Heading' />);
    const headingElement = screen.getByText('Test Heading');
    expect(headingElement).toHaveClass('h2');
  });

  it('renders as p by default when renderAs is not provided', () => {
    render(<Text text='Test Paragraph' />);
    const headingElement = screen.getByText('Test Paragraph');
    expect(headingElement.tagName).toBe('P');
  });

  it('does not apply any className when styleAs is not provided', () => {
    render(<Text text='Test Paragraph' />);
    const headingElement = screen.getByText('Test Paragraph');
    expect(headingElement.className).toBe('para ');
  });
});
