'use client';

import React from 'react';
import Image from 'next/image';
import { DOTS, usePagination } from './usePagination';

interface IProp {
  onPageChange: (value: number) => void;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
  className?: string;
  previousBtn: string | React.ReactElement;
  nextBtn: string | React.ReactElement;
  classButton?: string;
  isPage?: boolean;
}

export default function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
  previousBtn,
  nextBtn,
  classButton,
  isPage,
}: IProp) {
  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <nav>
      <ul className={`${className} flex`}>
        <li>
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={onPrevious}
            className={`${classButton} flex items-center gap-2 rounded-lg border px-3 py-2 text-center text-sm font-medium text-white`}
          >
            {previousBtn}
          </button>
        </li>
        {isPage ? (
          <p>
            Page {currentPage} of {lastPage}
          </p>
        ) : (
          paginationRange.map((pageNumber: any, index: number) => {
            if (pageNumber === DOTS) {
              return <li key={index}>&#8230;</li>;
            }
            return (
              <li key={index}>
                <button
                  className={`rounded-lg px-4 py-2 hover:bg-[#EFF4FF] hover:text-[#4480F7] ${
                    currentPage === pageNumber && 'bg-[#EFF4FF] text-[#4480F7]'
                  }`}
                  onClick={() => onPageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            );
          })
        )}
        <li>
          <button
            onClick={onNext}
            disabled={currentPage === lastPage}
            className={`${classButton} flex items-center gap-2 rounded-lg border px-3 py-2 text-center text-sm font-medium text-white`}
          >
            {nextBtn}
          </button>
        </li>
      </ul>
    </nav>
  );
}
