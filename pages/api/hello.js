const fs = require("fs");

export default function handler(req, res) {
  const json_data = fs.readFileSync("pages/api/api-data/hello.json");
  res.status(200).json(JSON.parse(json_data));
}


  // {
  //   "id": "10",
  //   "img": "https://categories.olxcdn.com/assets/categories/olxkz/elektronika-37-2x.png",
  //   "nameCategory": "Животные"
  // },
  // {
  //   "id": "11",
  //   "img": "https://categories.olxcdn.com/assets/categories/olxkz/elektronika-37-2x.png",
  //   "nameCategory": "Отдам даром"
  // },
  // {
  //   "id": "12",
  //   "img": "https://categories.olxcdn.com/assets/categories/olxkz/elektronika-37-2x.png",
  //   "nameCategory": "Товаров и авто"
  // },
  // {
  //   "id": "13",
  //   "img": "https://categories.olxcdn.com/assets/categories/olxkz/elektronika-37-2x.png",
  //   "nameCategory": "Строительство и ремонт"
  // }