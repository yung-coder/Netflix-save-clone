import axios from "axios";
import React, { useEffect, useState } from "react";
import { Movies } from '../types';
import Movie from "./Movie";
type RowProps = {
  title: string;
  endpoint: {};
};

const Row: React.FC<RowProps> = ({ title, endpoint }) => {
  const [movies, setmovies] = useState([]);
  const [Loading, setLoading] = useState(false);

  const fecthupcomming = () => {
    setLoading(true);
    axios.get(`${endpoint}`).then((response) => {
      setmovies(response.data.results);
    });
    setLoading(false);
  };
  useEffect(() => {
    fecthupcomming();
  }, []);

  return (
    <div>
      <div className="text-white p-4">
        <h1 className="text-xl font-bold italic md:text-3xl">{title}</h1>
        <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative p-5">
          {movies.map((movie: Movies) => {
            return <Movie movie={movie} Loading={Loading} key={movie.id}/>;
          })}
        </div>
      </div>
    </div>
  );
};
export default Row;
