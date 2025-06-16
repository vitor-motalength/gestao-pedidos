import Link from 'next/link'

export default function IndexPage() {
  return (
    <main>
      <h1>Bem-vindo ao UM Sushi Frontend</h1>
      <Link href="/home">
        Ir para Hello UM Sushi
      </Link>
    </main>
  )
}
