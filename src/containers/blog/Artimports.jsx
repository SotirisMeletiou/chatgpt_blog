import React from 'react'
import { blog01 ,blog02, blog03, blog04, blog05 } from './import';
import {Article} from '../../components';

export const ArtimportsA = () => {
    return (
      <>
        <Article imgUrl={blog01} date="May 05, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </>
    )
  }


 export const ArtimportsB = () => {
  return (
    <>
        <Article imgUrl={blog02} date="May 05, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="May 05, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="May 05, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="May 05, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
    </>
  )
}
