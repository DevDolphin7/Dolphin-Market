import axios from "axios";

const ncMarketApi = axios.create({
  baseURL: "https://fe-nc-marketplace-api-2.onrender.com/api",
});

export function getItems(category_name) {
  return ncMarketApi
    .get("/items", { params: { category_name } })
    .then(({ data }) => {
      data.items.sort((item) => item.item_id);
      console.log(data.items)
      return data.items;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}
