import type { Meta, StoryObj } from '@storybook/react'

import StampWithText from '../../components/atoms/stamp/stampWithText/StampWithText'

const meta = {
    title: 'Stamp/StampWithText',
    component: StampWithText,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof StampWithText>

export default meta
type Story = StoryObj<typeof meta>

export const Meal: Story = {
    args: {
        text: '食事',
        icon_url: 'emoticon.png',
    },
}

export const Exercise: Story = {
    args: {
        text: '運動',
        icon_url: 'emoticon.png',
    },
}
