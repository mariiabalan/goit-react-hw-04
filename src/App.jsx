import { useEffect, useState } from "react";
import "./App.css";
import { fetchPhotos } from "./services/api";
import ErrorMessage from "./components/ErrorMessage/ErroreMessage";
import ImageGalery from "./components/ImageGallery/ImageGalery";

import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (query.trim() === "") {
        return;
      }
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchPhotos(page, query);
        setPhotos((prev) => [...prev, ...data.results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [page, query]);

  return (
    <div>
      <Toaster />
      <SearchBar setQuery={setQuery} />
      {!!photos.length && <ImageGalery photos={photos} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage message={isError} />}
      {query && <LoadMoreBtn setPage={setPage} />}
    </div>
  );
};

export default App;
