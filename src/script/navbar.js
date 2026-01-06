const navbar =()=>{
    return `    <header >
        <nav
            class="flex items-center justify-between
                   lg:px-40 lg:py-8
                   md:px-12 md:py-6
                   px-6 py-4
                   max-w-400 mx-auto"
            aria-label="Primary navigation">

            <div>
                <a href="#"
                   class="text-3xl md:text-4xl font-extrabold tracking-tight
                          hover:opacity-80 transition">
                    <img class="h-auto w-auto" src="https://cdn.prod.website-files.com/683ec44242f0f35750675d4b/687a5f2bebc0dee7255e45f7_Clarity_logo_RGB%201.svg" alt="" srcset="">
                </a>
            </div>

            <ul class="hidden md:flex items-center gap-10 text-sm font-medium text-neutral-800">
                <li>
                    <a href="whatwedo.html" class="relative hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-black hover:after:w-full after:transition-all">
                        What we do
                    </a>
                </li>
                <li>
                    <a href="ourteam.html" class="relative hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-black hover:after:w-full after:transition-all">
                        Our team
                    </a>
                </li>
                <li>
                    <a href="Specialistsectors.html" class="relative hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-black hover:after:w-full after:transition-all">
                        Specialist sectors
                    </a>
                </li>
                <li>
                    <a href="Resources.html" class="relative hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-black hover:after:w-full after:transition-all">
                        Resources
                    </a>
                </li>
                <li>
                    <a href="About.html" class="relative hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-black hover:after:w-full after:transition-all">
                        About
                    </a>
                </li>
                <li>
                    <a href="Contact.html" class="relative hover:text-black transition after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-black hover:after:w-full after:transition-all">
                        Contact
                    </a>
                </li>
            </ul>

            <div class="flex items-center gap-6 text-sm font-medium">
                <a href="login.html"
                   class="text-neutral-700 hover:text-black transition">
                    Log in
                </a>

                <a href="bookademo.html"
                   class="inline-flex items-center justify-center
                          bg-black text-white px-6 py-2.5 rounded-full
                          shadow-sm
                          transition-all hover:shadow-md hover:-translate-y-0.5
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                    Book a demo
                </a>
            </div>

        </nav>
    </header>
`
}

document.getElementById('navbar').innerHTML=navbar()



// console.log(navbar());