import slbStyles from './social-link.module.scss';
import Link from 'next/link';

interface SocialLinkTypes {
    imageURL?: string, 
    children?: any
}

const SocialLink: React.FC<SocialLinkTypes> = ({ imageURL, children }) => {
    return (
        <Link href="#" target="_blank">
            <div className={`${slbStyles.socialLink} ${slbStyles.socialLink__twitter}`}>
                { children }
            </div>
        </Link>
    )
}

export default SocialLink;