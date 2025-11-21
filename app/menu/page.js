"use client"

export default function Menu(){

      return(
          <div className='bg-violet-100 dark:bg-black'>
          <div className=" fixeed item  h-[500px] items-center bg-black rounded-[80px] brown-relative flex flex-col mx-[10px]">
              <div className="fixed top-0 left-0 w-full h-[90px] bg-black flex flex-row items-center justify-between px-10 z-50">

                  <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR7YXQ3kJQQ9OCITtBTul-N-9imcmmXUwGp0pFnhPZohf0xzlaf" 
                  alt="Burger" 
                  className="h-[100px] w-[200px] rounded-[10px] absolute top-0 left-0-translate x-1/2-translate-y-0"
                  />
                  
                <div className="absolute top-10 left-100 transform -translate-x-5 flex gap-3 font-bold text-white text-lg">
              <a
               href="/home"
                className="hidden md:block font-bold text-white ml-[40px] text-md mt-2.5 mr-[10]">
                  Home
                </a>
              <a
               href="/about"
                className="hidden md:block font-bold text-white ml-[40px] text-md mt-2.5 mr-[10]">
                  Pages
                </a>
            <a
               href="/menu"
                className="hidden md:block font-bold text-white ml-[40px] text-md mt-2.5 mr-[10]">
                  Menu
                </a>
              <a
               href="/shop"
                className="hidden md:block font-bold text-white ml-[40px] text-md mt-2.5 mr-[10]">
                  Shops
                </a>
                <a
               href="/blogs"
                className="hidden md:block font-bold text-white ml-[40px] text-md mt-2.5 mr-[10]">
                  Blogs
                </a>
              </div>
                <img src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-verified-cart-items-icon-png-image_4142493.jpg"
                alt="Cart"
                className="h-[50px] w-[50px] rounded-[10px] absolute top-10 left-280 transform--translate x-50-translate-y-0 flex gap-15"
                />
                <button className="h-[60px] w-[150px] absolute top-10 left-310 transform-translate-x-0 bg-red-600 text-white font-bold py-6 px-5 rounded-full hover:bg-red-700 transition duration-300">Register Now</button>
              </div>
              <div className="h-[40%] hidden md:block flex-row  md-50">
          <img
            src="https://st.depositphotos.com/3063135/4654/i/450/depositphotos_46548367-stock-photo-japanese-seafood-sushi-on-black.jpg"
            alt="icon"
           className="w-[3000px] h-[70px] md:h-[100px] lg:h-[500px] left-10  object-cover"

              />
              <div className=" left-140 absolute top-40 text-center flex flex-col items-center justify-center text-white bg-black/40 rounded-[40px]">
    <h2 className="text-4xl font-serif mb-3">Restaurant Food Menu</h2>
    <h3 className="text-2xl font-serif mb-3">Home--Food---Menu</h3>
    </div>
              </div>
        </div>
             <div className="item w-full h-[80%] items-center  rounded-[80px] relative flex flex-col">

              <section className="bg-gray-930 text-white py-50 px-80 md:px-20">
        <div className="text-center mb-100">
          <h3 className="text-white uppercase tracking-widest font-semibold flex justify-center items-center gap-2">
            <span className="h-[xl] w-8 bg-white"></span>
            *------CATEGORY-----
            <span className="h-[xl] w-8 bg-white"></span>
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Choose Your Best Food 
          </h1>
        <div className=" grid md:grid-cols-4 gap-8 mt-10 ">
      <div className="bg-gray-800 text-center ">
          <img
            src="https://www.recipetineats.com/tachyon/2022/08/Stack-of-cheeseburgers.jpg"
            alt="Burger 1"
            className="bg-amber-950 rounded-[20px] w-[350px] h-[450px] object-coverr"
          />
          <p className="mt-3 text-white font-semibold text-xl">Classic Double Burger</p>
          <p className="mt-3 text-white text-lg">Cooked ground meat</p>
         <button className="mt-3 bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition">
    Order Now
  </button>
      </div>
      <div className="bg-gray-800 text-center">
          <img
            src="https://img.freepik.com/free-photo/delicious-cheeseburger-with-fresh-toppings_9975-24757.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Burger 2"
            className="rounded-[20px] w-[300px] h-[450px] object-cover"
          />
          <p className="mt-3 text-white font-semibold text-xl">Classic Cheese Burger</p>
          <p className="mt-3 text-white  text-lg">Chicken with loaded cheese</p>
           <button className="mt-3 bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition">
    Order Now
  </button>
      </div>
      <div className=" bg-gray-800 text-center">
          <img 
          src="https://tyummies.com/cdn/shop/files/Wagyu-Burger-single.jpg?v=1696103808&width=533"
          alt="burger 3"
          className="bg-amber-950 rounded-[20px] h-[450px] w-[300px] object-cover"
          />
          <p className="mt-3 text-white font-semibold text-xl">Smash Burger</p>
          <p className="mt-3 text-white  text-lg">Cheese hum and pineapple</p>
           <button className="mt-3 bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition">
    Order Now
  </button>
      </div>
          <div className="bg-gray-800 text-center">
          <img 
          src="https://www.kitchensanctuary.com/wp-content/uploads/2019/05/Cheesy-Veggie-Burger-Square-1200.jpg"
          alt="burger 4"
          className="rounded-[20px] h-[450px] w-[300px] object-cover"
          />
          <p className="mt-3 text-white font-semibold text-xl">Turkey Chicken Burger</p>
          <p className="mt-3 text-white text-lg">Creamy loaded</p>
           <button className="mt-3 bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition">
    Order Now
  </button>
      </div>
       </div> 
        <div className="flex flex-row h-[700px] mt-30 w-screen justify-between items-center">
  <div className="grid md:grid-row-1 gap-8 mt-5">
      <img 
      src="https://img.freepik.com/premium-psd/delivery-courier-service-online-shopping-motorcycle-with-parcel-box-3d-rendering_51264-4103.jpg"
      alt="burger 4"
      className=" left-10 h-[700px] w-[5000px] object-cover"
      />
      <div className="absolute justify-center items-center  bottom-400 left-27 transform -translate-y-8">
        <h1 className="text-7xl font-serif text-black">
          30 Minutes Delivery<br/>    </h1>
        <p className="text-black text-xl font-bold leading-relaxed mb-8">
           <ui>A relaxing and pleasant atmosphere, good jazz, dinner,</ui> 
            <ul>and cocktails.the center of Florence.</ul>
            <ul> The only bar inspired by the 1960s,it will give you </ul>
             <ul> a experience that you’ll have a hard time forgetting</ul> 
             </p>

        <button className="mt-3 bg-red-600 hover:bg-white text-white font-bold py-2 px-6 rounded-full hover:text-black transition">
    Order Now
  </button>
      </div>
     </div>
       </div>

{/* Reservation Section added below */}
<div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
  
  <h1 className="text-3xl font-bold mb-1">Reservation Your Favorite Private Table</h1>
  <p className="text-gray-400 text-center max-w-md mb-6">
    Enjoy a relaxing atmosphere with great food and drinks. Reserve your table now!
  </p>

  <form className="bg-gray-900 p-6 rounded-lg w-full max-w-sm space-y-4">
    <input
      type="time"
      className="w-full p-2 rounded bg-gray-800 border border-gray-700"
      placeholder="Time"
    />
    <input
      type="date"
      className="w-full p-2 rounded bg-gray-800 border border-gray-700"
      placeholder="Date"
    />
    <input
      type="number"
      placeholder="Number of Persons"
      className="w-full p-2 rounded bg-gray-800 border border-gray-700"
    />
    <input
      type="tel"
      placeholder="Phone Number"
      className="w-full p-2 rounded bg-gray-800 border border-gray-700"
    />
    <button
      type="submit"
      className="w-full bg-yellow-600 hover:bg-yellow-700 p-2 rounded font-semibold"
    >
      Book A Table
    </button>
  </form>
  <div className="flex overflow-x-auto gap-25 px-30  scrollbar-hide mt-8 "></div>
  <footer className="bg-gray-900 text-gray-300 py-12 px-8 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">

        <div>
          <h2 className="text-white font-semibold text-lg mb-4">About Us</h2>
          <p className="text-sm leading-6">
            Continued at zealously necessary is surrounded sir motionless she end literature.
            Gay of therefore neglected.
          </p>
          
        </div>

        {/* Explore */}
        <div>

          <h2 className="text-white font-semibold text-lg mb-4">Explore</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white">Company Profile</li>
            <li className="hover:text-white">About</li>
            <li className="hover:text-white">Help Center</li>
            <li className="hover:text-white">Career</li>
            <li  className="hover:text-white">Features</li>
            <li className="hover:text-white">Contact</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Contact Info</h2>
          <ul className="text-sm space-y-2">
            <li>123 5th Street, Office 375</li>
            <li>Berlin, D2 21562</li>
            <li> +123 456 97826</li>
            <li> +594 456 97834</li>
            <li> food@restan.com</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-white font-semibold text-lg mb-4">Newsletter</h2>
          <p className="text-sm mb-4">
            Join our subscribers list to get the latest news and special offers.
          </p>
          <form className="flex flex-col space-y-3">
            
            <button
              className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-md font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      
      <div className="text-center text-lg text-white mt-8">
        © Copyright 2025 Restan. All Rights Reserved.
      </div>
    </footer>
    
</div>

      </div>
        </section>
              </div>
            </div>
          
              );
              }