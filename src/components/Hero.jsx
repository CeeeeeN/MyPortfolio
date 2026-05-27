export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-[10%] bg-[radial-gradient(circle_at_80%_20%,_rgba(252,238,10,0.05)_0%,transparent_70%),_radial-gradient(circle_at_20%_80%,_rgba(252,238,10,0.05)_0%,transparent_40%)]">
        <div className="relative mb-8 mt-16 sm:mt-0">
            <div className="glitch font-cyber text-[clamp(2.5rem,10vw,5rem)] font-black uppercase leading-none text-fg tracking-[5px]" data-text="LAUNCHING" >
                Hello, I'm
            </div>
            <div className="glitch font-cyber text-[clamp(3rem,12vw,10rem)] font-black uppercase leading-[0.9] text-fg tracking-[2px] sm:tracking-[5px]" data-text="CHAELSY BENJ" >
                CHAELSY BENJ
            </div>
        </div>

        <p className="font-display text-base sm:text-xl text-accent mb-12 max-w-[600px] border-l-4 border-accent pl-4 sm:pl-6">
            I'm a 3rd Year Information Technology Student at the Pamantasan ng Lungsod ng Valenzuela. <br /> I have a strong passion for coding and making games and eager to apply my skills in real-world projects. <br /> I am currently seeking internship opportunities to gain practical experience and contribute to innovative software solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto">
            <a 
                href="/Chaelsy_Benj_Jumawan_CV.pdf" 
                download="Chaelsy_Benj_Jumawan_CV.pdf"
                className="font-display text-center uppercase font-extrabold px-8 sm:px-12 py-4 sm:py-5 bg-accent text-bg hover:-translate-y-1 hover:shadow-[-10px_10px_0_var(--tw-colors-secondary)] transition-all [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]"
            >
                DOWNLOAD_CV
            </a>

            <a 
                href="#contact" 
                className="font-display text-center uppercase font-extrabold px-8 sm:px-12 py-4 sm:py-5 bg-transparent text-secondary border-2 border-secondary hover:bg-secondary hover:text-bg transition-all [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)]"
            >
                SEND_MESSAGE
            </a>
        </div>
    </section>
  )
}