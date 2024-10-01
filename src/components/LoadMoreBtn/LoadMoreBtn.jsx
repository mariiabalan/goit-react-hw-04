const LoadMoreBtn = ({ setPage }) => {
  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <>
      <button onClick={handleChangePage}>Load more</button>;
    </>
  );
};

export default LoadMoreBtn;
