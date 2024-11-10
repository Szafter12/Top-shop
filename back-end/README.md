This folder contains a simple server which allows us to read the list of folders and notes. It also allows you to create new folders and notes and to edit existing notes.

To run the server, call the following commands in a terminal at the `back-end` folder level:

```command
npm i
npm run dev
```

You can also call the same commands the folder above - then you will run the server and the frontend project at the same time.

### Data model

#### Products

The items returned and written to the server have the following fields:

```json
{
    "id": 1,
    "gender": "men",
    "category": "odziez",
    "subcategory": "koszulki",
    "productName": "T-Shirt",
    "brand": "Top Brand",
    "pricePLN": 49,
    "priceUSD": 10,
    "photos": [
        "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
        "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
        "http://localhost:3000/product-photos/man-t-shirt-3.jpg"
    ],
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
    "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
},
```

#### Favourite products

The items returned and saved to the server have the following fields:
```json
{
    "productId": 1
}
```

### Endpoint description

| Path               | Method | How does it works                                                                                    |
| --------------------- | ------ | ---------------------------------------------------------------------------------------------- |
| /products             | `GET`  | Wyszstkie produkty                                                                             |
| /women/bestsellers    | `GET`  | Pobiera bestsellery z kategorii "Kobieta"                                                      |
| /men/bestsellers      | `GET`  | Pobiera bestsellery z kategorii "Mężczyzna"                                                    |
| /children/bestsellers | `GET`  | Pobiera bestsellery z kategorii "Dzięci"                                                       |
| /products             | `GET`  | Pobiera wszystkie produkty.                                                                    |
| /favourites           | `GET`  | Pobiera wszystkie produkty dodane do listy ulubionych                                          |
| /favourites           | `POST` | Dodaje produkt do listy ulubionych. Wymagania przesłania body z ID produktu np: {productId: 1} |

### Examples of use

<details>
 <summary> [GET] - <i>/products</i>  </summary>
<br>
Calling:

```js
fetch('http://localhost:3000/products`)
    .then(res => res.json())
    .console.log(res => res.json());
```

Console:

```js
[
    {
        id: 1,
        gender: "men",
        category: "odziez",
        subcategory: "koszulki",
        productName: "T-Shirt",
        brand: "Top Brand",
        pricePLN: 49,
        priceUSD: 10,
        photos: [
            "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
            "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
            "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
        ],
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
        maintenanceInfo:
            "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
    {
        id: 2,
        gender: "men",
        category: "odziez",
        subcategory: "koszulki",
        productName: "T-Shirt",
        brand: "Top Brand",
        pricePLN: 49,
        priceUSD: 10,
        photos: [
            "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
            "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
            "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
        ],
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
        maintenanceInfo:
            "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
    },
];
```

</details>
