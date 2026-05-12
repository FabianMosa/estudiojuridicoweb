// Importación para habilitar expect(...).toBeInTheDocument(), etc.
import '@testing-library/jest-dom';

// Mock global de la navegación de Next.js
// Debido a que los componentes a menudo interactúan con useRouter y usePathname
jest.mock('next/navigation', () => {
    return {
        __esModule: true,
        usePathname: () => ({
            pathname: '',
        }),
        useRouter: () => ({
            push: jest.fn(),
            replace: jest.fn(),
            prefetch: jest.fn(),
            back: jest.fn(),
            forward: jest.fn(),
        }),
        useSearchParams: () => ({
            get: () => {}
        })
    };
});

// Mock global de next/dynamic
// Los Client Components cargados dinámicamente con ssr:false (p. ej. MapaLeaflet)
// dependen de APIs del DOM (Leaflet usa window) que no existen en jsdom y
// generan re-renders asíncronos que rompen la temporización de los tests.
// En el entorno de pruebas devolvemos un componente stub que no renderiza nada.
jest.mock('next/dynamic', () => () => {
    const DynamicStub = () => null;
    DynamicStub.displayName = 'DynamicStub';
    return DynamicStub;
});
