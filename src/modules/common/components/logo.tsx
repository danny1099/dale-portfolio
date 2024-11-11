import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/">
      <img
        src="/images/dale-logo.png"
        alt="dale-logo"
        className="w-8 h-8"
        lang="en"
        loading="eager"
        width={30}
        height={30}
      />
    </Link>
  )
}
