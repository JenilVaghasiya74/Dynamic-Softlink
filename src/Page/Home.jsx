import React from 'react';
import Cart from '../Components/Cart';
import Counter from '../Components/Counter';
import Filter from '../Components/Filter';
import Filter_2 from '../Components/Filter_2';
import Section_s1 from '../Components/Section_s1';
import Section_s2 from '../Components/Section_s2';

const Home = () => {
    return (
        <div>
            {/* ===  Section 1 === */}
            <Section_s1 />
            {/* ===  Section 2 === */}
            <Section_s2 />
            {/* === Counter === */}
            <Counter />
            {/* === Filter 1 === */}
            <Filter />
            {/* === Filter 2 === */}
            <Filter_2 />
            {/* Cart section */}
            <Cart />
         
        </div>
    );
};

export default Home;
