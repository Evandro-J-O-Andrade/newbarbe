import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

interface BackButtonProps {
  label?: string
  fallback?: string
}

export default function BackButton({ label = 'Voltar', fallback = '/' }: BackButtonProps) {
  const navigate = useNavigate()

  function handleClick() {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate(fallback)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-amber-500 transition-colors text-sm font-medium"
    >
      <ChevronLeft className="w-4 h-4" />
      {label}
    </button>
  )
}