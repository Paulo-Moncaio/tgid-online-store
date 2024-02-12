import { useRouter } from 'next/router';

export default function ProductDetailPage () {
  const router = useRouter();
  const { slug } = router.query;

  // Use o slug para buscar os detalhes do jogo no banco de dados ou em uma API

  return (
    <div>
      <h1>Detalhes do Jogo: {slug}</h1>
      {/* Renderize os detalhes do jogo aqui */}
    </div>
  )
}