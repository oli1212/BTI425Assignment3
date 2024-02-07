import useSWR, { SWRConfig } from 'swr';
import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import MovieDetails from '@/components/MovieDetails';
import PageHeader from '@/components/PageHeader';

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const {data, error} = useSWR(`https://fine-puce-dolphin-gown.cyclic.app/api/movies?page=${page}&perPage=10`)

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);
  
    return (
      <>
      <p>Movies</p>
      </>
    );
}
