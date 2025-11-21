"use client";

  export default function Home(){
      return(
          <div className='bg-violet-100 dark:bg-black'>
          <div className="  item  h-[850px] items-center bg-black rounded-[80px] brown-relative flex flex-col mx-[10px]">
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
                className="h-[50px] w-[50px] rounded-[80px] absolute top-10 left-280 transform--translate x-50-translate-y-0 flex gap-15"
                />
                <button className="h-[60] w-[100] absolute top-10 left-310 transform-translate-x-0 bg-red-600 text-white font-bold py-3 px-15 rounded-full hover:bg-red-700 transition duration-300">Register Now</button>
              
              </div>

              
  <div className=" hidden md:block flex-row rounded-[700px] object-cover md-50">
          <img
            src="https://img.freepik.com/premium-photo/chicken-burger-street-food-style-dark-background_918874-20.jpg"
            alt="icon"
            width="1380" 
            height="100"
            className=" rounded-[20px]"

              />
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkJKXf3DfCK2v2swZI2Rq_vThDdilo-90I5W4NxIJVNdzxKRfQ"
              alt="Overlay"
              width={400}
              height={400}
              className="absolute top-1/2 left-3-translate x-1-translate-y-1 "/>

            <div className="flex flex-row h-[10%] mt-30 w-full justify-between items-center">
    
    <section className="bg-[#121212] text-white py-20 px-6 md:px-20">
        <div className="text-center mb-16">
          <h3 className="text-red-500 uppercase tracking-widest font-semibold flex justify-center items-center gap-2">
            <span className="h-[1px] w-8 bg-red-500"></span>
            About Us
            <span className="h-[1px] w-8 bg-red-500"></span>
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
            The best burgers offer a <br /> combination of tastes.
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSXky05V7yLpXTLuP3JUMQ375X2ukUO2hvhVr-275ZzYjcHoyuf"
            alt="Burger"
            className="rounded-[20px] w-full h-[500px] object-cover"
          />
        
          <div>
  <div className="space-y-10 p-2">
    <div className="bg-red-600 flex flex-col justify-center items-center rounded-[15px] p-8 text-center">
            <h2 className="text-5xl font-bold mb-2">18+</h2>
            <p className="text-lg font-medium">Types Of Burger</p>
            </div>

    </div>
    <div className="space-y-10 p-2">
      <img src="https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg="/>
    </div>
  </div>
          
          <div>
            <p className="text-gray-300 leading-relaxed mb-8">
              New had happen unable uneasy. Drawings can followed improved out
              sociable not. Earnestly so do instantly pretended. See general few
              civilly amiable pleased account carried. Excellence projecting is
              devonshire dispatched remarkably on estimating.
            </p>

            <div className="space-y-5">
              <div className="border border-gray-700 p-2 ">
                <h3 className="text-xl font-semibold mb-2"> Online Food Delivery</h3>
                <p className="text-gray-400">
                  Excellence projecting is devonshire dispatched remarkably on
                  estimating.
                </p>
              </div>

              <div className="border border-gray-700 p-2">
                <h3 className="text-xl font-semibold mb-2"> Authentic Food</h3>
                <p className="text-gray-400">
                  Regularity projecting is devonshire dispatched remarkably on
                  estimating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <div className="flex flex-row h-[30%] mt-2-corners justify-between items-center">
    
    <section className="bg-black text-white py-10 w-full flex flex-col items-center justify-center">
    <div className="flex items-center">
      <div className="border-t border-red-600 w-16"></div>
      <h2 className="text-red-600 text-lg font-bold mx-4 tracking-widest">
        OUR SPECIAL
      </h2>
      <div className="border-t border-red-600 w-16"></div>
    </div>
    <div className="grid md:grid-cols-4 gap-8 mt-10">
      <div className="text-center">
          <img
            src="https://www.recipetineats.com/tachyon/2022/08/Stack-of-cheeseburgers.jpg"
            alt="Burger 1"
            className="rounded-[30px] left-2 w-[300px] h-[300px] object-coverr"
          />
          <p className="mt-3 text-white font-semibold text-lg">Classic Double Burger</p>
           <p className="mt-3 text-white text-lg">he hamburger is the original and the best-known burger to date</p>
         <button className="mt-3 bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition">
    Order Now
  </button>
      </div>
      <div className="text-center">
          <img
            src="https://img.freepik.com/free-photo/delicious-cheeseburger-with-fresh-toppings_9975-24757.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Burger 2"
            className="rounded-[20px] w-[300px] h-[300px] object-cover"
          />
          <p className="mt-3 text-white font-semibold text-lg">Classic Cheese Burger</p>
           <p className="mt-3 text-white text-lg">he hamburger is the original and the best-known burger to date</p>
         <button className="mt-3 bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition">
    Order Now
  </button>
      </div>
      <div className="text-center">
          <img 
          src="https://tyummies.com/cdn/shop/files/Wagyu-Burger-single.jpg?v=1696103808&width=533"
          alt="burger 3"
          className="rounded-[20px] h-[300px] w-[300px] object-cover"
          />
          <p className="mt-3 text-white font-semibold text-lg">Smash Burger</p>
           <p className="mt-3 text-white text-lg">he hamburger is the original and the best-known burger to date</p>
         <button className="mt-3 bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition">
    Order Now
  </button>
      </div>
          <div className="text-center">
          <img 
          src="https://www.kitchensanctuary.com/wp-content/uploads/2019/05/Cheesy-Veggie-Burger-Square-1200.jpg"
          alt="burger 4"
          className="rounded-[20px] h-[300px] w-[300px] object-cover"
          />
          <p className="mt-3 text-white font-semibold text-lg">Turkey Chicken Burger</p>
           <p className="mt-3 text-white text-lg">he hamburger is the original and the best-known burger to date</p>
         <button className="mt-3 bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition">
    Order Now
  </button>
      </div>
        
      </div>
      <div className="grid md:grid-cols-4 gap-8 mt-10">
      <div className="text-center">
          <img
            src="https://blog.swiggy.com/wp-content/uploads/2025/01/Image-9_-meat-burger-1024x538.png"
            alt="Burger 1"
            className="rounded-[30px] w-[350px] h-[300px] object-coverr"
          />
          <p className="mt-3 text-white font-semibold text-lg">Bacon Cheese  Burger</p>
           <p className="mt-3 text-white text-lg">he hamburger is the original and the best-known burger to date</p>
         <button className="mt-3 bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition">
    Order Now
  </button>
      </div>
      <div className="text-center">
          <img
            src="https://i.pinimg.com/736x/ce/cc/ef/ceccefc21a3022e17474d35fc33693cf.jpg"
            alt="Burger 2"
            className="rounded-[20px] w-[300px] h-[300px] object-cover"
          />
          <p className="mt-3 text-white font-semibold text-lg">Classic Cheese Burger</p>
          <p className="mt-3 text-white text-lg">he hamburger is the original and the best-known burger to date</p>
         <button className="mt-3 bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition">
    Order Now
  </button>
          
      </div>
      <div className="text-center">
          <img 
          src="https://www.nomeatathlete.com/wp-content/uploads/2012/08/burger.jpg"
          alt="burger 3"
          className="rounded-[20px] h-[300px] w-[300px] object-cover"
          />
          <p className="mt-3 text-white font-semibold text-lg">Veggie Burger</p>
          <p className="mt-3 text-white text-lg">The hamburger is the original and the best-known burger to date</p>
         <button className="mt-3 bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition">
    Order Now
  </button>
      </div>
          <div className="text-center">
          <img 
          src="https://www.allrecipes.com/thmb/gedbbfBeX0f0hikIZRu19IVt0jU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3677016-af84ef8eb04f47c3999333f5250ecd43.jpg"
          alt="burger 4"
          className="rounded-[20px] h-[300px] w-[300px] object-cover"
          />
          <p className="mt-3 text-white font-semibold text-lg">Peri Peri Burger</p>
          <p className="mt-3 text-white text-lg">he hamburger is the original and the best-known burger to date</p>
         <button className="mt-3 bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 transition">
    Order Now
  </button>
      </div>
      </div>
  </section>
  </div>
  <div className="flex flex-row h-[10%] mt-30 w-full justify-between items-center">
     <section className="bg-black text-white py-10 w-full flex flex-col items-center justify-center">
    <div className="flex items-center">
      <div className="border-t border-red-600 w-16"></div>
      <h2 className="text-red-600 text-lg font-bold mx-4 tracking-widest">
         SPECIAL OFFERS
      </h2>
      <div className="border-t border-red-600 w-16"></div>
    </div>
    <div className="grid md:grid-cols-2 gap-8 mt-10">
      <img 
      src="https://thumbs.dreamstime.com/b/delicious-burger-special-offer-advertisement-mouthwatering-burger-star-promotional-image-set-against-vibrant-407069718.jpg"
      alt="burger 4"
      className="rounded-[20px] left-10 h-[450px] w-[900px] object-cover"
      />
      <img 
      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-banner-display-ads-design-template-de3bb854b3eb64b3b9ca7144ce05b142_screen.jpg?ts=1644218341"
      alt="burger 4"
      className="rounded-[20px] left-10 h-[450px] w-[900px] object-cover"
      />
      
    </div>
    </section>
    </div>
  <div className="flex flex-row h-[15%] mt-30 w-full justify-between items-center">
    <div className="bg-black text-white py-16">

      <div className="text-center mb-12">
        <h1 className="text-red-600">---------POPULAR MENU----------</h1>
        <h2 className="text-4xl font-bold">
          <span className="text-red-600">Latest Food Items</span>
        </h2>
      </div>

      <div className="flex overflow-x-auto gap-25 px-25 scrollbar-hide ">
        
        <div className="min-w-[250px] bg-[#111] rounded-2xl p-2 text-center hover:scale-105 transition">
          <img
            src="https://www.shutterstock.com/image-photo/double-chicken-burger-isolated-on-600nw-1923966728.jpg"
            alt="Classic Chicken"
            className="w-52 h-42 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Classic Chicken</h3> 
          <p className="text-gray-400 text-sm mt-2">
            Ricotta/goat cheese/beetroot<br /> Ricotta/goat cheese/beetroot
          </p>
          <span className="inline-block mt-3 text-xs bold bg-red-500 px-3 py-1 rounded-half">
            MUST TRY
          </span>
          <p className="text-2xl font-bold mt-3">$35</p>
        </div>

        
        <div className="min-w-[250px] bg-[#111] rounded-2xl p-2 text-center hover:scale-105 transition">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi2cvYFW-XJki_OTmIztEk0I-iy4zlJJKIkw&s"
            alt="Cheese Burger"
            className="w-52 h-42 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Cheese Burger</h3>
          <p className="text-gray-400 text-sm mt-2">
            Ricotta/ goat cheese / beetroot <br />  Atlantic/chips/ salad/ tartare
          </p>
           
          <p className="text-2xl font-bold mt-3">$42</p>
        </div>

        
        <div className="min-w-[250px] bg-[#111] rounded-2xl p-6 text-center hover:scale-105 transition">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3TBX_bxY9jwlxgvsEMEKTj_b8PMLAFoaGw&s"
            alt="Pepperoni Pizza"
            className="w-52 h-42 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Pepperoni Pizza</h3>
          <p className="text-gray-400 text-sm mt-2">
            Ricotta/ goat cheese / beetroot <br /> Atlantic/ chips/ salad/ tartare
          </p>
          <span className="inline-block mt-3 text-xs bg-red-500 px-3 py-1 rounded-half">
            MUST TRY
          </span>
          <p className="text-2xl font-bold mt-3">$29</p>
        </div>

        
        <div className="min-w-[250px] bg-[#111] rounded-2xl p-6 text-center hover:scale-105 transition">
          <img
            src="https://img.freepik.com/premium-photo/italian-pizza-margherita-black-background_356194-1114.jpg"
            alt="Margherita Pizza"
            className="w-52 h-42 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Margherita Pizza</h3>
          <p className="text-gray-400 text-sm mt-2">
            Ricotta/ goat cheese /beetroot <br />Atlantic /chips /salad /tartare
          </p>
        
          <p className="text-2xl font-bold mt-3">$15</p>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-25 px-25 scrollbar-hide ">
      
        <div className="min-w-[250px] bg-[#111] rounded-2xl p-2 text-center hover:scale-105 transition">
          <img
            src="https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246066.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Classic Chicken"
            className="w-52 h-42 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Classic Chicken</h3> 
          <p className="text-gray-400 text-sm mt-2">
            Ricotta/goat cheese/beetroot<br /> Ricotta/goat cheese/beetroot
          </p>
          <span className="inline-block mt-3 text-xs bold bg-red-500 px-3 py-1 rounded-half">
            MUST TRY
          </span>
          <p className="text-2xl font-bold mt-3">$35</p>
        </div>

        
        <div className="min-w-[250px] bg-[#111] rounded-2xl p-2 text-center hover:scale-105 transition">
          <img
            src="https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo="
            alt="Cheese Burger"
            className="w-52 h-42 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Cheese Pizza</h3>
          <p className="text-gray-400 text-sm mt-2">
            Ricotta/ goat cheese / beetroot <br />  Atlantic/chips/ salad/ tartare
          </p>
           
          <p className="text-2xl font-bold mt-3">$42</p>
        </div>

        
        <div className="min-w-[250px] bg-[#111] rounded-2xl p-6 text-center hover:scale-105 transition">
          <img
            src="https://thumbs.dreamstime.com/b/grill-chicken-legs-grilled-chicken-legs-bbq-sesame-parsley-tomato-95526623.jpg"
            alt="Pepperoni Pizza"
            className="w-52 h-42 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Grilled Chicken</h3>
          <p className="text-gray-400 text-sm mt-2">
            Ricotta/ goat cheese / beetroot <br /> Atlantic/ chips/ salad/ tartare
          </p>
          <span className="inline-block mt-3 text-xs bg-red-500 px-3 py-1 rounded-half">
            MUST TRY
          </span>
          <p className="text-2xl font-bold mt-3">$29</p>
        </div>

        
        <div className="min-w-[250px] bg-[#111] rounded-2xl p-6 text-center hover:scale-105 transition">
          <img
            src="https://media.istockphoto.com/id/1340589333/photo/homemade-indian-chicken-tikka-masala-pizza.jpg?s=612x612&w=0&k=20&c=QetWD3UJeCFoTq6OYNJehauw7Utc8MxH6B90Cb9zvLw="
            alt="Margherita Pizza"
            className="w-52 h-42 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Margherita Pizza</h3>
          <p className="text-gray-400 text-sm mt-2">
            Ricotta/ goat cheese /beetroot <br />Atlantic /chips /salad /tartare
          </p>
        
          <p className="text-2xl font-bold mt-3">$15</p>
        </div>
      </div>
    
    </div>
  </div>

  
  </div>


<div className="flex flex-row h-[30%] mt-2 justify-between items-center">
  <section className="bg-black text-white py-10 w-full flex flex-col items-center justify-center">
    <div className="relative mt-10 w-full flex justify-center">
      
      <img
        src="https://thumbs.dreamstime.com/b/delicious-cheeseburger-fresh-toppings-pickles-wooden-table-against-black-background-mouthwatering-features-juicy-383862075.jpg"
        alt="burger 4"
        className="rounded-[20px] h-[650px] w-[2000px] object-cover"
      />

    
      <p className="absolute bottom-140 left-10 text-white font-bold text-4xl bg-black/50 px-4 py-2 rounded-lg">
        Super Combo Offer
      </p>
      <p className="absolute bottom-80 left-10 text-white  text-7xl bg-black/50 px-4 py-2 font-serif rounded-lg">
      Burger And <br/>Sea Fish Curry<br/> Combo</p>
      <p className ="absolute bottom-50 left-10 text-white font-semibold text-lg bg-black/50 px-4 py-2 rounded-lg">Continue indulged speaking the was out horrible for domestic position.<br/> Seeing rather her you not esteem men settle genius excuse. Deal say over<br/> you age from. Comparison new ham melancholy son themselves.</p>
      <button className="bg-red-500 hover:bg-white left-20 absolute bottom-30 text-white hover:text-black font-semibold px-6 py-4 rounded-[20px] shadow-md transition">
          Accept This Deal
        </button>
    </div>
  </section>
</div>


  </div>
  </div>
  );
}