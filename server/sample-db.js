const Product = require("./model/product");

class SampleDb {
  constructor() {
    this.products = [
      {
        coverImage: "../../assets/img/phone-cover.jpg",
        name: "Phone XL",
        price: 799,
        description: "A large phone with one of the best screens",
        heading1: "サンプルテキスト1",
        heading2: "サンプルテキスト2",
        heading3: "サンプルテキスト3",
        headingText1: "これはPhone XLだよ1",
        headingText2: "これはPhone XLだよ2",
        headingText3: "これはPhone XLだよ3",
      },
      {
        coverImage: "../../assets/img/phone-cover.jpg",
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras",
        heading1: "サンプルテキスト1",
        heading2: "サンプルテキスト2",
        heading3: "サンプルテキスト3",
        headingText1: "これはPhone Miniだよ1",
        headingText2: "これはPhone Miniだよ2",
        headingText3: "これはPhone Miniだよ3",
      },
      {
        coverImage: "../../assets/img/phone-cover.jpg",
        name: "Phone Standard",
        price: 299,
        description: "",
        heading1: "サンプルテキスト1",
        heading2: "サンプルテキスト2",
        heading3: "サンプルテキスト3",
        headingText1: "これはPhone Standardだよ1",
        headingText2: "これはPhone Standardだよ2",
        headingText3: "これはPhone Standardだよ3",
      },
      {
        coverImage: "../../assets/img/phone-cover.jpg",
        name: "Phone Special",
        price: 999,
        description: "",
        heading1: "サンプルテキスト1",
        heading2: "サンプルテキスト2",
        heading3: "サンプルテキスト3",
        headingText1: "これはPhone Specialだよ1",
        headingText2: "これはPhone Specialだよ2",
        headingText3: "これはPhone Specialだよ3",
      },
    ];
  }

  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb();
  }

  async cleanDb() {
    await Product.deleteMany({});
  }

  pushProductsToDb() {
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    });
  }
}

module.exports = SampleDb;
