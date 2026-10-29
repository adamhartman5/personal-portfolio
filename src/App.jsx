export default function App() {
  return (
    <main className="min-h-screen p-2">
      <nav className='flex flex-row flex-wrap'>
        <a href='#contact' className='m-2'>Contact</a>
        <a href='#work' className='m-2'>Work</a>
      </nav>
      <section>
        <div className='p-1 m-1 py-3'>
          <h1 className='py-2 text-xl'>Adam Hartman</h1>
          <p className='py-2 text-sm max-w-200'>I am a junior developer with knowledge in HTML, CSS, JavaScript and React. I am focused on building full stack apps along with SPAs.</p>
        </div>
        <div id='contact'>
          <h2 className='p-1 py-3 m-1'>Contact Info</h2>
        </div>
        <div id='work'>
          <h2 className='p-1 py-3 m-1'>Work</h2>
        </div>
      </section>
    </main>
  )
}
