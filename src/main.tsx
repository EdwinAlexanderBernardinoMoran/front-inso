import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AttendanceSystemApp } from './AttendanceSystemApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AttendanceSystemApp />
  </StrictMode>,
)
