import nextJest from 'next/jest.js';

// nextJest provee la configuración automática para Next.js
const createJestConfig = nextJest({
  // Proveer el directorio raíz de la app de Next.js para cargar next.config.js y .env
  dir: './',
});

// Añadir cualquier configuración personalizada que necesite Jest
/** @type {import('jest').Config} */
const config = {
  // Opciones de configuración que se cargarán antes de cada test
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
  // Entorno similar a un navegador para probar componentes de React
  testEnvironment: 'jest-environment-jsdom',
  
  // Mapeo absoluto de rutas para coincidir con jsconfig.json (@/...)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },

  // Ignorar tests que usan el runner nativo `node:test` (carpeta `scripts/`),
  // ya que se ejecutan por separado mediante `npm run secdevops:selftest`.
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '<rootDir>/scripts/',
  ],
};

// createJestConfig exporta la configuración de una forma asíncrona validada por Next.js
export default createJestConfig(config);
