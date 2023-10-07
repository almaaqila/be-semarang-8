const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require('./db/index_db')
const Product = db.product;
const Order = db.order;
const OrderProduct = db.orderProduct;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json.
app.use(bodyParser.json());


app.get("/api/products", async (req, res) => {
  try {
    const product_get = await Product.findAll();
    res.status(200).json({
      success: true,
      message: "Data fetched successful!",
      data: product_get,
    });
  
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "unsuccessful"
    });
  }
});

app.post("/api/products", async (req, res) => {
  const value = req.body;
  try {
    const product_post = await Product.create(value); //insert value
    res.status(200).json({
      success: true,
      message: "successful!",
      data: product_post,    
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "unsuccessful"
    });
  }
});

// rest API order
app.post('/api/order', async (req, res) => {
  const orderValue = req.body;
  try {
      const order_post = await Order.create(orderValue); 
      const orderProducts = [];
      
      for (const productData of orderValue.products) {
          const orderProduct = {
              orderId: order_post.id,
              productName: productData.productName, 
              quantity: productData.quantity,
              satuan: productData.satuan,
          };
          orderProducts.push(orderProduct);
      }

      await OrderProduct.bulkCreate(orderProducts);

      res.status(200).json({
          success: true,
          message: 'successful!',
          data: {
              nama: order_post.name,
              alamat: order_post.address,
              notelp: order_post.phone,
              email: order_post.email,
              provinsi: order_post.province,
              kota: order_post.city,
              kecamatan: order_post.district,
              kpos: order_post.postalcode,
              products: orderValue.products,
          },
      });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: 'unsuccessful',
      });
  }
});

app.get('/api/order', async (req, res) => {
  try {
    const order_get = await Order.findAll(
      {
      include: [OrderProduct], 
    });
    res.status(200).json({
      success: true,
      message: "Data fetched successful!",
      data: order_get,
    });
  
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "unsuccessful"
    });
  }
});

const port = 3000;
async function startdb(){
  try { //ketika db terkoneksi, run app
    await db.sequelize.sync();
    console.log("db connected");
    app.listen(port, () => console.log(`listening on port ${port}!`));

  } catch (error) {
    console.log("db not connected");
  }
};

startdb();