'use client';
// REACT & REACT LIBS
import { useState } from 'react';
// COMPONENTS
import ContactHeader from "./ContactHeader";
import ContactContent from './ContactContent';
import GeneralContact from './Pages/GeneralContact';

export default function ContactPage(){

    const [page, setPage] = useState(0);

    function handlePage(event){
        let index = parseInt(event.target.value);
        setPage(index);
    }

    const ComponentsArray = [
        <GeneralContact />,
    ]

    return (
        <div className="my-8 flex">
            <div className="flex flex-col w-full">
                <ContactHeader currentPage={page} handlePage={handlePage} />
                <ContactContent currentPage={page}>
                    {ComponentsArray[page]}
                </ContactContent>
            </div>
        </div>
    )
}