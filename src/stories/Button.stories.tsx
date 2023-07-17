import Button from '@components/Button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
    component: Button,
    argTypes: {
        color: {
            options: ['success', 'danger', 'warning', 'info', 'light', 'dark', 'link'],
            control: { type: 'select' }
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' }
        },
        round: {
            control: { type: 'boolean' }
        },
        disabled: {
            control: { type: 'boolean' }
        },
        source: {
            options: ['emoji', 'icon', false],
            control: { type: 'radio' }
        },
        emoji: {
            control: { type: 'text' }
        },
        icon: {
            control: { type: 'text' }
        },
        iconSize: {
            options: ['xl', '2xl'],
        },
        children: {
            control: { type: 'text' }
        }
    }
}

export default meta;
type Story = StoryObj<typeof Button>;

export const InteractionButton: Story = {
    args: {
        color: 'link',
        children: 'Click me!'
    }
}

export const InfoButton: Story = {
    render: () => <div>
        {['success', 'warning', 'danger', 'info', 'light', 'dark', 'link'].map(color => <Button color={color as any} key={color}>{color}</Button>)}
    </div>
}

export const SizeButton: Story = {
    render: () => <div>
        {['small', 'medium', 'large'].map(size => <Button size={size as any} key={size}>{size}</Button>)}
    </div>
}

export const IconButton: Story = {
    render: () => <div>
        {['i-twemoji-headphone', 'i-icon-park-concept-sharing', 'i-streamline-emojis-cow-face'].map(
            icon => <Button source="icon" icon={icon} key={icon} iconSize="2xl" />
        )}
    </div>
}

export const ColorIconButton: Story = {
    render: () => <div>
        {
            ['success', 'warning', 'danger', 'info', 'light', 'dark', 'link'].map(
                color => {
                    const sizes = ['small', 'medium', 'large'];
                    return sizes.map(size => {
                        const icons = ['i-twemoji-headphone', 'i-icon-park-concept-sharing', 'i-streamline-emojis-cow-face'];
                        return <div>
                            {
                                icons.map(icon => <Button source="icon" icon={icon} key={icon} iconSize="2xl" color={color as any} size={size as any} />)
                            }
                        </div>
                    })
                }
            )
        }
    </div>
}