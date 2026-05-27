import '../index.css'

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full px-12 py-6 flex justify-between items-center bg-[#0d0d0d]/90 backdrop-blur-md border-b-[3px] border-accent z-50 font-display [clip-path:polygon(0_0,100%_0,100%_70%,98%_100%,0_100%)]">
      <div className="text-acccent font-black tracking-tighter text-xl">
        CEE_P1 // <span className="text-tertiary">ACTIVE</span></div>
      <div className="text-tertiary font-bold tracking-wide text-lg">
        LINK_ESTABLISHED // <span className="text-accent">SECURE</span>
      </div>
    </nav>
  )
}