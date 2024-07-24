/* eslint-disable react/prop-types */

const TablePagination = ({ page, totalPages, setPage }) => {
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };
  const handleSetPage = (e) => {
    const newPage = e.target.value;
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };
  return (
    <div>
      <button onClick={handlePrevious} disabled={page === 1}>
        Previous
      </button>
      <span>
        Page{" "}
        <input
          type="number"
          min={1}
          max={totalPages}
          onChange={handleSetPage}
          value={page}
        />{" "}
        of {totalPages}
      </span>
      <button onClick={handleNext} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default TablePagination;
