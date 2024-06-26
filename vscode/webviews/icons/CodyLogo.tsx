import type React from 'react'

export const CodyLogo: React.FunctionComponent<
    React.PropsWithChildren<React.SVGAttributes<SVGSVGElement>> & { size: number }
> = ({ size, ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Cody logo"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.799 -1.0423e-07C19.1159 -4.66655e-08 20.1835 1.06758 20.1835 2.38451L20.1835 6.62365C20.1835 7.94058 19.1159 9.00816 17.799 9.00816C16.482 9.00816 15.4144 7.94058 15.4144 6.62365L15.4144 2.38451C15.4144 1.06758 16.482 -1.61795e-07 17.799 -1.0423e-07Z"
            fill="#FF5543"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.6969 5.56396C2.6969 4.24703 3.76448 3.17944 5.08141 3.17944H9.32055C10.6375 3.17944 11.7051 4.24703 11.7051 5.56396C11.7051 6.88089 10.6375 7.94847 9.32055 7.94847H5.08141C3.76448 7.94847 2.6969 6.88089 2.6969 5.56396Z"
            fill="#A112FF"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.4979 12.5055C24.3466 13.3117 24.381 14.6533 23.5748 15.502L22.8246 16.2917C16.9538 22.4715 7.05634 22.3175 1.38065 15.9582C0.601182 15.0848 0.677291 13.745 1.55064 12.9655C2.424 12.186 3.76387 12.2621 4.54334 13.1355C8.5685 17.6455 15.5877 17.7546 19.7512 13.372L20.5014 12.5823C21.3077 11.7336 22.6493 11.6992 23.4979 12.5055Z"
            fill="#00CBEC"
        />
    </svg>
)

// Black and white version of the Cody logo
export const CodyLogoBW: React.FunctionComponent<
    React.PropsWithChildren<React.SVGAttributes<SVGSVGElement>> & { size: number }
> = ({ size, ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 25 25"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Cody logo"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.799 -1.0423e-07C19.1159 -4.66655e-08 20.1835 1.06758 20.1835 2.38451L20.1835 6.62365C20.1835 7.94058 19.1159 9.00816 17.799 9.00816C16.482 9.00816 15.4144 7.94058 15.4144 6.62365L15.4144 2.38451C15.4144 1.06758 16.482 -1.61795e-07 17.799 -1.0423e-07Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.6969 5.56396C2.6969 4.24703 3.76448 3.17944 5.08141 3.17944H9.32055C10.6375 3.17944 11.7051 4.24703 11.7051 5.56396C11.7051 6.88089 10.6375 7.94847 9.32055 7.94847H5.08141C3.76448 7.94847 2.6969 6.88089 2.6969 5.56396Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.4979 12.5055C24.3466 13.3117 24.381 14.6533 23.5748 15.502L22.8246 16.2917C16.9538 22.4715 7.05634 22.3175 1.38065 15.9582C0.601182 15.0848 0.677291 13.745 1.55064 12.9655C2.424 12.186 3.76387 12.2621 4.54334 13.1355C8.5685 17.6455 15.5877 17.7546 19.7512 13.372L20.5014 12.5823C21.3077 11.7336 22.6493 11.6992 23.4979 12.5055Z"
            fill="currentColor"
        />
    </svg>
)
