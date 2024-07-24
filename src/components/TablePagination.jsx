/* eslint-disable react/prop-types */

const TablePagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleSetPage = (e) => {
    const newPage = e.target.value;
    if (newPage >= 1 && newPage <= totalPages) setCurrentPage(newPage);
  };

  return (
    <div className="table-pagination-container">
      <button
        className="table-pagination-item"
        onClick={() => setCurrentPage(1)}
        disabled={currentPage === 1}
      >
        Start
      </button>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        ⬅️ Previous
      </button>
      <span className="table-pagination-item">
        Page{" "}
        <input
          type="number"
          min={1}
          max={totalPages}
          onChange={handleSetPage}
          value={currentPage}
        />{" "}
        of {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next ➡️
      </button>
      <button
        className="table-pagination-item"
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        End
      </button>
    </div>
  );
};

export default TablePagination;
