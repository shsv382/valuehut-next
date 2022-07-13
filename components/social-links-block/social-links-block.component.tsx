import slbStyles from './social-links-block.module.scss';
import SocialLink from '../social-link/social-link.component';
import { SocialNetworksTypes } from '../../data/content';

interface SocialLinksBlockTypes {
    socialNetworks: SocialNetworksTypes
}

export default function SocialLinksBlock({ socialNetworks }: SocialLinksBlockTypes) {
    return (
        <div className={`${slbStyles.socialLinksBlock}`}>
            <SocialLink>in</SocialLink>
            <SocialLink>t</SocialLink>
        </div>
    )
}