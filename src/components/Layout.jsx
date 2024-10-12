import { ReactNode } from 'react'

export default function Layout({ children }) {
  return (
    <div className="main-container">
      {children}
    </div>
  )
}