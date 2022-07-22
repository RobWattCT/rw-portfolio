const Footer = () => {
  return (
    <footer className="bg-slate-800 py-12 h-32">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/react-bricks-icon.svg"
            alt="React Bricks"
            className="w-8"
          />
          <div className="text-gray-500 uppercase text-sm tracking-wider">Stack: NextJS, React Bricks, Tailwind CSS</div>
        </div>
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{' '}
          <a href="#" className="hover:text-pink-600">
            Rob Watt
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
