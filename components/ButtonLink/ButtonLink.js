import Link from 'next/link';


export const ButtonLink = ({destination, label}) => {
    return     <Link legacyBehavior href={destination}>
    <a className='btn'>
        {label}
    </a>
</Link>
}