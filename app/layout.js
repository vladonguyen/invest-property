import {Popins, Aboreto, Poppins} from 'next/font/google';
import "../styles/globals.css";

const poppins = Poppins ({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    variable: "--font-poppins"
});

const aboreto = Aboreto ({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
    variable: "--font-aboreto"
});

export default function RootLayout({children}){
    return (
        <html lang="en" className={`${poppins.variable} ${aboreto.variable}`}>
    <body className='font-body'>
        {children}
    </body>
    </html>);
}