import React from 'react'
import './PrivacyPolicy.css'

function PrivacyPolicy() {
    return (
        <div className='pp-container flex flex-col text-white min-h-screen justify-center items-center p-[6rem] gap-2'>
            <header className='text-4xl font-bold'>Privacy Policy</header>
            <h3><strong>Last updated:</strong> June 19, 2026</h3>
            <p className='mt-4'>
                We respect your privacy. This website is created for educational and learning purposes only.
                <br/><br/>
                We do not collect any personal information from users unless voluntarily provided. Basic technical data such as browser type, device information, and usage behavior may be collected to improve website performance.
                <br/><br/>
                We may use cookies to enhance user experience and analyze traffic. You can disable cookies anytime in your browser settings.
                <br/><br/>
                We do not sell, share, or misuse any personal data.
                <br/><br/>
                This website uses the <strong>RAWG Video Games Database API for game information, images, and related content.</strong> All rights to such content belong to their respective owners. We do not claim ownership of any third-party data displayed on this site.
                <br/><br/>
                We are not responsible for external links or third-party services linked from this website.
                <br/><br/>
                By using this website, you agree to this Privacy Policy. Updates may be made from time to time.
            </p>
        </div>
    )
}

export default PrivacyPolicy
