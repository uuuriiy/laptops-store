export const breakpoints = {
    tablet: '@media (max-width: 1079px)',
    mobile: '@media (max-width: 767px)',
}

export const BASE_URL = 
    process.env.NODE_ENV === "development" ?
        "http://localhost:3000"
        : process.env.PRODUCTION_URL;
