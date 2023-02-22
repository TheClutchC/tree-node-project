import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [homePageData, setHomePageData] = useState();

  useEffect(() => {
    fetch(`http://localhost:7000/factory`)
      .then((res) => res.json())
      .then((data) => setHomePageData(data.message));
  }, []);

  return (
    <div>
      <h1>Welcome to Factory API!</h1>
      <h1>{homePageData}</h1>
    </div>
  );
}

export default HomePage;