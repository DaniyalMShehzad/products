 import { useState } from 'react';
import './App.css';
import Cards from './cards';
import Cards2 from './cards2';
function App() {
const [inpValue, setInpValue] = useState("daraz");
const arr = [
    {
      value:"daraz",
      name: "Men Shirt",
      type: "men",
      discpriton: "New Black Shirt For Men",
      imge: "https://sc04.alicdn.com/kf/Hdae17163cb0a4c1fbb300cc754e19e81l.jpg",
      price: "499",
      button:"Add to cart",
    },
    {
      value:"daraz",
      name: "Men Shirt New",
      type: "men",
      discpriton: "New blue Shirt For Men",
      imge: "https://ae01.alicdn.com/kf/HTB1ouCNMVXXXXaOXFXXq6xXFXXXj/New-Autumn-Fashion-Brand-Print-Shirts-Slim-Fit-Shirt-Men-Long-Sleeve-Cotton-Casual-Mens-Shirts.jpg",
      price: "500",
      button:"Add to cart",
    },
    {
      value:"daraz",
      name: "Men's Casual Shirt",
      type: "men",
      discpriton: " Shirt Cotton Long Sleeve Button ",
      imge: "https://i.pinimg.com/originals/e4/5a/43/e45a43655c7502a3b053c0261e2d1ec5.jpg",
      price: "699",
      button:"Add to cart",
    },
    {
      value:"daraz",
      name: "Men Shirt",
      type: "men",
      discpriton: "Mens Formal Shirts For Men Clothes",
      imge: "https://image.dhgate.com/0x0s/f2-albu-g10-M01-F5-61-rBVaWVyks8SAdU7lAADdjruigfw389.jpg/men-shirt-long-sleeve-mens-shirts-casual.jpg",
      price: "750",
      button:"Add to cart",
    },
    {
      value:"daraz",
      name: "Girl Shirt",
      type: "Girl",
      discpriton: "New White Shirt For Girls",
      imge: "https://images-eu.ssl-images-amazon.com/images/I/61gqf3Ufn4L._AC._SR360,460.jpg",
      price: "799",
      button:"Add to cart",
    },
    {
      value:"daraz",
      name: "Girl Jeans Shirt",
      type: "Girl",
      discpriton: "Jeans Shirt High Quality",
      imge: "https://static-01.daraz.pk/p/95fd1da70adfa68fd1c41963e59ce4f9.jpg_340x340q80.jpg_.webp",
      price: "900",
      button:"Add to cart",
    },
    {
      value:"daraz",
      name: "New Girl Shirt",
      type: "Girl",
      discpriton: "shirts are designed for formal, casual",
      imge: "https://stylesatlife.com/wp-content/uploads/2019/05/Full-Sleeved-Red-Plain-Shirt-for-Women.jpg",
      price: "550",
      button:"Add to cart",
    },
    {
      value:"daraz",
      name: "Children Shirt",
      type: "kids",
      discpriton: "casual t-shirt for children",
      imge: "https://stylesatlife.com/wp-content/uploads/2017/09/Kids-Polo-Neck-T-Shirt.jpg.webp",
      price: "499",
      button:"Add to cart",
    },
    {
      value:"daraz",
      imge: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8Qsr1ZH9vWV4dmyn5hkxs_KsCeMVbYMhlw&usqp=CAU",
      name: "kid Print  Shirt",
      type: "kids",
      discpriton: "Print t-shirt for kids ",
      price: "900",
      button:"Add to cart",
    },
    {
      value:"daraz",
      name: "Kid Casual Shirt",
      type: "kids",
      discpriton: "Bon Organik Beach Please Tshirts for  Boys",
      imge: "https://m.media-amazon.com/images/I/51DXEXhVl0L._UL1000_.jpg",
      price: "999",
      button:"Add to cart",
    }
  ]

  const arr2 = [
    {
      value:"online",
      name: "Aston Martin DBS Superleggera 2021",
      type: "Cars",
      discpriton: "a classic DB5, a V8 Vantage, and a Valhalla. And the baddies will probably drive Land Rover Defenders",
      imge: "https://cdn.motor1.com/images/mgl/10219/s3/aston-martin-dbs-superleggera-exterior.jpg",
      price: "$304,995",
      button:"Add to cart",
    },
    {
      value:"online",
      name: "Bugatti Chiron Super Sport 300+ 2021",
      type: "Cars",
      discpriton: "The Bugatti Chiron Super Sport 300+ officially broke the production car speed record in 2019",
      imge: "https://cdn.motor1.com/images/mgl/WO7qr/s3/bugatti-chiron-super-sport-300-exterior.jpg",
      price: "$4 Million",
      button:"Add to cart",
    },
    {
      value:"online",
      name: "Bugatti Divo 2021",
      type: "Cars",
      discpriton: "Not only does Bugatti have the fastest car in the world with the Chiron Super Sport 300+, but the French brand also sells the most expensive car in the world",
      imge: "https://cdn.motor1.com/images/mgl/KjMYQ/s3/bugatti-divo-exterior.jpg",
      price: "$5.4 Million",
      button:"Add to cart",
    },
    {
      value:"online",
      name: "Chevrolet Corvette 2020",
      type: "Cars",
      discpriton: "Everyone loves the new C8 Corvette – it's extremely stylish and performance-oriented, ",
      imge: "https://cdn.motor1.com/images/mgl/Aen4V/s3/chevrolet-corvette-exterior.jpg",
      price: "$58,900",
      button:"Add to cart",
    },
    {
      value:"online",
      name: "Hercules Cycles",
      type: "cycles",
      discpriton: "Hercules Cycles StreetcatPro 20T Single Speed Cycle Frame (Multi-Color)",
      imge: "https://m.media-amazon.com/images/I/41XlTi4oiWL.jpg",
      price: "$6,70.00",
      button:"Add to cart",
    },
    {
      value:"online",
      name: "Hercules Dynor",
      type: "cycle",
      discpriton: "Hercules Dynor Pro RF 26T Single Speed Road Cycle (Ideal for : 12+ Years ,Brake : V Brake)",
      imge: "https://m.media-amazon.com/images/I/81J1PrSvVML._SL1500_.jpg",
      price: "$499.00",
      button:"Add to cart",
    },
    {
      value:"online",
      name: "Poison Ivy",
      type: "motorbike",
      discpriton: "Everyone loves the new Poison Ivy – it's extremely stylish and performance-oriented, ",
      imge: "https://i.pinimg.com/originals/66/be/84/66be84ab05c5ee16dd3b8fec599b5e66.jpg",
      price: "499",
      button:"Add to cart",
    },
    {
      value:"online",
      name: "Kawasaki Ninja 300",
      type: "motorbike",
      discpriton: "Everyone loves the new Kawasaki Ninja 300 – it's extremely stylish and performance-oriented, ",
      imge: "https://images.carandbike.com/bike-images/colors/kawasaki/ninja-300/kawasaki-ninja-300-lime-green.webp?v=28",
      price: "3,18,",
      button:"Add to cart",
    },
  ]
  
//  inpValue((e)=>{
//  })


  return (
    <>
    <div className="App">
    <select  onChange={(e) => setInpValue(e.target.value)}>
          <option value="daraz">daraz</option>
          <option value="online">online</option>
        </select>
        { inpValue=="daraz" ?  <Cards data={arr}/> : <Cards2 datatype={arr2}/>}
      {/* <Cards data={arr}/> */}
      {/* <Cards2 datatype={arr2}/> */}
    </div>
    </>
  );
}

export default App;
