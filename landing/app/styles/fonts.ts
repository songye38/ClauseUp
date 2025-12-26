
import localFont from 'next/font/local'
import { Noto_Serif_KR, Aleo } from 'next/font/google'

export const notoSerif = Noto_Serif_KR({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-serif',
  display: 'swap',
})

export const aleo = Aleo({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-aleo',
  display: 'swap',
})


/** 2. 다운로드한 로컬 폰트 */
export const swaggerFont = localFont({
  src: [
    { path: '../../fonts/SDSwaggerTTF.woff2', weight: '400' }, // fonts.ts 기준 상대경로
  ],
  variable: '--font-brand',
  display: 'swap',
})
/** 3. CDN 웹 폰트 */
// export const pretendard = localFont({
//   src: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@latest/dist/web/variable/woff2/PretendardVariable.woff2',
//   variable: '--font-pretendard',
//   display: 'swap',
// })
