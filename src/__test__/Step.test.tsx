import React from 'react';
import { render, screen } from '@testing-library/react';
import Step from '@/components/Step';
import { StepProps } from '@/types/steps.type';
import useWindowSize from '@/hooks/useWindowSize';
import '@testing-library/jest-dom';

jest.mock('@/hooks/useWindowSize');

const steps: StepProps[] = [
    { title: 'Step 1', currentStep: 0, isDone: true },
    { title: 'Step 2', currentStep: 1, isDone: false },
    { title: 'Step 3', currentStep: 2, isDone: false },
];

describe('Step Component', () => {
  test('renders correctly in desktop mode', () => {
    (useWindowSize as jest.Mock).mockReturnValue({ isMobile: false });

    render(<Step steps={steps} currentStep={1} />);

    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });

  test('renders correctly in mobile mode', () => {
    (useWindowSize as jest.Mock).mockReturnValue({ isMobile: true });

    render(<Step steps={steps} currentStep={1} />);

    expect(screen.getByText('Etapa 2 de 3')).toBeInTheDocument();
  });
});