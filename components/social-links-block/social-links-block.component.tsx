import slbStyles from './social-links-block.module.scss';
import SocialLink from '../social-link/social-link.component';
import { SocialNetworksTypes } from '../../data/content';

interface SocialLinksBlockTypes {
    socialNetworks: SocialNetworksTypes
}

export default function SocialLinksBlock({ socialNetworks }: SocialLinksBlockTypes) {
    return (
        <div className={`${slbStyles.socialLinksBlock}`}>
            { socialNetworks.linkedIn ? 
                <SocialLink url={`https://www.linkedin.com/in/${socialNetworks.linkedIn}`}>in</SocialLink> :
                null
            }
            { socialNetworks.twitter ? 
                <SocialLink url={`https://twitter.com/${socialNetworks.twitter}`}>t</SocialLink> :
                null
            }
        </div>
    )
}