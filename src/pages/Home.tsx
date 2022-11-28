import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../client";
import Head from "../components/Head";
import Row from "../components/Row";
import requests from "../endpoints";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <Head />
      <Row title="Upcomming" endpoint={requests.requestUpcoming} />
      <Row title="Popular" endpoint={requests.requestPopular} />
      <Row title="Trending" endpoint={requests.requestTrending} />
      <Row title="Top Rated" endpoint={requests.requestTopRated} />
      <Row title="Horror" endpoint={requests.requestHorror} />
    </div>
  );
};
export default Home;
