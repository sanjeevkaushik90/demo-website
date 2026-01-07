function navbar(){

    const navmenu=[
        {name:'Outerwear',link:'./Outerwear.html' },
        {name:'Activewear',link:'./activewear.html' },
        {name:'Bottoms',link:'./bottom.html' },
        {name:'Sports Gear',link:'./sportgear.html' },
        {name:'Accessories',link:'./Accessories.html' },
    ]

    let bag=navmenu.map((v)=>`<li><a href="${v.link}" class="hover:underline underline-offset-4">${v.name}</a></li>`)


    return `<nav class="bg-blue-600 w-full text-white flex items-center justify-between lg:px-16 lg:py-5 md:px:12 md:py:3 sm:px:10 sm:px:2" aria-label="Main navigation">

          
            <a href="../pages/home.html" class="text-4xl font-extrabold tracking-wide hover:opacity-90 transition">
                Patagonia
            </a>

            
             <ul class=" hidden lg:flex items-center gap-12 sm:gap-5 md:gap-8 font-semibold  lg:text-xl md:text-lg ">
             ${bag.join(' ')}
            </ul>

            
            <div class="flex gap-3">
                <a href="./signin.html"
                    class="rounded-full bg-black px-6 py-2 font-semibold hover:bg-gray-900  focus-visible:outline-2 focus-visible:outline-white transition">
                    Sign in </a>
                <a href="./signup.html" class="rounded-full border border-white px-6 py-2  font-semibold
                       hover:bg-white hover:text-blue-600 
                       focus-visible:outline-2 focus-visible:outline-white transition">
                    Sign up
                </a>
                <a class="flex lg:hidden text-2xl justify-center items-center hover:bg-black transition text-white rounded-md" href=""><i class="fa-solid fa-list lg:hidden flex"></i></a>
            </div>

        </nav>`
}

document.getElementById('navbar').innerHTML = navbar()