import React from 'react';
import { FiInstagram } from 'react-icons/fi'
import { Link } from './styles'
const DEFAULT_ICON = FiInstagram

export function Contact({url = "https://google.com", component = DEFAULT_ICON, color = "white", size = "35px", }) {

    const Icon = component
    return (
        <Link href={url} target="_blank">
            <Icon color={color} size={size}/>
        </Link>
    )
}