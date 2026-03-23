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
