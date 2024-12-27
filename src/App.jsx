import { useState, useEffect } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API_KEY = "zKbEmOTumiq6bcRgNOFKq2wxoz95nHdp1lpOEviJJUI";
  const UNSPLASH_URL = "https://api.unsplash.com/search/photos";

  // Функция для получения изображений из API
  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(UNSPLASH_URL, {
        params: { query, page, per_page: 12 },
        headers: {
          Authorization: `Client-ID ${API_KEY}`,
        },
      });
      setImages((prevImages) => [...prevImages, ...response.data.results]);
    } catch (err) {
      // Мы больше не используем setError, потому что ошибка не обрабатывается
      console.error("Failed to fetch images:", err);
    } finally {
      setLoading(false);
    }
  };

  // Эффект для получения изображений при изменении поискового запроса
  useEffect(() => {
    if (query) {
      setImages([]);
      setPage(1);
      fetchImages();
    }
  }, [query]);

  // Обработчик отправки формы поиска
  const handleSearchSubmit = (query) => {
    setQuery(query);
  };

  // Обработчик для кнопки "Загрузить больше"
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Открытие модального окна с изображением
  const openModal = (image) => {
    if (image) {
      setSelectedImage(image);
      setIsModalOpen(true);
    }
  };

  // Закрытие модального окна
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {loading && <Loader />}
      <ImageGallery images={images} onImageClick={openModal} />
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage} // Передаем selectedImage, который может быть null
      />
      <Toaster />
    </div>
  );
};

export default App;
