import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lembar1 />
    </div>
  );
}
function Lembar1() {
  return (
     <div class="bg-[#e4f1ee] min-h-screen flex flex-col overflow-x-hidden">
      {/*Bagian Navigasi (Header)*/}
      <nav class="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-10 relative">
          {/* Logo */}
          <div class="flex items-center gap-2 cursor-pointer">
              <div class="bg-orange-400 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
              </div>
              <span class="text-xl font-bold text-teal-950 tracking-wide">Wanderlust</span>
          </div>

          {/* Menu Navigasi Tengah */}
          <div class="hidden md:flex items-center gap-10 text-teal-800/80 font-medium text-sm">
              <a href="#" class="hover:text-orange-500 transition-colors">Destinations</a>
              <a href="#" class="hover:text-orange-500 transition-colors">Packages</a>
              <a href="#" class="hover:text-orange-500 transition-colors">Blog</a>
          </div>

          {/* Tombol Aksi Kanan */}
          <div class="hidden md:block">
              <a href="#" class="bg-teal-900 hover:bg-teal-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md">
                  Book Now
              </a>
          </div>

          {/* Menu Mobile (Hamburger) */}
          <div class="md:hidden text-teal-900">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
          </div>
      </nav>

      {/*Bagian Konten Utama (Hero Section)*/}
      <main class="flex-1 flex items-center w-full max-w-7xl mx-auto px-6 py-12 lg:py-0 relative z-10">
          
          {/* Kolom Teks Sebelah Kiri */}
          <div class="w-full lg:w-1/2 flex flex-col items-start pt-10 lg:pt-0">
              
              {/* Teks Kicker/Label Kecil */}
              <span class="text-orange-400 font-semibold tracking-widest text-sm uppercase mb-4">
                  Explore The World
              </span>

              {/* Judul Utama */}
              <h1 class="text-6xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                  <span class="text-teal-950 block">Adventure</span>
                  <span class="text-orange-400 block">Awaits You.</span>
              </h1>

              {/* Paragraf Deskripsi */}
              <p class="text-teal-800/70 text-base md:text-lg mb-10 max-w-md leading-relaxed font-light">
                  Discover breathtaking destinations and create unforgettable memories with our curated travel experiences tailored just for you.
              </p>

              {/* Grup Tombol */}
              <div class="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                  {/* Tombol Primary */}
                  <a href="#" class="w-full sm:w-auto text-center bg-orange-400 hover:bg-orange-500 text-white px-8 py-3.5 rounded-full font-semibold shadow-[0_8px_20px_-6px_rgba(251,146,60,0.6)] transition-all transform hover:-translate-y-0.5">
                      Start Planning
                  </a>
                  {/* Tombol Secondary dengan Ikon */}
                  <a href="#" class="w-full sm:w-auto flex items-center justify-center gap-3 text-teal-950 font-semibold hover:text-orange-500 transition-colors group">
                      <div class="bg-white p-2.5 rounded-full shadow-sm group-hover:shadow text-orange-400 group-hover:text-orange-500 transition-all">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 ml-0.5">
                              <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                          </svg>
                      </div>
                      Watch Video
                  </a>
              </div>
          </div>
          
          {/* Ruang Kosong Sebelah Kanan (Bisa diisi gambar nantinya) */}
          {/* Dalam desain Anda, area ini tampak kosong/minimalis, jadi kita biarkan transparan */}
          <div class="hidden lg:block w-1/2">
              {/* Tempat untuk memasukkan gambar ilustrasi atau foto destinasi */}
          </div>

      </main>

      {/* Elemen Dekorasi Background (Opsional untuk memberikan tekstur/gradien) */}
      <div class="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none"></div>
    </div>
  );
}


export default App;
