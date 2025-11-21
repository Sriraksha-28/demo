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
               href="/pages"
                className="hidden md:block font-bold text-white ml-[40px] text-md mt-2.5 mr-[10]">
                  Pages
                </a>
            <a
               href="/menu"
                className="hidden md:block font-bold text-white ml-[40px] text-md mt-2.5 mr-[10]">
                  Menu
                </a>
                <a
               href="/blogs"
                className="hidden md:block font-bold text-white ml-[40px] text-md mt-2.5 mr-[10]">
                  Blogs
                </a>
                <a
               href="/shop"
                className="hidden md:block font-bold text-white ml-[40px] text-md mt-2.5 mr-[10]">
                  Shops
                </a>
              
              </div>
                <img src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-verified-cart-items-icon-png-image_4142493.jpg"
                alt="Cart"
                className="h-[50px] w-[50px] rounded-[10px] absolute top-10 left-280 transform--translate x-50-translate-y-0 flex gap-15"
                />
                <button className="h-[60] w-[100] absolute top-10 left-310 transform-translate-x-0 bg-red-600 text-white font-bold py-3 px-15 rounded-full hover:bg-red-700 transition duration-300">Register Now</button>
              </div>
              <div className="h-[40%] hidden md:block flex-row  md-50">
          <img
            src="https://st.depositphotos.com/3063135/4654/i/450/depositphotos_46548367-stock-photo-japanese-seafood-sushi-on-black.jpg"
            alt="icon"
           className="w-[3000px] h-[70px] md:h-[100px] lg:h-[500px] left-10  object-cover"

              />
              <div className=" left-140 absolute top-40 text-center flex flex-col items-center justify-center text-white bg-black/40 rounded-[40px]">
    <h2 className="text-4xl font-serif mb-3">Restaurant Food Blog</h2>
    <h3 className="text-2xl font-serif mb-3">Home--Food---Blog</h3>
    </div>
              </div>
              </div><div className="flex flex-row h-[10%] mt-30 w-full justify-between items-center">
     <section className="bg-black text-white py-10 w-full flex flex-col items-center justify-center">
    
     <div className="grid md:grid-cols-2 gap-6 mt-10">
      <div className="relative w-[500px] h-[500px] overflow-hidden">
  
  <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75"
    alt="chef"
    className="w-full h-full object-cover"
  />

  
  <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 text-gray-700 text-center py-3">
    <p className="font-semibold ">BY JOHN BAUS.BURGER,FOOD</p>
    <p className="font-semibold text-black text-2xl">Picked up a brussels burger sprout.</p>
    <p className="text-sm text-brown">READ MORE</p>
  </div>
   <div className="absolute top-0 right-0  bg-white bg-opacity-90 text-gray-700 text-center py-5 px-5">
    <p className="font-semibold">12 <br /> AUG</p></div>
</div>
      
      <div className="relative w-[500px] h-[500px] overflow-hidden">
  
  <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"
    alt="chef"
    className="w-full h-full object-cover"
  />

  
  <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 text-gray-700 text-center py-3">
    <p className="font-semibold">BY ADMIN.PIZZA,FOOD</p>
    <p className="font-semibold text-black text-2xl">This prefabricated passive house highly</p>
    <p className="text-sm text-brown">READ MORE</p>
  </div>
   <div className="absolute top-0 right-0  bg-white bg-opacity-90 text-gray-700 text-center py-5 px-5">
    <p className="font-semibold">13 <br /> AUG</p></div>
  
</div>
<div className="relative w-[500px] h-[500px] overflow-hidden">

  <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F3.jpg&w=1920&q=75"
    alt="chef"
    className="w-full h-full object-cover"
  />

  
  <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 text-gray-700 text-center py-3">
    <p className="font-semibold">BY JOHN BAUS.BURGER,FOOD</p>
    <p className=" text-black text-2xl">Overcame breeding point concern has.</p>
     <p className="text-sm text-brown">READ MORE</p>
  </div>
   <div className="absolute top-0 right-0  bg-white bg-opacity-90 text-gray-700 text-center py-5 px-5">
    <p className="font-semibold">14 <br /> AUG</p></div>
</div>

<div className="relative w-[500px] h-[500px] overflow-hidden">
  
  <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F4.jpg&w=1920&q=75"
    
    alt="chef"
    className="w-full h-full object-cover"
  />

  
  <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 text-gray-700 text-center py-3">
    <p className="font-semibold">BY ISTIAK AHMED.PIZZA,FOOD</p>
    <p className="text-black text-2xl">Breeding point has terminate the hole.</p>
     <p className="text-sm text-brown">READ MORE</p>
  </div>
   <div className="absolute top-0 right-0  bg-white bg-opacity-90 text-gray-700 text-center py-5 px-5">
    <p className="font-semibold">12 <br /> AUG</p></div>
</div>
      
  </div>
  <div className="grid md:grid-cols-2 gap-6 mt-10">
      <div className="relative w-[500px] h-[500px] overflow-hidden">
  
  <img
    src="https://media.istockphoto.com/id/1445890864/photo/business-manager-talking-to-her-staff-at-a-cafe.jpg?s=612x612&w=0&k=20&c=I28m7ubgPjvi8RfK6yTUXJAB5UE8uEd0rH95B60Yxx0="
    alt="chef"
    className="w-full h-full object-cover"
  />

  
  <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 text-gray-700 text-center py-3">
    <p className="font-semibold ">BY JOHN BAUS.BURGER,FOOD</p>
    <p className="font-semibold text-black text-2xl">Picked up a brussels burger sprout.</p>
    <p className="text-sm text-brown">READ MORE</p>
  </div>
   <div className="absolute top-0 right-0  bg-white bg-opacity-90 text-gray-700 text-center py-5 px-5">
    <p className="font-semibold">12 <br /> AUG</p></div>
</div>
      
      <div className="relative w-[500px] h-[500px] overflow-hidden">
  
  <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"
    alt="chef"
    className="w-full h-full object-cover"
  />

  
  <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 text-gray-700 text-center py-3">
    <p className="font-semibold">BY ADMIN.PIZZA,FOOD</p>
    <p className="font-semibold text-black text-2xl">This prefabricated passive house highly</p>
    <p className="text-sm text-brown">READ MORE</p>
  </div>
   <div className="absolute top-0 right-0  bg-white bg-opacity-90 text-gray-700 text-center py-5 px-5">
    <p className="font-semibold">13 <br /> AUG</p></div>
  
</div>
<div className="relative w-[500px] h-[500px] overflow-hidden">

  <img
    src="https://media.istockphoto.com/id/1444001932/photo/business-lunch.jpg?s=612x612&w=0&k=20&c=MFmAaYl5GL4chJFbSAfrE_tJfy7XiRpphXphpYjIsv4="
    alt="chef"
    className="w-full h-full object-cover"
  />

  
  <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 text-gray-700 text-center py-3">
    <p className="font-semibold">BY JOHN BAUS.BURGER,FOOD</p>
    <p className=" text-black text-2xl">Overcame breeding point concern has.</p>
     <p className="text-sm text-brown">READ MORE</p>
  </div>
   <div className="absolute top-0 right-0  bg-white bg-opacity-90 text-gray-700 text-center py-5 px-5">
    <p className="font-semibold">14 <br /> AUG</p></div>
</div>

<div className="relative w-[500px] h-[500px] overflow-hidden">
  
  <img
    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F4.jpg&w=1920&q=75"
    
    alt="chef"
    className="w-full h-full object-cover"
  />

  
  <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 text-gray-700 text-center py-3">
    <p className="font-semibold">BY ISTIAK AHMED.PIZZA,FOOD</p>
    <p className="text-black text-2xl">Breeding point has terminate the hole.</p>
     <p className="text-sm text-brown">READ MORE</p>
  </div>
   <div className="absolute top-0 right-0  bg-white bg-opacity-90 text-gray-700 text-center py-5 px-5">
    <p className="font-semibold">12 <br /> AUG</p></div>
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
    
         
    
  
   
  
        
        
    

      
      )
  }