const INITIAL_STATE = {
  sections: [
    {
      title: "jeans",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0445/1681/products/levisss_001.JPG",
      id: 1,
      linkUrl: "shop/jeans",
    },
    {
      title: "jackets",
      imageUrl:
        "https://img.joomcdn.net/c7910393e8c828a4b91455049930183063a64115_original.jpeg",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://sneakernews.com/wp-content/uploads/2021/02/sacai-Nike-Blazer-Low-White-Grey-DD1877-002-5.jpg",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://fashion.luxury/wp-content/uploads/2018/06/6-Womens-Clothing-Boutiques-in-New-York-City-fashion-feature.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://static.citylifestyle.com/articles/simple-and-sophisticated-style-for-the-fashion-forward-man/September%20Issue-39-900.jpg?v=1",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
