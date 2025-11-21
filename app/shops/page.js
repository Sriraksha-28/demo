"use client";

  export default function Shop(){
      return(
          
              
  <div className='bg-violet-100  dark:bg-black'>
          <div className="bg-white dark:bg-black fixeed item  h-[500px] items-center light  rounded-[80px] brown-relative flex flex-col mx-[10px]">
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
                <button className="h-[60] w-[100] absolute top-10 left-310 transform-translate-x-0 bg-red-600 text-white font-bold py-3 px-15 rounded-full hover:bg-red-700 transition duration-300">Register Now</button>
              
              </div>
              <div className="h-[400px] hidden md:block flex-row  md-50">
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
    <div className="item w-full h-[200px] items-center  rounded-[80px] relative flex flex-col">

              <section className="text-white py-10 px-10 md:px-20">
  <div className="text-center mb-10">
    <p className="absolute left-240 bottom-9 text-xl text-white font-serif mb-9">Showing 1-8 of 20 results</p>
    <button className="absolute left-300 bottom-16 border-2  text-white font-bold py-2 px-4 rounded-[10px] hover:bg-gray-500 transition duration-300">
      Short By Latest</button>
      </div>
      
  </section>
  </div>

              <div className="flex flex-row h-[80%] mt-2-corners justify-between items-center">
    
    <section className="bg-black text-white py-10 w-full flex flex-col items-center justify-center">
    <div className="flex items-center">
      <div className="border-t border-red-600 w-16"></div>
      <h2 className="text-red-600 text-xl font-bold mx-9 tracking-widest">
        Make Your Choice
      </h2>
      <div className="border-t border-red-600 w-25"></div>
    </div>
    <div className="flex overflow-x-auto gap-25 px-25 scrollbar-hide ">
    
    <div className="bg-[#1a1a1a] rounded-3xl p-6 border-1/2 border-white hover:border-yellow-400 transition duration-300 w-[300px] h-[460px] flex flex-col items-center">
          <img
            src="https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg"
            alt="Burger 1"
            className="rounded-[30px] left-20 w-[200px] h-[200px] object-cover"
          />
          <p className="mt-5 text-white font-semibold text-sm">CREEMY,PIZZA</p>
           <p className="mt-3 text-white text-xl">Margherita Pizza</p>
           <p className="mt-3 text-yellow-300 text-lg">$12.00</p>
          <button className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-yellow-500 transition">
    Add To Cart
  </button>
      </div>
      <div className="bg-[#1a1a1a] rounded-3xl p-6 border-1/2 border-white hover:border-yellow-400 transition duration-300 w-[300px] h-[460px] flex flex-col items-center">
          <img
            src="https://cdn.pixabay.com/photo/2022/07/15/18/12/cheese-burger-7323674_640.jpg"
            alt="Burger 2"
            className="rounded-[20px] w-[200px] h-[200px] object-cover"
          />
          <p className="mt-3 text-white font-semibold text-sm">CREEMY BURGER</p>
           <p className="mt-3 text-white text-xl">Margherita Burger</p>
           <p className="mt-3 text-yellow-300 text-lg">$12.00</p>
          <button className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-yellow-500 transition">
    Add To Cart
  </button>
      </div>
      <div className="bg-[#1a1a1a] rounded-3xl p-6 border-1/2 border-white hover:border-yellow-400 transition duration-300 w-[300px] h-[460px] flex flex-col items-center">
          <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkY5q6mkcDda5cC8-biU5_vtQmev06lvzpzwLPpL5iJyBbhHFo-Y94BMAbJX-QOOEnzjY&usqp=CAU"
          alt="burger 3"
          className="rounded-[20px] h-[200px] w-[200px] object-cover"
          />
          <p className="mt-3 text-white font-semibold text-sm">BEEF, STEAK</p>
           <p className="mt-3 text-white text-xl">Grilled Flank Steak</p>
           <p className="mt-3 text-yellow-300 text-lg">$12.00</p>
          <button className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-yellow-500 transition">
     Add To Cart
  </button>
      </div>
      <div className="bg-[#1a1a1a] rounded-3xl p-6 border-1/2 border-white hover:border-yellow-400 transition duration-300 w-[300px] h-[460px] flex flex-col items-center">
          <img 
          src="https://cti.farziengineer.co/products/Chicken_Whole_in_BBQ__With_Skin_2-7a68e8a07a8a.jpg?auto=format&sharp=20&ixlib=react-9.3.0"
          alt="burger 4"
          className="rounded-[20px] h-[200px] w-[200px] object-cover"
          />
          <p className="mt-3 text-white font-semibold text-sm">BBQ, MEAT</p>
           <p className="mt-3 text-white text-xl">Barbeque Chicken</p>
           <p className="mt-3 text-yellow-300 text-lg">$12.00</p>
          <button className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-yellow-500 transition">
     Add To Cart
  </button>
      </div>
      </div>
     <div className="flex overflow-x-auto gap-25 px-10  scrollbar-hide mt-8 ">
    
    <div className="bg-[#1a1a1a] rounded-3xl p-6 border-1/2 hover:border-yellow-400 transition duration-300 w-[300px] h-[460px] flex flex-col items-center">
          <img
            src="https://img.freepik.com/free-photo/fried-spring-rolls-cutting-board_1150-17010.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Burger 1"
            className="rounded-[30px] w-[200px] h-[200px] object-coverr"
          />
          <p className="mt-3 text-white font-semibold text-sm">FOOD, ROLL</p>
           <p className="mt-3 text-white text-xl">Vegetable Roll</p>
           <p className="mt-3 text-yellow-300 text-lg">$12.00</p>
          <button className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-yellow-500 transition">
     Add To Cart
  </button>
      </div>
      <div className="bg-[#1a1a1a] rounded-3xl p-6 border-1/2 border-white hover:border-yellow-400 transition duration-300 w-[300px] h-[460px] flex flex-col items-center">
          <img
            src="https://media.istockphoto.com/id/1224646193/photo/chicken-alfredo-parmesan-penne-pasta-with-spinach.jpg?s=612x612&w=0&k=20&c=LhSvdJnGqqMTvY0yJovdG0rPwji1g5wNAKUgLYqJBhw="
            alt="Burger 2"
            className="rounded-[20px] w-[200px] h-[200px] object-cover"
          />
          <p className="mt-3 text-white font-semibold text-sm">PASTA,SPICY</p>
          <p className="mt-3 text-white text-xl">Creamy Pasta</p>
          <p className="mt-3 text-yellow-300 text-lg">$12.00</p>
          <button className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-yellow-500 transition">
    Add To Cart
  </button>
          
      </div>
      
      <div className="bg-[#1a1a1a] rounded-3xl p-6 border-1/2 border-white hover:border-yellow-400 transition duration-300 w-[300px] h-[460px] flex flex-col items-center">
        
          <img 
          src="https://media.istockphoto.com/id/1353181709/photo/two-large-shawarma-roll-with-chicken-and-vegetables-on-a-dark-textured-background-close-up.jpg?s=612x612&w=0&k=20&c=Ay-_Uzr8o5_KwjYK36nW0KzPJbcCebo7ScjKRgEr4r0="
          alt="burger 3"
          className="rounded-[20px] h-[200px] w-[200px] object-cover"
          />
          <p className="mt-3 text-white font-semibold text-sm">MEAT,SHAWARMA</p>
          <p className="mt-3 text-white text-xl">Chicken Shawarma</p>
          <p className="mt-3 text-yellow-300 text-lg">$12.00</p>
        <button className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-yellow-500 transition">
     Add To Cart
  </button>
      </div>
          <div className="bg-[#1a1a1a] rounded-3xl p-6 border-1/2 border-white hover:border-yellow-400 transition duration-300 w-[300px] h-[460px] flex flex-col items-center">
          
          <img 
          src="https://media.istockphoto.com/id/619637254/photo/two-fresh-submarine-sandwiches.jpg?s=612x612&w=0&k=20&c=5WtuqMq6eYFognGqc7wkGUspHxcKNWr-rV2rkAegM7g="
          alt="burger 4"
          className="rounded-[20px] h-[200px] w-[200px] object-cover"
          />
          <p className="mt-3 text-white font-semibold text-sm">SANDWICH,CHICKEN</p>
          <p className="mt-3 text-white text-xl">Submarine Sandwich</p>
          <p className="mt-3 text-yellow-300 text-lg">$12.00</p>
          <button className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-full hover:bg-yellow-500 transition">
    Add To Cart
  </button>
      </div>
    </div>
    <div className="flex overflow-x-auto gap-25 px-30  scrollbar-hide mt-8 ">
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
  </section>
  
  </div>
  </div>
  );
  }