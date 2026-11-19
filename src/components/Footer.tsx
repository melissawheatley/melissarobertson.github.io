export function Footer() {
  return (
    <footer className="max-w-md text-sm leading-normal text-slate-500">
      <p>
        Built with{' '}
        <a
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://react.dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          React
        </a>
        ,{' '}
        <a
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://vite.dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vite
        </a>
        , and{' '}
        <a
          className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tailwind CSS
        </a>
        . 
      </p>
    </footer>
  )
}
