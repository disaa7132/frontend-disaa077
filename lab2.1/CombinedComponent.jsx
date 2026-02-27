import React from 'react';
import ItemList, { items } from './ItemList';
export default function CombinedComponent() {
    return (
        <>
        <h2>My Items Title</h2>
        <ItemList />
        </>
    );
}