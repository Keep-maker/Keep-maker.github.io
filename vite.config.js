import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/', // 根路径，保证 CSS/JS 在 GitHub Pages 根域名下正确加载
})
