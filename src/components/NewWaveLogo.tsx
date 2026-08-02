import { SVGProps } from 'react'

const NewWaveLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 192"
    fill="none"
    {...props}
  >
    <defs>
      <linearGradient id="logoSkullGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#f59e0b' }} />
        <stop offset="50%" style={{ stopColor: '#d97706' }} />
        <stop offset="100%" style={{ stopColor: '#f59e0b' }} />
      </linearGradient>
    </defs>

    <g transform="translate(48, 30) scale(1.4)">
      <path
        d="M60 0 C85 0 100 15 100 35 C100 45 95 55 85 60 C90 70 90 80 85 90 C80 100 70 105 60 105 C50 105 40 100 35 90 C30 80 30 70 35 60 C25 55 20 45 20 35 C20 15 35 0 60 0 Z"
        fill="url(#logoSkullGrad)"
        stroke="#d97706"
        strokeWidth="2"
      />
      <circle cx="48" cy="38" r="7" fill="#000" />
      <circle cx="72" cy="38" r="7" fill="#000" />
      <circle cx="48" cy="38" r="3" fill="#fff" />
      <circle cx="72" cy="38" r="3" fill="#fff" />
      <path d="M55 55 C60 60 65 60 70 55" stroke="#000" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path
        d="M35 70 C20 85 10 105 15 125 C20 140 35 150 55 150 C75 150 90 140 95 125 C100 105 90 85 85 70 C80 72 75 74 70 74 C65 74 60 72 55 70 Z"
        fill="url(#logoSkullGrad)"
        stroke="#d97706"
        strokeWidth="1.5"
      />
    </g>

    <path d="M62 118 C57 123 53 131 56 139 C59 147 68 153 77 152 C83 149 87 143 87 137 C87 131 83 125 78 122 C72 124 66 122 60 120 Z" fill="#000" opacity="0.8" />
    <path d="M98 118 C103 123 107 131 104 139 C101 147 92 153 83 152 C77 149 73 143 73 137 C73 131 77 125 82 122 C88 124 94 122 98 120 Z" fill="#000" opacity="0.8" />

    <path d="M50 140 L45 155 C43 162 50 168 58 168 C66 168 73 162 70 155 Z" fill="#000" />
    <path d="M82 140 L87 155 C89 162 82 168 74 168 C66 168 59 172 62 180 C65 188 73 192 80 192" fill="none" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />

    <circle cx="45" cy="132" r="3" fill="#d97706" />
    <circle cx="93" cy="132" r="3" fill="#d97706" />
  </svg>
)

export default NewWaveLogo
