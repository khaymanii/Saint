import { useState, useMemo, useEffect } from "react";

export function usePagination<T>(data: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, currentPage, itemsPerPage]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const next = () => goToPage(currentPage + 1);
  const prev = () => goToPage(currentPage - 1);

  // reset page when data changes (VERY IMPORTANT)
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  return {
    currentPage,
    totalPages,
    paginatedData,
    goToPage,
    next,
    prev,
  };
}
