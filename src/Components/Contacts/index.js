import React from 'react';
import { FiInstagram } from 'react-icons/fi'
const DEFAULT_ICON = FiInstagram

export function Contact({url = "https://google.com", component = DEFAULT_ICON, color = "white", size = "35px"}) {
    const Icon = component
    return (
        <a href={url} target="_blank">
            <Icon color={color} size={size}/>
        </a>
    )
}