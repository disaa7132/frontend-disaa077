import React from 'react';
import FragmentLayout from '../lab2.1/FragmentLayout';
import CombinedComponent from '../lab2.1/CombinedComponent';
import Section from './Section';
import ProductList from './ProductList';
export default function App() {
    return (
        <div>
            <FragmentLayout />
            <hr />
            <CombinedComponent />
            <hr />
            <Section title="Products">
                <ProductList />
            </Section>
        </div>
    );
}