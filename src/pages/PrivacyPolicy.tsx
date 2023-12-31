import { Box, Typography, useMediaQuery } from "@mui/material";

import { useEffect } from "react";

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const isXsScreen = useMediaQuery("(max-width:600px)");
    return (
        <>
            <Box maxWidth={"1340px"} margin={isXsScreen ? "0px" : "0 auto"} padding={"10px"}>
                <Box>
                    <Typography
                        padding="3rem 1rem 1rem"
                        textAlign={"center"}
                        color={"black"}
                        fontWeight={500}
                        fontSize={isXsScreen ? "45px" : "80px"}
                        lineHeight={"1"}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    // paddingBottom={isXsScreen ? "10px" : "20px"}
                    >
                        ALTERKNIT NEW YORK PRIVACY POLICY
                    </Typography>
                </Box>
                <Box margin={"15px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                    >
                        Your privacy is important to us. Accordingly, we have developed this
                        Privacy Policy to describe your privacy rights regarding our
                        collection, use, storage, sharing, and protection of your personal
                        information. It applies to the AlterKnit New York website and all
                        related applications, services and tools where this policy is
                        referenced, regardless of how you access or use them, including
                        mobile devices.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        SCOPE AND CONSENT
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        By using AlterKnit New York and any of its related applications,
                        services and tools, and/or registering for an AlterKnit New York
                        account by using a service request form and/or packaging slip found
                        on the website, you expressly consent to our collection, use,
                        disclosure, and retention of your personal information as described
                        in this Privacy Policy and in our Terms and Conditions. Throughout
                        this Privacy Policy, we use the term “personal information” to
                        describe information that can be associated with a specific person
                        and could be used to identify that person. We do not consider
                        personal information to include information that has been made
                        anonymous or aggregated so that it can no longer be used, whether in
                        combination with other information or otherwise, to identify a
                        specific person.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        CHANGES TO PRIVACY POLICY
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        From time to time, it may be necessary for us to review and revise
                        this Privacy Policy. We reserve the right to update this Privacy
                        Policy at any time and notify you here by posting an updated version
                        of the policy on the AlterKnit New York website, so please review it
                        frequently. Changes and clarifications will take place immediately
                        upon their posting. Your continued use of the AlterKnit New York
                        website and services following the post of an updated Privacy Policy
                        will mean that you accept the updates.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={"400"}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        MOBILE PRIVACY
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        We may offer you the ability to connect with our site, or use our
                        applications, services, and tools using a mobile device, either
                        through a mobile application or via a mobile optimized website. The
                        provisions of this Privacy Policy apply to all such mobile access
                        and use of mobile devices. When you access our mobile optimized
                        site, we may receive information about your location and your mobile
                        device, including a unique identifier for your device. We may use
                        this information to provide you with location based services, such
                        as advertising, search results, and other personalized content. Most
                        mobile devices allow you to control or disable location services in
                        the device’s setting’s menu. If you have questions about how to
                        disable your device’s location services, we recommend you contact
                        your mobile service carrier or the manufacture of your particular
                        device.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        CHILDREN'S PRIVACY
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        The AlterKnit New York website is a general audience website, and it
                        and its related applications, services, and tools are not intended
                        for children under the age of 13. We do not knowingly collect
                        personal information via our website, applications, services, or
                        tools from users in this age group.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        COLLECTION OF PERSONAL INFORMATION
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        You can browse our site without telling us who you are or revealing
                        any personal information about yourself. This information is
                        associated to your account only when you provide your contact
                        information anywhere on our site. If you provide your contact
                        information, you give us your personal information, and you are not
                        anonymous to us. If you choose to provide us with personal
                        information, you consent to the transfer and storage of that
                        information on our servers located in the United States. We collect
                        the following types of personal information in order to provide you
                        with the use of and access to our site, applications, services and
                        tools, and to help us personalize and improve your experience:
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        INFORMATION WE COLLECT AUTOMATICALLY
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        When you visit our site, use our applications, services, and tools,
                        or interact with our content, we may automatically collect
                        information sent to us by your computer, mobile device, or other
                        access device. This information is associated with you personally
                        only when you provide your contact information, and may include but
                        is not limited to: device ID or unique identifier, device type,
                        geo-location information, computer and connection information,
                        statistics on page views, traffic to and from the sites, referral
                        URL, ad data, IP address, and standard web log information,
                        anonymous information collected through our use of cookies and web
                        beacons.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        INFORMATION YOU GIVE US
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        We collect and store any information you enter on our site or you
                        provide to us in context of using our site, applications, services
                        or tools. This may include, but is not limited to: information you
                        provide us when providing your contact information on one of our
                        forms, including email address, phone number, physical contact
                        information, and sometimes financial information, such as credit
                        card or bank account numbers; transactional information based on
                        your activities on the site; shipping, billing and other information
                        you provide; information provided in the context of dispute
                        resolution, correspondence through our site, or correspondence sent
                        to us; additional personal information we ask you to submit to
                        authenticate yourself or if we believe you are violating site
                        policies (for example, we may ask you to send us an ID or bill to
                        verify your address, or to answer additional questions online to
                        help verify your identity).
                        <Typography color={"#575656"} fontWeight={"500"} fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }} letterSpacing={"0px"} lineHeight={"1.2"}>
                            Information from other sources
                        </Typography>
                        <Typography color={"#575656"} fontWeight={"500"} fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }} letterSpacing={"0px"} lineHeight={"1.2"}>
                            We may receive or collect supplemental information about you from
                            third party sources and add it to your account information. This
                            may include, but is not limited to, demographic, navigation
                            information, additional contact information, credit check
                            information, and additional information about you from credit
                            bureaus or other sources, as permitted by law.
                        </Typography>
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        USE OF PERSONAL INFORMATION
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        Our primary purpose in collecting personal information is to provide
                        you with access to our site and/or use of our services, applications
                        and tools, provide you with requested customer service and relevant
                        information about your account and our services, and to provide you
                        with a safe, smooth, efficient, and customized experience. You agree
                        that we may use your personal information to: provide you access to
                        our site and the services and customer support you request; prevent,
                        detect, and investigate, fraud, security breaches, potentially
                        prohibited or illegal activities, and enforce our Terms and
                        Conditions; customize, measure and improve our services, content and
                        advertising; contact you, either via email, surface mail or
                        telephone, to resolve disputes, collect fees, and troubleshoot
                        problems with your account or our site, services, applications or
                        tools, or for other purposes authorized by law; contact you, either
                        via email, surface mail or telephone to inform you about our
                        services, deliver targeted marketing, service updates, and
                        promotional offers based on your communication preferences; compare
                        information for accuracy, and verify it with third parties; contact
                        you at any telephone number using auto-dialed or pre-recorded
                        message calls or text (SMS) messages (if applicable) as authorized
                        for the purposes described in this Privacy Policy; provide you other
                        services requested by you as described when we collect the
                        information.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        MARKETING
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        We do not sell or rent your personal information to third parties
                        for their marketing purposes without your explicit consent. We may
                        combine your information with information we collect from other
                        companies and use it to improve and personalize our services,
                        content and advertising. If you do not wish to receive marketing
                        communications from us, you can choose to unsubscribe within the
                        direct communication from us.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        OUR DISCLOSURE OF YOUR INFORMATION
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        We may disclose personal information to respond to legal
                        requirements, enforce our policies, respond to claims that your
                        content violates the rights of others, or protect anyone’s rights,
                        property, or safety. Such information will be disclosed in
                        accordance with this Privacy Policy and applicable laws and
                        regulations. As stated above, we do not disclose your personal
                        information to third parties for their marketing purposes without
                        your explicit consent. We may also share your personal information
                        with: Service providers who help with our business operations (such
                        as, but not limited to, fraud investigations, shipping, bill
                        collection, affiliate and rewards programs and site operations);
                        Financial institution partners of AlterKnit New York who offer
                        financial products (such as WebBank and Comenity Capital Bank), with
                        whom we partner with to provide Bill Me Later, a PayPal Service) to
                        provide joint content and services (like registration, transactions
                        and customer support), to help detect and prevent potentially
                        illegal acts, violations of our policies, fraud and/or security
                        breaches, and to guide decisions about their products, websites,
                        applications, services and tools, and communications. These third
                        party financial institution partners will use this information to
                        send you marketing communications only if you have requested their
                        services and will use your personal information in compliance their
                        respective privacy policies and consistent with this Privacy
                        Policy;]; Other third parties to whom you explicitly ask us to send
                        your information (or about whom you are otherwise explicitly
                        notified and consent to when using a specific service); Law
                        enforcement, governmental agencies, or authorized third-parties, in
                        response to a verified request relating to a criminal investigation
                        or alleged illegal activity or any other activity that may expose
                        us, you, or any other AlterKnit New York user to legal liability. In
                        such events, we will only disclose information relevant and
                        necessary to the investigation or inquiry, such as name, city,
                        state, ZIP code, telephone number, email address, User ID history,
                        IP address and anything else we may deem relevant to the
                        investigation; Credit bureaus to whom we may report information
                        about your account, including information on late payments, missed
                        payments, or other defaults on your account that may be reflected in
                        your credit report; Other business entities, should we plan to merge
                        with or be acquired by that business entity; Without limiting the
                        above, in an effort to respect your privacy, we will not otherwise
                        disclose your personal information to law enforcement, other
                        government officials, or other third parties without a subpoena,
                        court order or substantially similar legal procedure, except when we
                        believe in good faith that the disclosure of information is
                        necessary to prevent imminent physical harm or financial loss or to
                        report suspected illegal activity.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        OUR USE OF COOKIES, WEB BEACONS, LOCAL STORAGE AND SIMILAR
                        TECHNOLOGIES
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        When you visit or interact with our site, services, applications,
                        messaging (such as email), and tools, we or our authorized service
                        providers may use cookies, web beacons, and other similar
                        technologies for storing information to help provide you with a
                        better, faster, and safer experience.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        NO SPAM, SPYWARE, OR SPOOFING
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        We and our customers do not tolerate spam. To report AlterKnit New
                        York-related spam or spoof emails to AlterKnit New York, please
                        forward the email to request@AlterKnitNewYork.com. You may not use
                        our communication tools to send spam or otherwise send content that
                        would violate our Terms and Conditions. We may automatically scan
                        and manually filter messages to check for spam, viruses, phishing
                        attacks and other malicious activity or illegal or prohibited
                        content.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        HOW WE PROTECT AND STORE YOUR INFORMATION
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        We store and process your personal information on our computers.
                        Some of the information gathered (such as the email list) will be
                        stored on the hostgator server (our site’s host), where we rent
                        space, and partially stored on our third party mass mailing sender
                        service. We protect your information using technical and
                        administrative security measures to reduce the risks of loss,
                        misuse, unauthorized access, disclosure and alteration. Although we
                        take these precautions, to protect your Personal Information, due to
                        technical limitations, we do not represent, warrant and/or guarantee
                        that personal information will remain secure.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        RETENTION OF PERSONAL INFORMATION
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        We retain information as long as it is necessary and relevant for
                        our operations. In addition, we may retain personal information from
                        closed accounts, or accounts of past customers, to comply with the
                        law, prevent fraud, collect any fees owed, resolve disputes,
                        troubleshoot problems, assist with any investigation, enforce our
                        Terms and Conditions and take other actions permitted by law.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        THIRD PARTIES
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        Except as otherwise expressly included in this Privacy Policy, this
                        document addresses only the use and disclosure of information we
                        collect from you. If you disclose your information to others, even
                        if you link to them through our website, different rules may apply
                        to their use or disclosure of the information you provide to them.
                        AlterKnit New York does not control the privacy policies of third
                        parties, and you are subject to the privacy policies of those third
                        parties where applicable. We encourage you to ask questions before
                        you disclose your personal information to others.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        INTERNET COMMUNICATIONS
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        Despite any precautions we take, the Internet is not a 100% secure
                        environment, and we therefore cannot ensure or warrant the security
                        of information you transmit to us. You acknowledge that you provide
                        such information at your own risk. There is no guarantee that
                        information may not be accessed, disclosed, altered, or destroyed by
                        breach of any of our physical, technical, or managerial safeguards.
                        Emails, instant messages, and similar means of communication with
                        other users are not encrypted, and we strongly advise you not to
                        communicate any confidential information through these means.
                    </Typography>
                </Box>
                <Box margin={"50px 20px"} maxWidth={"1300px"}>
                    <Typography
                        color={"black"}
                        fontWeight={500}
                        fontSize={{ xs: '28px', sm: '28px', md: '28px', lg: '30px' }}
                        fontFamily={`"IndustrialGothicBannerStd", sans-serif`}
                        textTransform="lowercase"
                    >
                        CONTACT US
                    </Typography>
                    <Typography
                        color={"#575656"}
                        fontWeight={"500"}
                        fontFamily={`"ProximaNovaMedium", sans-serif`}
                        fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                        letterSpacing={"0px"}
                        lineHeight={"1.2"}
                        paddingTop={"5px"}
                    >
                        We are committed to conducting our business in accordance with these
                        principles in order to ensure that the confidentiality of personal
                        information is protected and maintained. If you have any questions
                        about the Privacy Policy, please contact us via email at
                        request@alterknitnewyork.com or phone at 212-473-MEND (6363).
                        <Typography
                            marginTop={"50px"}
                            color={"#575656"}
                            fontWeight={"500"}
                            fontSize={{ xs: '18px', sm: '21px', md: '23px', lg: '22px' }}
                            fontStyle={"italic"}
                            mb={16}
                        >
                            Last updated February 25, 2022.
                        </Typography>
                    </Typography>
                </Box>
            </Box>
        </>
    );

}
