import { useState, useEffect } from "react";
import Header from "../components/Header";
import Section from "../components/Section/Section";
import { getItems } from "../utils/api";

export default function Browse() {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [browseItems, setBrowseItems] = useState([]);

  // Fetch data to browse
  useEffect(() => {
    setIsLoading(true);
    getItems(category === "" ? undefined : category)
      .then((items) => {
        setBrowseItems(items);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }, [category]);

  return (
    <>
      <Header setCategory={setCategory} />
      {isLoading ? <h1>Loading...</h1> : <Section browseItems={browseItems} />}
    </>
  );
}
