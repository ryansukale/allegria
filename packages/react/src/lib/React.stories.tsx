import type { Meta } from '@storybook/react';
import { React } from './React';

const Story: Meta<typeof React> = {
  component: React,
  title: 'React',
};
export default Story;

export const Primary = {
  args: {},
};
