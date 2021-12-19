import React from 'react'
import Header from "../Components/Header";
import FooterO from "../Components/FooterO";
import SearchForOthers from "../Components/SearchForOthers";
import { Project } from '../Components/Project';

export const Search = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <Header />
      <SearchForOthers />
            <Project />
      <FooterO />
        </div>
    )
}
