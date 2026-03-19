// app/providers.tsx
'use client' // <--- Muy importante

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export default function Providers({ children }: { children: React.ReactNode }) {
  // Usamos useState para asegurar que cada sesión de usuario 
  // tenga su propio cliente y no se recree innecesariamente.
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}