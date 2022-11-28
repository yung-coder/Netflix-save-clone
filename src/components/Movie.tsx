import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { auth, firestore } from "../client";
import Loader from "./Loader";
type MovieProps = {
  movie: any;
  Loading: boolean;
};

const Movie: React.FC<MovieProps> = ({ movie, Loading }) => {
  const [user, loading, error] = useAuthState(auth);
  const [saved, setsaved] = useState(false);
  const [like, setLike] = useState(false);

  const movieID = doc(firestore, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user) {
      setLike(!like);
      setsaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
          like: true,
        }),
      });
    } else {
      alert("Please log in to save a movie");
    }
  };
  return (
    <>
      {Loading ? (
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-3">
          <Loader />
        </div>
      ) : (
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-3">
          <img
            className="w-full h-auto block"
            src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
            <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
              {movie?.title}
            </p>
            <div onClick={saveShow}>
              {like ? (
                <FaHeart className="absolute top-4 left-4 text-gray-300" />
              ) : (
                <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Movie;
