<template>
  <section class="flex flex-wrap justify-center m-auto py-8  ">
    <section class="relative my-5 hidden lg:block ">
      <img class="w-full rounded-sm" src="../../assets/Group1.svg" alt="">
      <div class=" absolute left-0 top-0 text-white p-2">
        <div className="pb-1">
          <h2 className="p-6 xl:pt-10   pt-8 xl:pb-10 pb-4 text-6xl  font-bold font-Iceberg ">Contact</h2>
          <p className="px-6 w-6/12 xl:text-lg :text-base font-poppins">J’espère que mon portfolio vous auras plu. Si vous avez des questions ou vous souhaitez tous simplement discuter, n’hésitez pas je me ferais un plaisir de vous répondre !</p>
        </div>   
        <div class="ml-6 text-center "> 
          <img class="w-2/6 " src="../../assets/Contactus.png" alt="">
        </div>
      </div>
      <div class="bg-white absolute left-[50%] top-0 w-1/2 h-full pb-20 rounded-r-sm px-6 font-poppins ">
        <form action="https://getform.io/f/2d44917b-20af-48e2-a0ea-6362b05169e4" method="POST" className=" flex flex-col w-full md:w-1/2">
          <div class="xl:flex hidden  gap-10 mt-8">
            <div>
              <label for="Prenom" class="py-2">Prénom</label>
              <input type="text" name="firstname" placeholder="Entrez votre Prénom" className="p-2 bg-transparent border-2 rounded-md text-black   focus:outline-none"/>
            </div>
            <div>
              <label for="nom" class="py-2">Nom</label>
              <input type="text" name="Lastname" placeholder="Entrez votre nom" className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"/>
            </div>
          </div>
          <div class="xl:hidden  flex py-2  gap-10 mt-8">
            <div>
              <label for="Prenom" class="py-2">Prénom</label>
              <input type="text" name="firstname" placeholder="Entrez votre Prénom" className="p-2 bg-transparent border-2 rounded-md text-black   focus:outline-none w-[160px]"/>
            </div>
            <div>
              <label for="nom" class="py-2">Nom</label>
              <input type="text" name="Lastname" placeholder="Entrez votre nom" className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none w-[160px]"/>
            </div>
          </div>
          <div class="xl:hidden  flex py-2  gap-10 mt-8">
            <div>
              <label for="email" class="pt-6">Email</label>
            <input type="text" name="email" placeholder="Entrez votre email" className="my-4 p-2 bg-transparent border-2  rounded-md text-black focus:outline-none xl:w-[485px] w-[160px]"/>
            </div>
            <div>
              <label for="subject" class="pt-6">Sujet</label>
            <input type="text" name="subject" placeholder="Entrez votre Sujet" className="my-4 p-2 bg-transparent border-2  rounded-md text-black focus:outline-none xl:w-[485px]  w-[160px]"/>
            </div>
          </div>
          <div class="hidden xl:block">
            <label for="email" class="pt-6">Email</label>
            <input type="text" name="email" placeholder="Entrez votre email" className="my-4 p-2 bg-transparent border-2  rounded-md text-black focus:outline-none xl:w-[485px] w-[360px]"/>

            <label for="subject" class="pt-6">Sujet</label>
            <input type="text" name="subject" placeholder="Entrez votre Sujet" className="my-4 p-2 bg-transparent border-2  rounded-md text-black focus:outline-none xl:w-[485px]  w-[360px]"/>
          </div>
            <label for="message" class="py-2">Message</label>
            <textarea name="message" placeholder="Entrez votre message" rows="3"
            className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none xl:w-[485px] w-[360px] "></textarea>   
            <div class="mx-auto mt-10">         
                <button type="submit">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                        </div>
                    </div>
                    <span>Envoyer le Message</span>
                </button>
            </div>
        </form>
      </div>
    </section>
  </section>  
  <div class="flex flex-wrap justify-center m-auto py-4  mx-2">
    <section class="relative my-5 block lg:hidden ">
      <img class="  rounded-sm h-[890px]" src="../../assets/Group.jpg" alt="">
      <div class=" absolute left-0 top-0 text-white p-2">
        <div className="">
          <h2 className="p-4 xl:pt-10   pt-4 xl:pb-10 pb-4  text-2xl font-bold font-Iceberg ">Contact</h2>
          <p className="px-4 w-full xl:text-xs :text-base font-poppins">J’espère que mon portfolio vous auras plu. Si vous avez des questions ou vous souhaitez tous simplement discuter, n’hésitez pas je me ferais un plaisir de vous répondre !</p>
        </div>
        <div class="ml-6 text-center flex justify-center "> 
          <img class=" w-3/6 xs:w-1/6 md:w-2/6 pt-4 text-center " src="../../assets/Contactus.png" alt="">
        </div>
      </div>
      <div class="bg-white absolute left-0 top-[44%] w-full py-2 rounded-b-sm px-6 font-poppins flex justify-center ">
        <form action="https://getform.io/f/2d44917b-20af-48e2-a0ea-6362b05169e4" method="POST" className=" flex flex-col w-full md:w-1/2">
            <label for="Prenom" class="">Prénom</label>
            <input type="text" name="firstname" placeholder="Entrez votre Prénom" className="p-2 bg-transparent border-2 rounded-md text-black   focus:outline-none"/>

            <label for="nom" class="">Nom</label>
            <input type="text" name="Lastname" placeholder="Entrez votre nom" className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"/>

            <label for="email" class="">Email</label>
            <input type="text" name="email" placeholder="Entrez votre email" className="my-1 p-2 bg-transparent border-2  rounded-md text-black focus:outline-none"/>

            <label for="subject" class="">Sujet</label>
            <input type="text" name="subject" placeholder="Entrez votre Sujet" className="my-1 p-2 bg-transparent border-2  rounded-md text-black focus:outline-none "/>

            <label for="message" class="py-1">Message</label>
            <textarea name="message" placeholder="Entrez votre message" rows="3"
            className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none "></textarea>   
            <div class="mx-auto mt-4">         
                <button type="submit">
                    <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                        </div>
                    </div>
                    <span>Envoyer le Message</span>
                </button>
            </div>
        </form>
      </div>
    </section>

  </div>

    
</template>
<style scoped>
button {
  font-family: inherit;
  font-size: 20px;
  /* background: royalblue; */
  background: #11074c;
  color: white;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s;
}

button span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}

button svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}

button:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover svg {
  transform: translateX(5em) rotate(45deg) scale(1.1);
}

button:hover span {
  transform: translateX(11em);
}

button:active {
  transform: scale(0.95);
}

@keyframes fly-1 {
  from {
    transform: translateY(0.3em);
  }

  to {
    transform: translateY(-0.2em);
  }
}

</style>