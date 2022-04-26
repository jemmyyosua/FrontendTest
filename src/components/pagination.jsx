import React from 'react'
import ReactPaginate from 'react-paginate'
import { Icon } from '@iconify/react';

export default function Pagination({books, number, page}) {
    const pageCount = Math.ceil(books.length / page);

    const changePage = ({ selected }) => {
      number(selected);
    };
  return (
      <div className='px-16'>
          <ReactPaginate
            previousLabel={<Icon icon="fluent:arrow-previous-24-filled" color="black" />}
            nextLabel={<Icon icon="fluent:arrow-next-12-regular" color="black" />}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"flex justify-center text-xl gap-6"}
            previousLinkClassName={"text-3xl"}
            nextLinkClassName={"text-3xl"}
            disabledClassName={"text-3xl"}
            activeClassName={'font-medium fw-bolder'}
          />
      </div>
  )
}
